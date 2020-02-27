console.log("我是index.js");
require("./index.css");
require("./index.scss");

let fn = () => {
  console.log("我是es6箭头函数");
};
fn();

class A {
  a = 1;
}

import "./index.css";
import img2 from "./img2.jpeg"; //把图片引入，返回的结果是一个新的图片地址
console.log(img2);
let image = new Image();
image.src = img2;
document.body.appendChild(image);
