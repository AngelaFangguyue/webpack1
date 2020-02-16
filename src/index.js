import "./x.js";
import "./y.scss";
import "./w.styl";
import img from "./static/1.jpg";

console.log("xjs", img);

var app = document.querySelector("#app");
app.innerHTML = `<img src="${img}">`;

var but = document.createElement("button");
but.innerText = "懒加载";
but.onclick = () => {
  var pro = import("./lazy.js");
  console.log("pro", pro);
  pro.then(
    a => {
      console.log("pro a", a);
      console.log("pro a.default", a.default);
      console.log("a.default()", a.default());
    },
    () => {}
  );
};
document.body.appendChild(but);
