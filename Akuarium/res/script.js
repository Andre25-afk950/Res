let setLabel = {
  panjang:64.5,
  lebar:35.5,
  tinggi:43,
  init:function(){
    let ctn = document.getElementById("header");
    ctn.querySelector("p").innerText=`- Panjang : ${this.panjang}cm\n- Lebar : ${this.lebar}cm\n- Tinggi : ${this.tinggi}cm\n`;
    ctn.querySelector("p").innerHTML+=`- Facebook : <a href="https://www.facebook.com/boyke.andrean.37">Boyke Andrean</a>`;  
  }
}
let createBox ={
  res:[],
  put:function(){
    for(let i = 0;i<this.res.length;i++){
      let b = document.createElement("img");
      let a = document.createElement("div");
      document.body.appendChild(a)
      a.setAttribute("class","tab")
      a.appendChild(b);
      b.src=this.res[i] 
    }
  },
  pRes:function(res){
    this.res.push(res)
  }
}
function aDiv(f){
  let a = document.getElementsByClassName("tab");
  for(let i = 0;i<a.length;i++){
   a[i].style.display=`${f}`
  }
}
let navImage = function(){
  let btn = document.getElementById("openBtn");
  let btn2 = document.getElementById("closeBtn");
  let ctn = document.getElementById("header");
  let open = function(){
    ctn.querySelector("p").style.display="inline";
    btn.style.display="none";
    btn2.style.display="inline";
    aDiv("none");
  }
  btn.addEventListener("click",open)
}
let hidCtn = function(){
  let btn = document.getElementById("closeBtn");
  let btn2 = document.getElementById("openBtn");
  let ctn = document.getElementById("header");
  let open = function(){
  ctn.querySelector("p").style.display="none";
  btn.style.display="none";
  btn2.style.display="inline";
  aDiv("block")
  }
  btn.addEventListener("click",open)
}
function update(){
  set();
  console.log(createBox.res)
  createBox.put();
  navImage();
  hidCtn();
  setLabel.init();
}
update();

function set(){
  createBox.pRes("res/img1.jpg");
  createBox.pRes("res/img2.jpg");
  createBox.pRes("res/img3.jpg");
  createBox.pRes("res/img4.jpg");
}