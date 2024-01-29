# アクセス制御方針
## 複数ポリシーの組み合わせによる制御
### 目的：複数ポリシーを組み合わせ、柔軟かつセキュアなアクセス制御を実現する
- Identity-based Policies
    - SSO Permission Sets
    - IAM Role
- Resource-based Policies
    - S3 Bucket Policy
- Organizations SCPs
---
## マルチアカウント環境におけるアクセスの一元管理
### 目的：AWS IAM Identity Center(※以降IC)を使用し、セキュアで簡単に複数アカウントアクセスの一元管理を実現する

### IAM設計思想：
- IAM User
    - 基本的にIAMユーザーは作成しない(ICに集約)
    - 1アカウントへのアクセスしか持たないユーザーもICで管理
    - ID/Passでログインせず、アクセスキーでAPI運用をするようなユーザーはIAMで作成する
- IAM Role
    - アカウント内での作業運用時に、一時的な昇格が必要なケースがある場合、ロールを作成する