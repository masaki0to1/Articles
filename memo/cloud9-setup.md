# Cloud9リソースを作成したらまずやる対応とSSMセッションについて　※Cloud9環境EC2のOSはAmazonLinux2を想定
## **A: awscli のバージョンを１から２へあげる**
---
## #Cloud9環境の**EC2**内の設定

### 1. awscli のバージョンを確認する
    aws --version

### 2. バージョン１の awscli をアンインストールする
    sudo yum remove awscli -y

### 3. バージョン２の awscli をインストールする
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

    unzip awscliv2.zip

    sudo ./aws/install

### 4. awscli のパスを確認する
    which aws
### 5. awscli のシンボリックリンクを作成し、awscli のバージョンを確認する
    ln -s /usr/local/bin/aws aws 

    aws --version

### ※シンボリックリンクが反映されない場合がある為、bash のキャッシュをクリアする  
    hash -r


## **B: SSMの設定をする（Cloud9のConnectionTypeがSSMの場合）**
--- 

## #Cloud9環境の**EC2**内の設定
### 1.1 SSM Agent が起動しているか確認する

    sudo systemctl status amazon-ssm-agent
### 1.2 起動していない場合、下記コマンドで起動

    sudo systemctl start amazon-ssm-agent
### ※ 他のOSの場合のコマンドは下記URLを参照
    https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/ssm-agent-status-and-restart.html

### 1.3 SSM Agent がインストールされていない場合、下記URLを参照
    https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/sysman-manual-agent-install.html

### 2. SSM Agent のバージョンを確認する
    yum info amazon-ssm-agent

### ※ 他のOSの場合のコマンドは下記URLを参照
    https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/ssm-agent-get-version.html


## #Cloud9へ接続する**ローカルPC**の設定　※OSはWSL2のUbuntu-20.04を想定
### 1.1 SSM Session Manager プラグインがインストール済みか確認する
    session-manager-plugin --version
   
### 1.2 インストールされていない場合、Session Manager プラグイン RPM パッケージをダウンロードする
    curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/ubuntu_64bit/session-manager-plugin.deb" -o "session-manager-plugin.deb"

### 2 インストールコマンドを実行する
    sudo dpkg -i session-manager-plugin.deb

### ※ pluginインストール後、PCを再起動すること

### ※ 他のOSの場合は、下記URLを参照
    https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html#install-plugin-debian

## **C: セッションを開始する**
---
## #SSM Session Manager でSSMセッションを開始
### 1. AWS Profile を設定する（今回はIAM Identity Center経由でログインする）
    
    aws configure sso
### 2. ログインする

    aws sso login --profile <Login User Profile>

### 3. SSMセッションを開始する

    aws ssm start-session --target <Instance ID> --profile <Login User Profile>

## #SSM Session Manager でSSHセッションを開始

### 1. 下記コマンドでRSA鍵のペアを生成し、Cloud9 EC2 インスタンス内/home/ec2-user/.ssh/authorized_keys ファイル内に公開鍵を追記する

    ssh-keygen -b 4096 -C 'VS Code Remote SSH user' -t rsa

### 2. .ssh/configファイルを作成しローカルPCへ配置する
- Windowsの場合：

        Host <Any Name>
            HostName <Instance ID>
            User ec2-user
            IdentityFile C:\Users\<UserName>\.ssh\<RSA Private Key File Name>
            ProxyCommand C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe "aws ssm start-session --profile <Login User Profile> --target %h --document-name AWS-StartSSHSession --parameters 'portNumber=%p'"
- Linuxの場合：

        Host <Any Name>
            HostName <Instance ID>
            User ec2-user
            IdentityFile ~/.ssh/<RSA Private Key File Name>
            ProxyCommand sh -c "aws ssm start-session --profile <Login User Profile> --target %h --document-name AWS-StartSSHSession"

### 3. ssh 接続する

        ssh <Specify Host of .ssh/config file>

#### ※ --profile にはec2にログインするユーザー・対象アカウントのプロファイルを選択する　※AWS/config内にプロファイルを記載しておくこと

### **<SSH 接続要件>**
- SSM Agent(Ver:2.3.672.0以降)がマネージドノードにインストール済みである（今回はCloud9環境EC2インスタンスにインストール済み）
- Session Manager で SSH 接続が有効化されている

    #### ※ 有効化手順は下記URLを参照

    https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/session-manager-getting-started-enable-ssh-connections.html

    #### ※ セッションの詳細については下記URLを参照
    https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html#start-ec2-console

## **D: スクリプトの設定**
---
### 1. Cloud9インスタンス内の ~/.c9/ 配下に stop-if-inactive.sh を配置する

        sudo curl https://raw.githubusercontent.com/aws-samples/cloud9-to-power-vscode-blog/main/scripts/stop-if-inactive.sh -o ~/.c9/stop-if-inactive.sh
        sudo chown root:root ~/.c9/stop-if-inactive.sh
        sudo chmod 755 ~/.c9/stop-if-inactive.sh

### 2. ~~ローカルPCの.ssh 配下に ssm-proxy.sh スクリプトを配置する~~

- Windowsの場合：フルパスでの入力が必要なことに注意

        curl https://raw.githubusercontent.com/aws-samples/cloud9-to-power-vscode-blog/main/scripts/ssm-proxy.sh -o C:\Users\<UserName>\.ssh\ssm-proxy.sh

        icacls C:\Users\<UserName>\.ssh\ssm-proxy.sh /grant <UserName>:RX
- Linuxの場合：

        curl https://raw.githubusercontent.com/aws-samples/cloud9-to-power-vscode-blog/main/scripts/ssm-proxy.sh -o ~/.ssh/ssm-proxy.sh

        chmod +x ~/.ssh/ssm-proxy.sh


### 3. ~~下記の通りに ssm-proxy.sh ファイルの環境変数の値を一部修正する~~
    AWS_PROFILE=$3
    AWS_REGION=$4

### 4. ~~ローカルPC内の.ssh/config ファイル内のProxyCommandを以下と差し替える~~ ->なぜか kex_exchange_identification: Connection closed by remote host エラーが出てアクセスできない

- Linuxの場合：

        ProxyCommand sh "~/.ssh/ssm-proxy.sh %h %p <AWS Config Profile> <Region where Cloud9 deployed>"

- Windowsの場合：

        ProxyCommand C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe "C:\Users\<UserName>\.ssh\ssm-proxy.sh %h %p <AWS Config Profile> <Region where Cloud9 deployed>"

### 5. ssh 接続する
    ssh <Specify Host of .ssh/config file>

---
## **補足**
---
## 
- ssh 接続する前に aws sso login しておかないと、下記エラーが出る（セッションが切れたタイミングで再ログインが必要）

        The SSO session associated with this profile has expired or is otherwise invalid. To refresh this SSO session run aws sso login with the corresponding profile.
        kex_exchange_identification: Connection closed by remote host
- Windowsでは、ProxyCommand には絶対パスでコマンドを指定する必要がある
- ProxyCommand ssh ○○としたとき、下記のエラーが出る

        CreateProcessW failed error:2
        posix_spawnp: No such file or directory
- ssm-user ec2-user を切り替えるコマンド

        sudo su --login <UserName>

- ログイン中のユーザー情報を確認するコマンド

        aws sts get-caller-identity

- Windowsからec2へフォルダ毎転送するコマンド

        scp -r C:\path-to-dir\sampledir <Host in ssh-config>:/home/ec2-user/environment/destinationdir