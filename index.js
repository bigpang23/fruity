window.addEventListener("load", function () {
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var box = document.querySelector(".box");
  box.addEventListener("mouseenter", function () {
    left.style.display = "block";
    right.style.display = "block";
  });
  box.addEventListener("mouseleave", function () {
    left.style.display = "none";
    right.style.display = "none";
  });
  var pic = document.querySelector(".pic");
  var lis = document.querySelector(".lis");
  var boxWidth = box.offsetWidth;
  for (var i = 0; i < pic.children.length; i++) {
    var li = document.createElement("li");
    lis.appendChild(li);
    //设置索引号
    li.setAttribute("index", i);
    li.addEventListener("click", function () {
      //获得索引号
      var index = this.getAttribute("index");
      num = index;
      circle = index;
      for (var i = 0; i < lis.children.length; i++) {
        lis.children[i].className = "";
      }
      this.className = "selected";
      animate(pic, -index * boxWidth);
    });
  }
  lis.children[0].className = "selected";
  //克隆第一个li
  var first = pic.children[0].cloneNode(true);
  pic.appendChild(first);
  var num = 0;
  var circle = 0;
  //右侧按钮的功能
  right.addEventListener("click", function () {
    if (num == pic.children.length - 1) {
      pic.style.left = 0;
      num = 0;
    }
    num++;
    animate(pic, -num * boxWidth);
    circle++;
    if (circle == lis.children.length) {
      circle = 0;
    }
    for (var i = 0; i < lis.children.length; i++) {
      lis.children[i].className = "";
    }
    lis.children[circle].className = "selected";
  });
  //左侧按钮功能
  left.addEventListener("click", function () {
    if (num == 0) {
      num = pic.children.length - 1;
      pic.style.left = -num * boxWidth + "px";
    }
    num--;
    animate(pic, -num * boxWidth);
    circle--;
    if (circle < 0) {
      circle = lis.children.length - 1;
    }
    for (var i = 0; i < lis.children.length; i++) {
      lis.children[i].className = "";
    }
    lis.children[circle].className = "selected";
  });
  var timer = this.setInterval(function () {
    right.click();
  }, 2000);
});
