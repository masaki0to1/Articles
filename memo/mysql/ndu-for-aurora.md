# Aurora MySQL の無停止アップグレードについて

## 手順

### レプリケーションクラスターの作成
1. アップグレード対象のクラスター内でbinlogが有効化されたライターインスタンスを作成する
    - クラスターパラメータグループの、binlog_formatパラメータの値をMIXEDに設定し適用する
    - 対象クラスター内で新規リーダーインスタンスを立ち上げる　
        - この際、フェイルオーバー優先順位をTier0にしておく (他のDBインスタンスより数字が小さくなること)
    - 新規リーダーインスタンスをライターに昇格する
    - Tips: 既存のDBインスタンスを再起動することでもパラメータの更新が可能だがダウンタイムが発生する。新規追加したインスタンスに最新パラメータが反映されることを利用して、binlogパラメータが有効化されたレプリケーションソース用ライターインスタンスを無停止で準備することができる。

2. binlogパラメータが有効になったレプリケーションソース用ライターインスタンスからスナップショットを作成する
    - リーダーインスタンスでは、レプリケーションに必要な情報が取得できないので注意

3. スナップショットから復元してDBインスタンスを作成する
    - 現状のインスタンスと全く同様の設定をして復元する
    - ここでは、まだエンジンのアップグレードはしない

4. レプリケーションの事前準備を行う
    - 復元が完了すると、ログイベントにbinlogのファイル名とポジティブが表示されるのでメモする

5. 手動でレプリケーションする

```
# マスターに接続
CALL mysql.rds_set_external_master ('%{DATABASE_HOST}', 3306, '%{DATABASE_USER_NAME}', '%{DATABASE_PASSWORD}', '%{4.でメモしたfilename}', %{4.でメモしたposition}, 0);

# レプリケーションを開始
CALL mysql.rds_start_replication;

# show slave status;
# いろいろ出てくる

# レプリケーションを中止する場合
CALL mysql.rds_stop_replication;

# レプリケーションが不要になった場合
CALL mysql.rds_reset_external_master;
```

6. スレーブ側（show slave status）で、 Slave_IO_Running と Slave_SQL_Running が共に yes になり、それ以降もずっと yes であることを確認する

7. マスター側（show master status）とスレーブ側（show slave status）で同期状態をチェックし、追いついたら同期完了
https://repost.aws/ja/knowledge-center/aurora-mysql-db-cluser-read-only-error

8. レプリケーション先のDBに対してインプレースアップグレードを実行する
    - この際、パラメータグループは Aurora 3 (MySQL8.0) 用のものを事前に用意しておき設定する

9. 無事アップグレードが完了したら、しばらく流しておきレプリケーションが止まらないことを確認する

### 新系統への移行