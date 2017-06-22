# VueX-Demo
This read me will record all the step I set up this project , also will note the question i meet.

## Step 1  Vue-cli
```
vue init webpack vue-demo1
cd vuex-demo1
npm install
npm start
```

用webstorm的时候 切换javascript的识别去 ecma 6 不然会报错

vue-cli 建立的项目没有stylus loader 在package 里加
```
"stylus": "^0.54.5",
"stylus-loader": "^3.0.1",
```
```
npm install
```