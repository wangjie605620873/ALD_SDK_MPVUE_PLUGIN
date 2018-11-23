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
#### 一,`未使用微信小程序插件`接入方式
> 1.[下载SDK]()<br>
> 2.将sdk放入`项目根目录下`的`static`文件夹中<br>
> 3.在根目录下的`src`文件中找到`main.js` ,将SDK引入即可。<br>
```javascript
  //引入SDK，将该行代码放在main.js中的第一行
  import '../static/ald-stat'
  
  import Vue from 'vue';
  import App from './App';
  Vue.config.productionTip = false;
  App.mpType = 'app';
  const app = new Vue(App);
  app.$mount()

```
> 4. 检查是否集成成功，在微信小程序开发者工具中，打开控制台找到network，查看是否有数据上报

#### 一，`使用了微信小程序插件`接入方式
> 1. [下载SDK]()<br>
> 2. 将sdk放入`项目根目录下`的`static`文件夹中<br>
> 3. 在ald-stat-conf.js中将plugin设置为true<br>
```javascript
exports.app_key = ""; //请在此行填写从阿拉丁后台获取的appkey
exports.getLocation = false; //默认不获取用户坐标位置
exports.plugin = true;  //您的小程序中是否使用了插件。根据是否启用插件会有不同的接入方式，请参考文档文档。
```
> 4. 在入口文件main.js中，实例化Vue时，调用MpvueApp,一参数形式传入。
```javascript
import { MpvueApp } from '../static/ald-stat'

import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue( MpvueApp(App) );
app.$mount()
```
> 5. 没每个页面对应的main.js中，在实例化Vue时，调用MpvueApp,一参数形式传入。
```javascript
import {MpvuePage} from '../../../static/ald-stat'

import Vue from 'vue'
import App from './index'
const app = new Vue(MpvuePage(App))
app.$mount()

```
> 5. 检查是否集成成功，在微信小程序开发者工具中，打开控制台找到network，查看是否有数据上报


