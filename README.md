# 阿拉丁统计 SDK mpvue框架集成SDK DEMO
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
### 集成步骤
> 1.[下载SDK]()<br>
> 2.将sdk放入`项目根目录下`的`static`文件夹中<br>
> 3.根据项目，SDK提供了2中接入方式
  
  ##### `未使用微信小程序插件`接入方式《接入方式1》
> 4.在根目录下的`src`文件中找到`main.js` ,将SDK引入即可。<br>
```javascript
  //将改行代码放在第一行
  import '../static/ald-stat'
  
  import Vue from 'vue';
  import App from './App';
  Vue.config.productionTip = false;
  App.mpType = 'app';
  const app = new Vue(App);
  app.$mount()

```


  ##### `使用了微信小程序插件`接入方法《接入方式2》
  > 4.





