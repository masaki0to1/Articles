- ディレクトリをgit管理下にする

		cd /path/to/dir
		git init

- 新規リモートリポジトリ設定コマンド

		git remote add <RemoteRepositoryName> <RemoteRepositoryURL>

- 既存リモートリポジトリ変更コマンド

		git remore set-url <RemoteRepositoryName> <RemoteRepositoryURL>

- 複数リモートリポジトリ追加コマンド（１つのリポジトリ名で複数リポジトリ管理）

		git remote set-url --add  <RemoteRepositoryName> <RemoteRepositoryURL>

- なお、pull するリポジトリについては、(fetch) に設定されたリポジトリから取得することになるが、その値は変更できず最初に追加したリポジトリになるため、順番に注意する
- もしくは、下記コマンドで削除し再設定する必要がある

		git remote rm origin                   # remove a first remote
		git remote -v

		# if you see your second origin
		git remote rm origin                   # remove the second origin
		git remote add origin <repo-url>       # add new origin
		git remote -v                          # see all the remotes you have  