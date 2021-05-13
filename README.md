1. 电商网站(如  京东、天猫、苏宁易购 小米 华为 OPPO等)
2. 页面( 网站首页4屏 注册页 登陆页 商品详情页 购物车页 )
3. 前后端全站PC端项目 不考虑移动端（ 可以使用bootstarp ）
4. 功能实现( 首页所有可见效果 注册和登陆实现功能和表单验证 商品详情准备好静态页面 购物车页面准备好静态页面 )
5. 所有前端JavaScript代码 采用 ES6模块规范
6. 前后端分离( 分开文件目录 后端仅提供数据接口 采用php )
7. 所有的样式采用less

项目目录结构
- www.jd.com
- [node_modules]  存放第三方node模块  由npm自动生成
- [interface]     用于存放php文件
    -[library]    库文件  例如  conn
- [src]           存放前端项目源码（开发环境）
   - [html]      
   - [styles]
   - [css]
   - [js]
     - [library]   前端的库文件（模块）
          - jquery.js
          - bootstrap.js
          - cookie.js
          - querystring.js
     - index.js
     ...

   - [img]
- [dist]          (不需要自己创建)用于存放工具生成文件（部署环境文件） gulp grunt webpack  项目构建工具
    -[html]
        - index.html
    -[css]
        - index.min.css
    -[js]
        -[library]
            - jquery.min.js
            - bootstrap.min.js
            - cookie.min.js
        - index.min.js
        - product.min.js
- gulpfile.js     gulp的配置文件
- .gitignore      git忽略列表（点开头，为隐藏文件）
- package.json    nodejs模块依赖列表
- README.md

