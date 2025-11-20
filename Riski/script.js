let item = document.getElementsByClassName("it");
let like = document.getElementsByClassName("like")
let dLike = document.getElementsByClassName("des-like")
let date = document.getElementsByClassName("date")

for(let i =0;i<source.length;i++){
item[i].src=source[i]
like[i].src="love.png"
item[i].addEventListener("load",()=>{
like[i].style.display="block"
dLike[i].style.display="block"
date[i].innerHTML=des[i].date
dLike[i].innerHTML=des[i].like
})
}

let scene = localStorage.getItem("kondisi")
let tutup = document.getElementById("cl")
let dex = document.getElementById("deklarasi")

if(scene=="lama"){
dex.style.display="none"
}else{
dex.style.display="block"
dex.style.animation="view 1s forwards"
}

cl.addEventListener("click",()=>{
localStorage.setItem("kondisi","lama")
dex.style.animation="hide 0.75s forwards"
setTimeout(()=>{
dex.style.display="none"
},750)
console.log(scene)
})
