# ISO27017認証維持運用向け資料
## -目的-
### 実施した各種対応の内容確認と、正しい運用を確実にすることを目的とする
---
## -前提-
### ISO/IEC 27001:2013の管理策およびISO/IEC 27017:2015の実施の手引きについては、公式を参照する
---
## -用語-
### CSC: クラウドサービスカスタマ（クラウドサービスの利用者）
### CSP: クラウドサービスプロバイダ（クラウドサービスの提供者）
---
## -使用法-
### ・基本的に維持運用において、別途追加で対応することはなく、実施した対応内容から変更なく運用されていることを確認し、継続して運用していく
### ・何らかの理由により、追加や変更があった場合には、この資料を更新することで、この資料が維持運用目的で参照されることが可能な水準を保つようにする
### ・それらに伴い、各種仕様書やマニュアル、規約などの変更も忘れずに行うこと
### ・その際の追加内容や変更内容の妥当性、有効性についての判断は、公式の管理策及び実施の手引きや、doc配下にあるISO管理策への解釈をまとめた資料を参照すること
---
## -目次-
- 5.1.1：[情報セキュリティのための方針群](#511-情報セキュリティのための方針群)
- 6.1.1：[情報セキュリティの役割及び責任](#611-情報セキュリティの役割及び責任)
- 6.1.3：[関係当局との連絡](#613-関係当局との連絡)
- 7.2.2：[情報セキュリティの意識向上、教育及び訓練](#722-情報セキュリティの意識向上教育及び訓練)
- 8.1.1：[資産目録](#811-資産目録)
- 8.2.2：[情報のラベル付け](#822-情報のラベル付け)
- 9.1.2：[ネットワーク及びネットワークサービスへのアクセス](#912-ネットワーク及びネットワークサービスへのアクセス)
- 9.2.1：[利用者登録及び登録解除](#921-利用者登録及び登録解除)
- 9.2.2：[利用者アクセスの提供](#922-利用者アクセスの提供)
- 9.2.4：[利用者の秘密認証情報の管理](#924-利用者の秘密認証情報の管理)
- 9.4.1：[情報へのアクセス制限](#941-情報へのアクセス制限)
- 9.4.4：[特権的なユーティリティプログラムの使用](#944-特権的なユーティリティプログラムの使用)
- 10.1.1：[暗号による管理策の利用方針](#1011-暗号による管理策の利用方針)
- 10.1.2：[鍵管理](#1012-鍵管理)
- 11.2.7：[装置のセキュリティを保った処分又は再利用](#1127-装置のセキュリティを保った処分又は再利用)
- 12.1.2：[変更管理](#1212-変更管理)
- 12.1.3：[容量・能力の管理](#1213-容量・能力の管理)
- 12.3.1：[情報のバックアップ](#1231-情報のバックアップ)
- 12.4.1：[イベントログ取得](#1241-イベントログ取得)
- 12.4.3：[実務管理者および運用担当者の作業ログ](#1243-実務管理者および運用担当者の作業ログ)
- 12.4.4：[クロックの同期](#1244-クロックの同期)
- 12.6.1：[技術的ぜい弱性の管理](#1261-技術的ぜい弱性の管理)
- 13.1.3：[ネットワークの分離](#1313-ネットワークの分離)
- 14.1.1：[情報セキュリティ要求事項の分析及び仕様化](#1411-情報セキュリティ要求事項の分析及び仕様化)
- 14.2.1：[セキュリティに配慮した開発のための方針](#1421-セキュリティに配慮した開発のための方針)
- 15.1.1：[供給者関係のための情報セキュリティの方針](#1511-供給者関係のための情報セキュリティの方針)
- 15.1.2：[供給者との合意におけるセキュリティの取り扱い](#1512-供給者との合意におけるセキュリティの取り扱い)
- 15.1.3：[ICTサプライチェーン](#1513-ictサプライチェーン)
- 16.1.1：[責任及び手順](#1611-責任及び手順)
- 16.1.2：[情報セキュリティ事象の報告](#1612-情報セキュリティ事象の報告)
- 16.1.7：[証拠の収集](#1617-証拠の収集)
- 18.1.1：[適用法令及び契約上の要求事項の特定](#1811-適用法令及び契約上の要求事項の特定)
- 18.1.2：[知的財産権](#1812-知的財産権)
- 18.1.3：[記録の保護](#1813-記録の保護)
- 18.1.5：[暗号化機能に対する規則](#1815-暗号化機能に対する規制)
- 18.2.1：[情報セキュリティの独立したレビュー](#1821-情報セキュリティの独立したレビュー)
- CLD.6.3.1：[クラウドコンピューティング環境における役割及び責任の共有及び分担](#cld631-クラウドコンピューティング環境における役割及び責任の共有及び分担)
- CLD.8.1.5：[クラウドサービスカスタマの資産の除去](#cld815-クラウドサービスカスタマの資産の除去)
- CLD.9.5.1：[仮想コンピューティング環境における分離](#cld951-仮想コンピューティング環境における分離)
- CLD.9.5.2：[仮想マシンの要塞化](#cld952-仮想マシンの要塞化)
- CLD.12.1.5：[実務管理者の運用のセキュリティ](#cld1215-実務管理者の運用のセキュリティ)
- CLD.12.4.5：[クラウドサービスの監視](#cld1245-クラウドサービスの監視)
- CLD.13.1.4：[仮想及び物理ネットワークのセキュリティ管理の整合](#cld1314-仮想及び物理ネットワークのセキュリティ管理の整合)
---
## [5.1.1 情報セキュリティのための方針群](#目次)
### 下記の通り、方針、仕様書、マニュアル、規約を作成した
### CSC:
1. セキュリティ方針（ISO27001認証時に規定）
2. アクセス制御方針
3. クラウドサービス仕様書
4. クラウドサービス**利用**マニュアル

### CSP:
1. セキュリティ方針（ISO27001認証時に規定）
2. アクセス制御方針
3. クラウドサービス仕様書
4. クラウドサービス**提供**マニュアル
5. エンドユーザー向け利用規約

## [6.1.1 情報セキュリティの役割及び責任](#目次)
### CSC:
- AWSが定める責任共有モデルを理解し、また、当社規定の情報セキュリティ要求事項が、AWSの責任共有モデル内のAWS側責務である'クラウドのセキュリティ責任'と、我々の責務である'クラウドにおけるセキュリティ責任'のそれぞれの適用範囲とその内容について満たすものであることを確認した
- 参照：[責任共有モデル|AWS](https://aws.amazon.com/jp/compliance/shared-responsibility-model/)

### CSP:
- 責任範囲を明確化するための、エンドユーザー向け利用規約を作成した

## [6.1.3 関係当局との連絡](#目次)
### CSC:
- AWS契約時、必要な情報の確認をBOの方で行ったことを確認した
- AWSリージョンは国内のみを選択することにし、適用法令が日本の法令であることを確かにした
- AWSサポートの利用方法やAWS公式の最新の障害情報案内ページの確認をした
- 参照：[AWS Health Dashboard](https://health.aws.amazon.com/health/status)

### CSP:
- エンドユーザー向け利用規約に、当社所在地およびデータ保管国ともに、日本・東京という記載をした

## [7.2.2 情報セキュリティの意識向上、教育及び訓練](#目次)
### CSC:
- ISMS活動の１つであるセキュリティ教育の中に、クラウドに関する内容を今後含めることにし、その旨をBOへ連携した

### CSP:
- 社内の製品導入コンサルタントが、製品導入時に製品の利用方法や注意事項を説明することや、製品操作マニュアルの資料を提供することを既に行っており、それらをもってユーザーの情報セキュリティ意識への対応として十分であることを確認した

## [8.1.1 資産目録](#目次)
### CSC:
- 既に運用中の資産目録の中で、下記のクラウドサービスデータ、クラウドサービス派生データについて、追記および修正をした
    - アクティビティログ（AWS CloudTrail）
    - サービスログ（Amazon CloudWatch）
    - バックアップデータ（Amazon RDS, Amazon S3）
    - ソースコード（GitHub）
    - DB内データ（Amazon RDS）
    - 認証情報（AWS IAM, AWS IAM Identity Center）※ルートユーザーのメールアドレス、パスワードについてはBOで管理
    - その他クラウドサービスの契約情報など

### CSP:
- 上記の資産目録への追記および修正内容で満たすことを確認した
- 製品の出力としての成果物はクラウド上では保存されず、ユーザーのクライアント上で管理されるので、資産目録対象外とした

## [8.2.2 情報のラベル付け](#目次)
### CSC:
- 対象とするプロジェクトや環境などの情報をAWSアカウント名やAWSサービス名の命名規則やタグ運用などで管理していることを確認した

### CSP:
- 製品内でファイルを一覧表示できるので、ユーザー側でファイル名による管理をしてもらうことにした

## [9.1.2 ネットワーク及びネットワークサービスへのアクセス](#目次)
### CSC:
- マルチアカウントアーキテクチャを設計し導入した
- AWS IAM の整理を行い、最小権限の原則に基づいてAWS IAM Identity Cener で SSO 環境を構築した
- SCP を作成し、アカウント単位での予防的ガードレールを構築した
- AWS Config Rule を導入し、アカウント単位での発見的ガードレールを構築した

### CSP: 管理策なし

## [9.2.1 利用者登録及び登録解除](#目次)
### CSC: 管理策なし

### CSP:
- adminユーザーからのみ、他ユーザーの登録削除ができる機能を追加実装した
- それらの利用手順については、製品導入時にコンサルタントから説明があることを確認した

### [9.2.2 利用者アクセスの提供](#目次)
### CSC: 管理策なし

### CSP:
- adminユーザーからのみ、他ユーザーのアクセス権を管理できる機能を追加実装した

### [9.2.3 特権的アクセス県の管理](#目次)
### CSC:
- admin権限以上の権限が付与されたグループに所属するユーザーにMFA認証を設定することを義務付けた
- 個人のスマートフォン内に Google Authenticator アプリをインストールし、MFA認証を設定した
### CSP:
- MFA認証機能の実装を検討したが、クライアントのIPアドレス制限を行っており、それで十分との判断だったので、特に対応はしなかった。(事例として、多要素認証導入以外の対策例として、ログイン時IPアドレス制限の実施などが挙げられているので、問題はない)

### [9.2.4 利用者の秘密認証情報の管理](#目次)
### CSC:
- 自社で運用しているパスワードルールが、AWS IAM Identity Center 上でも適用できていることを確認した 
- 参照：[IAM Identity Center で ID を管理する際のパスワード要件](https://docs.aws.amazon.com/ja_jp/singlesignon/latest/userguide/password-requirements.html)

### CSP:
- 製品導入時に、コンサルタントからパスワードの登録や変更の手順の説明があることを確認した

### [9.4.1 情報へのアクセス制限](#目次)
### CSC:
- AWS IAM, AWS IAM Identity Center と使い、アクセス制御を適切に構築した（9.1.2 での対応で満たされる）

### CSP:
- アクセス制御の権限の切り分けを行い、一般ユーザーの権限と管理者ユーザーの権限の２つで十分であるという判断をした

### [9.4.4 特権的なユーティリティプログラムの使用](#目次)
### CSC:
- IAM に対する CreatePolicy は IAM 権限自体を変更できるので、一種のユーティリティプログラムであるという認識をした
- admin権限を、IAM や IAM Identity Center などのアクセス権限自体への操作権限は制御する対応をした（それぞれIamAdmin, IamIdentityCenterAdmin という権限を作成し、SCP との組み合わせで実現した）

### CSP:
- 製品にはユーティリティプログラムに該当するような機能や権限は実装していない

### [10.1.1 暗号による管理策の利用方針](#目次)
### CSC:
- AWSセキュリティプロセスの概要にて下記を確認し、自社の暗号化方針を満たしていることを確認した
    - Amazon EBS は AES256 で暗号化可能である
    - Amazon S3 は SSL で暗号化されたエンドポイント経由でアップロード可能
    - Amazon S3 は複数の暗号化方式を選択して、データの保管が可能
    - Amazon RDS は SQLServer, Oracle などの DBエンジン選択時に、 TDE で暗号化可能
- 参照：[アマゾンウェブサービス-セキュリティプロセスの概要](https://d1.awsstatic.com/whitepapers/ja_JP/Security/AWS_Security_Whitepaper.pdf)

### CSP:
- クラウドサービス仕様書の 2.4.4セキュリティに記載があることを確認した

### [10.1.2 鍵管理](#目次)
### CSC:
- インスタンスへのログイン時にキーペアを利用しており、それらの鍵は AWS KMS で管理することにした
- AWS KMS で社内規定の鍵管理ルールを満たせることを確認した

### CSP: 管理策なし

### [11.2.7 装置のセキュリティを保った処分又は再利用](#目次)
### CSC:
- 下記のことを確認した
    - AWS では機器破壊によるデータの完全消去は不可能
    - AWS では上書きによるデータ消去が実施される
    - AWS ではメディアがライフサイクルを終えるまでセキュアに管理される
    - AWS ではメディアはデータセンターを離れる際にワイプ処理または消磁処理を施された後、物理的に破壊される
    - これらの実施について、第三者によるコンプライアンスレポートは AWS Artifact から入手可能

- 参照：[クラウドにおける安全なデータの廃棄](https://aws.amazon.com/jp/blogs/news/data_disposal/)
- 参照：[AWS Artifact](https://aws.amazon.com/jp/artifact/)

### CSP:
- AWS のルールに準拠することをエンドユーザー向けの規約に記載した

### [12.1.2 変更管理](#目次)
### CSC:
- 現在の運用で、AWS からアナウンスされるサービス変更や修正などに関するメールをBO側で確認しており、それで問題ないことを確認した
- 今後必要があれば、そのメールを他のポジションの社員へもメーリングすることや、クラウドサービスの変更を管理・対応するための手順を作成することを検討しても良いかもしれない

### CSP:
- 製品の機能変更や廃止、一時的なメンテナンスなど、ユーザーへ悪影響を及ぼす可能性を含む変更を行う際には、メールで通達するようにした

### [12.1.3 容量・能力の管理](#目次)
### CSC:
- Amazon CloudWatch Alarm で監視し、Amazon SNS でメール通知するよう設定した

### CSP:
- 上記の AWS 側での対応でこちらも対応出来ていることを確認した

### [12.3.1 情報のバックアップ](#目次)
### CSC:
- Amazon EBS, Amazon RDS 上でそれぞれスナップショットを取得するよう設定した

### CSP:
- クラウドサービス仕様書の、2.4.6バックアップの記載内容を次のように変更した
    - 「本サービスのDBには、AWSが提供するDBサービスであるAmazon RDSを使用します。DBインスタンスのスナップショットを日次で取得し、Amazon S3にて7日間保管します。また、Amazon RDSが提供する自動バックアップ機能を利用し、当日から7日前までのポイントインタイムリカバリも可能です。」
- バックアップ実施の手順については、ユーザーによりシナリオが大きく異なり、現実的に不可能であったので、製品導入時にコンサルタントがユーザーと一緒に決定し、サポートする対応とした

### [12.4.1 イベントログ取得](#目次)
### CSC:
- Amazon CloudWatch, AWS CloudTrail でそれぞれ取得できるサービスログ、アクティビティログを取得するログレベルとして定義し、実際に構築した

### CSP:
- 製品へのログインログをこちらで記録しており、ユーザーからの閲覧は不可能だが、必要に応じて提供可能であるという取り決めにし、利用規約にも記載した

### [12.4.3 実務管理者および運用担当者の作業ログ]
### CSC:
- AWS CloudTrail で作業ログを取得するように構築した

### CSP: 管理策なし

### [12.4.4 クロックの同期](#目次)
### CSC:
- AWS でのクロック同期システムについて確認した
- 参照：[Amazon Time Sync Service のご紹介](https://aws.amazon.com/jp/about-aws/whats-new/2017/11/introducing-the-amazon-time-sync-service/)

### CSP:
- 上記対応と同じ

### [12.6.1 技術的ぜい弱性の管理](#目次)
### CSC:
- BOへAWSからの最新情報が届くようにした

### CSP:
- メールで情報提供することにした

### [13.1.3 ネットワークの分離](#目次)
### CSC:
- AWSの責任範囲において、ネットワークやテナントの分離をセキュアに確実に実施管理されている旨のアナウンスがあることを確認した
- 参照：[Amazon VPC の仕組み](https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/how-it-works.html)
- 参照：[AWS セキュリティのベストプラクティス](https://d1.awsstatic.com/International/ja_JP/Whitepapers/AWS_Security_Best_Practices.pdf)

### CSP:
- マルチアカウント環境を導入し、ネットワークの分離を確実にした

### [14.1.1 情報セキュリティ要求事項の分析及び仕様化](#目次)
### CSC:
- AWSは分散されたデータセンターによる十分信頼できるクラウドサービスをAWSのセキュリティ方針に則って提供されていることを確認した
- 自社内の委託先選定基準に基づいて、社内の承認フローを経てAWSの利用を開始したことを確認した

### CSP:
- 基盤としてのAWSをしっかり選定し、製品自体についてもセキュリティに配慮した設計となっている。（製品のID/Pass機能、AWS基盤でセキュリティを高めている各種機能）
- クラウドサービス仕様書に、「ウェブページにて情報セキュリティ方針を記載」という旨を記載し、ウェブページへの該当の内容を追記した

### [14.2.1 セキュリティに配慮した開発のための方針](#目次)
### CSC:
- AWSはセキュリティ設計の原則に従って開発されていることを確認した
- 参照：[アマゾンウェブサービス：セキュリティプロセスの概要](https://d1.awsstatic.com/whitepapers/ja_JP/Security/AWS_Security_Whitepaper.pdf)

### CSP:
- 自社が安全に開発していることを利用規約に記載した

### [15.1.1 供給者関係のための情報セキュリティの方針](#目次)
### CSC:
- 自社内の委託先選定基準に基づいて、社内の承認フローを経て選定しているので、今後も実施していくことで問題ないことを確認した

### CSP: 管理策なし

### [15.1.2 供給者との合意におけるセキュリティの取り扱い](#目次)
### CSC:
- 6.1.1で責任分界について、12.3.1でデータバックアップの責任について検討・対応したきたため、必然的に今回の管理策の水準を満たすことになることを確認した

### CSP:
- セキュリティについてのユーザーとの合意内容を、利用規約に記載した

### [15.1.3 ICTサプライチェーン](#目次)
### CSC: 管理策なし

### CSP:
- ISMSの規定で既に委託先管理のための契約時チェック項目があり、それで管理しているので問題ないことを確認した

### [16.1.1 責任及び手順](#目次)
### CSC:
- ISMSで下記の観点についてそれぞれ規定している内容で問題ないことを確認した
- 責任：AWS上で起きたセキュリティインシデントについて、自社に通知するレベルの境界と責任者
- 手順：社内での報告フロー

### CSP:
- クラウドサービス仕様書に、インシデント事象認識後にメールでユーザーへ通知する旨を記載した

### [16.1.2 情報セキュリティ事象の報告](#目次)
### CSC:
- インシデント発生時に、連絡を受ける手段（メール）や、AWSの対応状況の確認手段、脆弱性についての連絡窓口などについて、認識した

### CSP:
- クラウドサービス仕様書に、ユーザーとの窓口として、サポートデスクを展開していることとその対応時間を記載した

### [16.1.7 証拠の収集](#目次)
### CSC:
- 裁判所や警察などの公的機関から、法令に基づく開示要求があった場合、CSPによって自分たちのコンテンツが提供される場合を認識した

### CSP:
- 裁判所や警察などの公的機関から、法令に基づく開示要求があった場合、ユーザーのデータの全部または一部を第三者へ開示することがある旨を利用規約へ記載した

### [18.1.1 適用法令及び契約上の要求事項の特定](#目次)
### CSC:
- AWS公式ページにて、関連法規や準拠の記載を確認した
- 参照：[コンプライアンスプログラム | AWS](https://aws.amazon.com/jp/compliance/programs/)

### CSP:
- 準拠法は日本法であることを利用規約へ記載した

### [18.1.2 知的財産権](#目次)
### CSC:
- ライセンスが必要なソフトウェアは利用していないことを確認した

### CSP:
- 製品が提供する情報に関する知的財産権は当社に帰属する旨を記載した

### [18.1.3 記録の保護](#目次)
### CSC:
- Amazon CloudWatch, AWS CloudTrail でログを取得し、必要に応じてS3へ長期保存するようにした

### CSP:
- 本サービス上で収集する情報やログについては、契約終了後においても本サービス改善・発展または保守管理を目的として保有し、把握分析する旨をクラウドサービス仕様書に記載した

### [18.1.5 暗号化機能に対する規制](#目次)
### CSC:
- 経済産業省からの下記通達通り、通常のクラウドサービスの利用では、外為法に抵触しないことを確認した
- 参照：[経済産業省-通達1](https://www.meti.go.jp/policy/anpo/law_document/tutatu/t10kaisei/130621ekimu_tutatu.pdf)
- 参照：[経済産業省-通達2](https://www.meti.go.jp/policy/anpo/law_document/tutatu/t10kaisei/ekimu__tutatu.pdf)

### CSP:
- ユーザーが法令・規制などを遵守することを助けるため、利用している暗号化方式について、クラウドサービス仕様書に記載した

### [18.2.1 情報セキュリティの独立したレビュー](#目次)
### CSC:
- AWSは、ISO27001をはじめ様々な認証を取得しており、様々な第三者機関からの審査をクリアしていることを確認した
- 今後もAWSがその認証の維持や審査の継続をしていく想定でいるが、もし第三者認証や審査への対応を辞めるというアナウンスがAWSから発表されれば、その時に対応を検討することにした

### CSP:
- ISO27001だけでなく、ISO27017を今回取得できたので、Webページにて両認証取得について公開した

### [CLD.6.3.1 クラウドコンピューティング環境における役割及び責任の共有及び分担](#目次)
### CSC:
- 新たにクラウドサービス責任者を選任した

### CSP:
- 上記と同じ

### [CLD.8.1.5 クラウドサービスカスタマの資産の除去](#目次)
### CSC:
- AWSでは、安全にデータの廃棄が行われていることを確認した
- AWSでは、下記の通りデータの返却や消去がいつでも可能であることを確認した
    - S3に預けたデータはいつでもダウンロード可能
    - RDSからはデータベースログファイルをダウンロード可能
    - CloudWatch, CloudTrail など各種ログを取得でき、S3にて保存・ダウンロードが可能
- 参照：[クラウドにおける安全なデータ廃棄](https://aws.amazon.com/jp/blogs/news/data_disposal/)

### CSP:
- AWSアカウントは削除から90日経過後に完全削除されるため、利用規約に「IaaSプロパイダの規定に準ずる」という記載をした

### [CLD.9.5.1 仮想コンピューティング環境における分離](#目次)
### CSC: 管理策なし

### CSP:
- マルチアカウントアーキテクチャを採用し、AWS基盤をアカウント単位で分離し、製品のサービス環境をユーザー単位で確実に分離した
- 製品のサービスへのアクセスはセキュリティグループによるIP制限や、正しいIAM権限の発行により制御するようにした

### [CLD.9.5.2 仮想マシンの要塞化](#目次)
### CSC:
- 下記の通り対応した
    - ポート制限：インバウンドポートを閉じ、AWS SSM SessionManager によるポーリング通信でサーバへアクセスするようにした
    - プロトコル制限：不要なプロトコルは使用しないように制限した
    - マルウェア対策：セキュリティグループ、Amazon GuardDutyで対応するよう設計した
    - ログ取得：サーバにCloudWatchAgentをインストールし、必要なログを取得するよう設計した
    - （サービス制限については不要と判断した）

### CSP:
- 上記と同じ

### [CLD.12.1.5 実務管理者の運用のセキュリティ](#目次)
### CSC:
- CloudFormationのデプロイ手順書や、サーバ・DBを操作する際の手順書を作成した

### CSP:
- 既にテスト実施手順書が存在し、そちらで十分であることを確認した

### [CLD.12.4.5 クラウドサービスの監視](#目次)
### CSC:
- Amazon CloudWatch, AWS CloudTrail, AWS Config, Amazon GuardDuty, AWS SecurityHubを導入・構築した

### CSP:
- 上記のようにAWS側で不正利用やアクセスを監視しているので問題ないことを確認した

### [CLD.13.1.4 仮想及び物理ネットワークのセキュリティ管理の整合](#目次)
### CSC: 管理策なし

### CSP: 
- SaaS事業者に該当するので、適用除外とした