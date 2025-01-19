---
sidebar_position: 1
---

# Git(分布式仓库)

### 颜色状态

```tex
1.若文件显示红色，表示文件未add到git进行管理
2.若文件显示绿色，表示文件已经交给git管理，但从未上传到远程仓库中
3.若文件显示蓝色，表示文件已经上传过远程仓库，且此时本地文件与远程仓库文件不一致
4.若文件显示白色，表示文件与远程仓库完全一致
```

### 常用命令

```shell
git config --list # 查看git配置信息
git config user.name # 查看用户名
git config user.email # 查看邮箱地址

git config --global user.name "username" # 修改用户名
git config --global user.email "email" # 修改邮箱地址
git show # 查看最新提交的详细信息
git show abc123 # 查看特定提交的详细信息
git reflog # 查看本地 GitRepository 数据库中的所有引用更改历史，包括拉取操作,这里的引用包括分支、标签等，git reflog 命令将列出所有引用的更改历史

git log # 显示所有提交记录,包括本地提交和拉取操作
git log --grep="pull" 
git log -n 5 # 查找最近 5 条提交记录
git log --author="John Smith" # 查找作者为 "John Smith" 的提交记录
git log --grep="bugfix" # 查找提交信息中包含 "bugfix" 的提交记录
git log --since="2022-01-01" # 查找从 2022 年 1 月 1 日到现在的提交记录
git log README.md # 查看特定文件的提交历史，并提供文件路径作为参数,仅显示涉及 README.md 文件的提交记录
git log --grep="pull" # 过滤只显示显示所有特定的提交记录，包括本地提交和拉取操作










```

### 标签/版本号

标签（Tag）在 Git 中是一个可以附加到特定提交（commit）的可读名称或标识符。它们通常用于标记代码库中的重要时刻，比如版本发布或者里程碑。

#### 标签的基本特点包括：

1. **指向特定提交**：
    - 每个标签都与一个特定的 Git 提交相关联。通常，它标记的是一个版本发布或重要的里程碑。
2. **不可变性**：
    - 一旦创建，标签是不可变的，不会随着提交的变化而移动。这意味着标签所指向的提交保持不变，即使后续在同一个分支上进行了新的提交。
3. **轻量标签与附注标签**：
    - **轻量标签**（Lightweight tag）仅是指向特定提交的引用，类似于分支，不包含额外的信息。
    - **附注标签**（Annotated tag）则是一个完整的 Git 对象，包含标签名称、提交者、日期、标签消息等信息。
4. **语义化版本号**：
    - 常见的做法是使用语义化版本号（Semantic Versioning），如 `v1.0.0`，来为软件版本打标签。这种格式通常包含主版本号、次版本号和修订版本号，例如 `v1.2.3`。

- **创建标签**：

  1.基于运行创建标签命令时的当前所在的提交（commit）创建标签

  ```shell
  git tag <tag_name>  # 创建一个轻量标签 v1.0.0-beta.0 v1.0.0-alpha.2 v1.0.0-rc.36
  git tag -a <tag_name> -m "Tag message"  # 创建一个附注标签并添加消息
  ```

​	2.基于之前的某次提交设置标签创建标签

- ```shell
  git tag <tag_name> <commit_hash> # commit_hash 是提交的哈希值
  # 也可以使用分支名或相对引用来指定要打标签的提交。这在不知道具体哈希值但知道相对位置时很有用。
  git tag <tag_name> <branch_name>
  git tag <tag_name> HEAD~<num>
  	# 示例
      git tag v1.0.0 main  # 在 main 分支的 HEAD 上设置标签
      git tag v1.0.0 HEAD~2  # 在倒数第二次提交上设置标签
  ```

- **查看所有标签**：

  ```shell
  git tag  # 列出所有标签
  git log --oneline  # 查看提交历史简要信息
  ```

- **推送标签到远程仓库**：

  ```shell
  git push origin <tag_name>  # 推送特定标签到远程仓库
  git push origin --tags  # 推送所有标签到远程仓库
  ```

标签在 Git 中是非常有用的工具，可以帮助开发团队和项目管理者更好地组织和标识代码库中的重要状态和版本。

