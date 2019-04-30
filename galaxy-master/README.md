# galaxy

## 开发环境部署

``` bash

1. 打开终端，通过 cd 命令进入你想下载代码的目录

2. 输入 git clone https://github.com/zeepin/CryptoGalaxy/ 下载代码

3. cd 进入 galaxy 文件夹

4. npm install 安装项目依赖组建

//新增依赖
cnpm install element-ui --save
cnpm install vuex --save
cnpm install --save axios vue-axios

5. npm run dev 启动开发环境（前面的步骤只需要完成一次就好）

6. 这时候打开浏览器，输入 localhost:8080 就可以看到页面了

## 构建项目

1. control + c 退出开发环境

2. 在 galaxy 目录下，输入  npm run build

3. 在 galaxy 目录下的 dist 文件夹里面的内容就是构建完成的代码了