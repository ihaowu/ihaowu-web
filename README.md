# iHaowu web - 爱好物 web 端

> 工作中～

## 技术栈

> 折腾，使劲的折腾，趁现在头发还在，等我 👨‍🦲 了，也就变强了

- [vue3](https://v3.vuejs.org/) - web 框架
- [react](https://zh-hans.reactjs.org/) - web 框架
- [lit-element](https://lit-element.polymer-project.org/) - web 框架
- [qiankun](http://qiankun.umijs.org/) - 微前端框架
- [umijs](https://umijs.org/) - 插件化的企业级前端应用框架。
- [vitejs](https://github.com/vitejs/vite) - vue.js 作者出的前端工具
- **多页** + **微前端** 架构

暂不考虑 `angular`，不是歧视，而是真没精力学了 😭。

## 目录结构

`apps` 目录下都是独立的应用，拥有独立的端口号，`microapps` 下是 **微应用**，`packages` 下是公共的模块，后期会发布到 **npm** 上，是 **应用** 和 **微应用** 都会依赖的公共模块。

```bash
Project/
├── .vscode/         - vscode 编辑器配置目录
├── apps/
|   ├── home/                --- 首页
|   └── passport/            --- 通行证服务
├── microapps/
├── packages/
├── lerna.json               --- lerna  配置文件
├── tsconfig.base.json       --- 通用基础配置
├── tsconfig.json            --- typescript 配置
└── vscode.code-workspace    --- vscode 工作区配置
```

## 快速启动

```bash
# 安装依赖
$ lerna bootstrap
```

**启动首页应用**

```bash
# 启动首页 (主应用基座)
$ yarn workspace @ihaowu-web/home dev

# 启动 dashboard 微应用
$ yarn workspace @@ihaowu-web/dashboard dev
```

## License

- MIT

[lerna]: https://lerna.js.org/
[qiankun]: http://qiankun.umijs.org/
