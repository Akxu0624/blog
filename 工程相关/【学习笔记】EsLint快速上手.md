# EsLint学习笔记

## 背景
多人在做同一个项目开发中，不同开发人员的编码风格不一致，这会令后期的项目维护造成一定的影响，在项目初期，统一项目编码规范，即提高项目代码可读性，也减轻后期代码维护的压力。

## 使用EsLint
#### 方式一

1. 项目里安装eslint

        npm install eslint --save-dev
2.  安装完毕，命令行执行如下命令

        eslint --init（一直回车直至完毕，使用默认配置）
3.  eslintrc配置文件创建完毕
4. 在所需要检查文件的当前目录下执行命令eslint 文件名，如eslint main.js
   
   
#### 方式二（搭配webpack使用）

1. 此处执行方式一的1、2、3步骤
2. 安装eslint-loader

        npm install eslint-loader --save-dev
        npm install eslint-friendly-formatter --save-dev（可选、在终端更加友好的错误、警告提示）
3. 在webpack配置文件中使用eslint-loader
    
        module: {
        	rules: [
            	{
             		test: /\.js$/,
                	exclude: /node_modules/,
                	use: [{
                            enforce: "pre",
                	    loader: 'eslint-loader',
                	    options: {
                	        formatter: require('eslint-friendly-formatter') // 未安装该依赖包可以删除该句
                	    }
                	}]
            	}
            ]
    	}
    ==注意：如果使用babel-loader时，请确保eslint-loader应在其之前执行，既代码上顺序放在babel-loader后面，或者强行使用enforce: "pre"使它预先执行==
    。至此，最基本使用方式完毕
3. eslintrc文件配置详解，详细参考： [传送门](https://www.jianshu.com/p/a4966ddf9b0c)
4. 如果懒得配置规则，可以直接使用eslint-config-standard包，这个也是vue-cli脚手架在使用的eslint 配置。
5. 安装eslint-config-standard，它同时依赖eslint-plugin-promise插件、eslint-plugin-standard插件、eslint-plugin-import插件、eslint-plugin-node插件

        npm install eslint-config-standard --save-dev
        npm install eslint-plugin-promise --save-dev
        npm install eslint-plugin-standard --save-dev
        npm install eslint-plugin-import --save-dev
        npm install eslint-plugin-node --save-dev
        
        修改eslintrc文件即可
        "extends": "eslint:recommended" =》 "extends": "standard"


## 其他
1. 配置规则还可以写在哪些地方？
    1. webpack config中
    2. eslintrc.*
    3. package.json的eslintConfig

2. 如果不喜欢eslint-config-standard配置规范，可以到github上搜索其他eslint-config-***的规范

3. 希望在修改代码时浏览器能够实时显示eslint检验的警告和错误，vue-cli配置devServer.overlay

4. eslint-loader一些配置讲解, 详情查看：[传送门](https://www.npmjs.com/package/eslint-loader)
