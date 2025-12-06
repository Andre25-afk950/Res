let prints = document.getElementById("songPrint"),
    track = document.getElementById("tracklist"),
    index = 0;

class note {
  constructor(){
    this.list = [];
  }
  f(judul,link,tmp,tr){
    this.list.push({"title":judul,"link":link,"thumb":tmp,"track":tr});
  }
}

d = new note();
setResource();
for(let i = 0;i < d.list.length;i++){
  let ex = document.createElement("p");
  ex.innerHTML = `${i+1}. `+d.list[i].title;
  track.appendChild(ex);
  ex.setAttribute("class","item")
}
let msc = document.createElement("audio");
prints.appendChild(msc)
let ev = document.getElementsByClassName("item");

//list event
for(let i = 0;i < d.list.length;i++){
  ev[i].addEventListener("click",()=>{
    for(let i =0;i < d.list.length;i++){
      ev[i].style.background="black";
    }
    ev[i].style.background="brown";
    msc.src=d.list[i].link;
    msc.play();
    index = i;
    console.log(`Track ${index+1}`);
    endS();
  })
}
//elemen settler
(function(){
  let tmp = document.createElement("img");
  tmp.src=d.list[0].thumb;
  prints.appendChild(tmp);
  tmp.setAttribute("id","thumbnail");
  
  let titl = document.createElement("p");
  titl.setAttribute("id","judulLagu")
  titl.innerHTML = "Supernova";
  prints.appendChild(titl);
  
  let artist = document.createElement("p");
  artist.innerHTML = "~ Aespa ~";
  prints.appendChild(artist);
  artist.setAttribute("id","artist")
  
  let creator = document.createElement("p");
  creator.innerHTML="Creator : @Boyke_Andrean";
  prints.appendChild(creator);
  creator.setAttribute("id","creator");
})();

let title = document.getElementById("judulLagu");
let art = document.getElementById("artist");
let logo = document.getElementById("thumbnail");

//Set banner
for(let i = 0;i < d.list.length;i++){
  ev[i].addEventListener("click",()=>{
   title.innerHTML = d.list[i].title
   logo.src=d.list[i].thumb;
  })
}
//Ended setEvent
function endS (){
 msc.addEventListener("ended",next);
}
msc.addEventListener("playing",()=>{
  title.innerHTML += " *";
})
//next song
 function next(){
    if(index<d.list.length-1){
      index++;
      console.log(`Track ${index+1}`);
      msc.src=d.list[index].link;
      msc.play();
    }else{
      index=0;
      console.log("Music ends");
    }
    for(let i =0;i < d.list.length;i++){
      ev[i].style.background="black";
    }
    ev[index].style.background="brown";
    title.innerHTML = d.list[index].title
    logo.src=d.list[index].thumb
}
//Title Print
function tPrint(){
  console.log(msc);
  msc.addEventListener("playing",()=>{
    document.title=`Aespa ~ ${d.list[index].title}`;
    console.log()
  })
}
tPrint();
function setResource(){
 d.f("Supernova",
 "song/Supernova.m4a",
 "thumb/aespa001.jpg",
 1);
 d.f("Armageddon",
 "song/Armageddon.m4a",
 "thumb/aespa002.jpg",
 2);
 d.f("Drama",
 "song/Drama.m4a",
 "thumb/aespa003.jpg",
 3);
 d.f("Live My Life",
 "song/Live My Life.m4a",
 "thumb/aespa004.jpg",
 4);
 d.f("Spicy",
 "song/Spicy.m4a",
 "thumb/aespa005.jpg",
 5);
 d.f("Hold On Tight",
 "song/Hold On Tight.m4a",
 "thumb/aespa006.jpg",
 6);
 d.f("Jingle Bell Rock",
 "song/Jingle Bell Rock.m4a",
 "thumb/aespa007.jpg",
 7);
 d.f("Next Level",
 "song/Next Level.m4a",
 "thumb/aespa008.jpg",
 8);
 d.f("Black Mamba",
 "song/Black Mamba.m4a",
 "thumb/aespa009.jpg",
 9);
 d.f("Savage",
 "song/Savage.m4a",
 "thumb/aespa010.jpg",
 10);
 d.f("Better Things",
 "song/Better Things.m4a",
 "thumb/aespa011.jpg",
 11);
 d.f("Dreams Come True",
 "song/Dreams Come True.m4a",
 "thumb/aespa012.jpg",
 12);
 d.f("Illusion",
 "song/Illusion.m4a",
 "thumb/aespa013.jpg",
 13);
 d.f("Thirsty",
 "song/Thirsty.m4a",
 "thumb/aespa014.jpg",
 14);
 d.f("Girls",
 "song/Girls.m4a",
 "thumb/aespa015.jpg",
 15)
 d.f("Salty & Sweet",
 "song/Salty & Sweet.m4a",
 "thumb/aespa016.jpg",
 16);
 d.f("BAHAMA",
 "song/BAHAMA.m4a",
 "thumb/aespa017.jpg",
 17);
 d.f("Trick or Trick",
 "song/Trick or Trick.m4a",
 "thumb/aespa018.jpg",
 18);
 d.f("Prologue",
 "song/Prologue.m4a",
 "thumb/aespa019.jpg",
 19);
 d.f("Licorice",
 "song/Licorice.m4a",
 "thumb/aespa020.jpg",
 20);
 d.f("ICU",
 "song/ICU.m4a",
 "thumb/aespa021.jpg",
 21);
 d.f("Aenergy",
 "song/Aenergy.m4a",
 "thumb/aespa022.jpg",
 22);
 d.f("Yeppi Yeppi",
 "song/YEPPI YEPPI.m4a",
 "thumb/aespa023.jpg",
 23);
 d.f("You",
 "song/You.m4a",
 "thumb/aespa024.jpg",
 24);
 d.f("Mine",
 "song/Mine.m4a",
 "thumb/aespa025.jpg",
 25);
 d.f("I'm Unhappy",
 "song/Unhappy.m4a",
 "thumb/aespa026.jpg",
 26);
 d.f("Lucid Dream",
 "song/Lucid Dream.m4a",
 "thumb/aespa027.jpg",
 27);
 d.f("ZOOM ZOOM",
 "song/ZOOM ZOOM.m4a",
 "thumb/aespa028.jpg",
 28);
 d.f("ICONIC",
 "song/ICONIC.m4a",
 "thumb/aespa029.jpg",
 29);
 d.f("'Til We Meet Again",
 "song/'Til We Meet Again.m4a",
 "thumb/aespa030.jpg",
 30);
 d.f("Whiplash",
 "song/Whiplash.m4a",
 "thumb/aespa031.jpg",
 31);
 d.f("Kill It",
 "song/Kill It.m4a",
 "thumb/aespa032.jpg",
 32);
 d.f("Flights Not Feelings",
 "song/Flights Not Feelings.m4a",
 "thumb/aespa033.jpg",
 33);
 d.f("Pink Hoodie",
 "song/Pink Hoodie.m4a",
 "thumb/aespa034.jpg",
 34);
 d.f("Flowers",
 "song/Flowers.m4a",
 "thumb/aespa035.jpg",
 35);
 d.f("Just Another Girl",
 "song/Just Another Girl.m4a",
 "thumb/aespa036.jpg",
 36);
}