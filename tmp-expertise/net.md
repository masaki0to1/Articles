# ネットワーク設計標準化


## VPC
---
- CIDRブロックのレンジは /16とする
- オンプレミスと接続する場合は、事前に確認し、相互接続時に重複しないようにする

## サブネット
---
- VPCのCIDRブロック範囲から、IPアドレスレンジを切り出す
- 下記観点から適切なサブネット分割を行う
    - パブリックネットワークへのアクセスの必要性の有無
    - 拠点アクセスの有無
- 高可用性のため、2つ以上のAZを使用する

## VPCコンポーネント
---
- 適切なVPCコンポーネントを配置する
    - パブリックネットワークへアクセスが必要な場合：IGW
    - 社内にアクセスが必要な場合：VGW

## ルートテーブル
---
- IGWなどへ向けた適切な経路を作成する

## インスタンス
---
- サブネットレベル、インスタンスレベルのセキュリティポリシーを決定する
    - ネットワークACL：特に設定しない（セキュリティグループで制御する）
    - セキュリティグループ：インバウンドポートは全て閉じ、アウトバウンドポートのみ開放する
- インスタンスを配置する
    - パブリックネットワークからアクセスされるインスタンスには、EIPを割り当てる

## ドメイン
---
- Route53にドメインを登録する
    - {company-project}.mlet.jp の形で統一する
    - 場合によっては、companyだけの命名も想定される

## VPC Flow Logs
---
- VPC Flow Logs でネットワークトラフィックをキャプチャする
    - セキュリティグループ、ネットワークACLで、accepted/rejectされたトラフィックログを取得
    - Cloud Watch Logs へ連携する