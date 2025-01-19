---
sidebar_position: 1
---

# GitHub Actions

#### FTP版

```yaml
# 项目根目录的 .github/workflows/node.js.yml 文件配置如下
name: Node.js CI

# ftp版本
##on: [push]
#on:
#  push:
#    branches: [ "master",]
##  pull_request:
##    branches: [ "master" ]
#jobs:
#  build:
#    runs-on: centos-8.2
#    strategy:
#      matrix:
#        node-version: [20.x]
#        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/
#    steps:
#      - uses: actions/checkout@v4
#      - name: Use Node.js ${{ matrix.node-version }}
#        uses: actions/setup-node@v3
#        with:
#          node-version: ${{ matrix.node-version }}
#          cache: 'npm'
#      - run: npm install
#      - run: npm run build --if-present
#      - name: FTP Deploy
#        uses: SamKirkland/FTP-Deploy-Action@3.0.0
#        with:
#          ftp-server: sftp://sftp.xxx.com
#          ftp-username: ${{secrets.sftp_user }}
#          ftp-password: ${{ secrets.sftp_pwd }}
#          local-dir: build/
#        env:
#          CI: true



# 确保在 GitHub Secrets 中添加了 sftp_user 和 sftp_key，以便 GitHub Actions 可以进行身份验证
```

#### .git-ft-include

如果 .gitignore 文件设置了忽略 /build 文件夹那么就要在 .git-ft-include 文件设置 !build/ ,因为github运行 npm run build 后的静态文件就会存放在改文件夹,一但设置.gitignore忽略了该文件夹那么Github Actions 通过 SFTP 远程上传文件时就好出问题

```
!build/
```

**####** S**FTP版**



```shell
# sftp版本
on:
  push:
    branches: [ "master" ]
#  pull_request:
#    branches: [ "master" ]
jobs:
  build:
    runs-on: centos-8.2
    strategy:
      matrix:
        node-version: [20.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      - run: npm install
      - run: npm run build --if-present
      - name: Clean remote directory
        uses: appleboy/ssh-action@v0.1.5
        with:
          host: sftp.xxx.com
          username: ${{ secrets.sftp_user }}
          key: ${{ secrets.sftp_key }}
          # -mindepth 1 确保不会删除 upload 目录本身，只删除其中的内容
          # ! -name 'filename' 用于排除特定文件和文件夹
          # -exec rm -rf {} + 将找到的文件和文件夹传递给 rm -rf 命令以进行删除
          script: |
            find /docker/nginx/html/TraineesBlog/upload -mindepth 1 \
              ! -name 'resume' \
              ! -name 'homepage' \
              -exec rm -rf {} +
      - name: SFTP Deploy
        uses: appleboy/scp-action@v0.1.5
        with:
          source: "build/*"
          target: "/docker/nginx/html/TraineesBlog/upload"
          host: sftp.xxx.com
          username: ${{ secrets.sftp_user }}
          key: ${{ secrets.sftp_key }}
        env:
          CI: true
```

