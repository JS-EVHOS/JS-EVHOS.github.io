const root = document.querySelector(":root");
const live = document.querySelector("#live");
function Leiste_down() {
  root.style.setProperty("--feld1", "50px");
  if (have_I_got_a_Button == 0) {
    make_Buttos_on_Leiste();
  }
}

function Leiste_up() {
  root.style.setProperty("--feld1", "5px");  
  have_I_got_a_Button = 0;
  const button1 = document.querySelector("#a_Menu_Button");
  const button2 = document.querySelector("#a_Menu_Button2");
  const button3 = document.querySelector("#a_Menu_Button3");
  const button4 = document.querySelector("#a_Menu_Button4");
  const button5 = document.querySelector("#a_Menu_Button5");
  button1.remove();
  button2.remove();
  button3.remove();
  button4.remove();
  button5.remove();
}
function make_Buttos_on_Leiste() {
  let Zähler = 0;
  have_I_got_a_Button = 1;
  let div_Childs = document.createElement("button");
  div_Childs.className = "Menu_Button";
  div_Childs.innerText = innerText[Zähler];
  Zähler++;
  div_Childs.id = "a_Menu_Button";
  const div = document.querySelector("#petit_feld");
  div.appendChild(div_Childs);
  div_Childs.addEventListener("click", () =>{
    window.open("https://scratch.mit.edu/users/EVHOS/");
  })
  div_Childs = document.createElement("button");
  div_Childs.className = "Menu_Button";
  div_Childs.innerText = innerText[Zähler];;
  Zähler++;
  div_Childs.id = "a_Menu_Button2";
  div.appendChild(div_Childs);
  div_Childs.addEventListener("click", () =>{

    Studio()
  })
  div_Childs = document.createElement("button");
  div_Childs.className = "Menu_Button";
  div_Childs.innerText = innerText[Zähler];;
  Zähler++;
  div_Childs.id = "a_Menu_Button3";
  div.appendChild(div_Childs);
  div_Childs.addEventListener("click", () =>{
    window.location.href = "Suchmachine.html";
  })
  div_Childs = document.createElement("button");
  div_Childs.className = "Menu_Button";
  div_Childs.innerText = innerText[Zähler];;
  Zähler++;
  div_Childs.id = "a_Menu_Button4";
  div.appendChild(div_Childs);
  div_Childs.addEventListener("click", () =>{
    lösche_Grund()
    Game()
  })
  div_Childs = document.createElement("button");
  div_Childs.className = "Menu_Button";
  div_Childs.innerText = innerText[Zähler];;
  Zähler++;
  div_Childs.id = "a_Menu_Button5";
  div.appendChild(div_Childs);
  div_Childs.addEventListener("click", () =>{
    lösche_Grund()
    Profil()
  })
}
function Studio() {
lösche_Grund()
const urls = ["https://scratch.mit.edu/studios/31190963/", "https://scratch.mit.edu/studios/31534218/", "https://scratch.mit.edu/studios/31737937/", "https://scratch.mit.edu/studios/32105632/", "https://scratch.mit.edu/studios/31632848/", "https://scratch.mit.edu/studios/32430978/","https://scratch.mit.edu/studios/31777539/", "https://scratch.mit.edu/studios/31579788/", "https://scratch.mit.edu/studios/31495307/", "https://scratch.mit.edu/studios/31195095/"];
const div_ids = ["Game_Fun", "EVHOS", "Tutorial", "Simulanten", "Covid19","Projekte","Lernen","Ani", "CP", "Leben"]
const div_text = ["Game and Fun", "EVHOS", "Tutorial", "Simulanten","Corona/simulation", "Projekte", "Learning studio","Animationen", "Cloud Programme", "Things that simplify our lives"];
let margin = 3;
for (let i = 0; i < 10; i++)  {
const div = document.createElement("div");
div.id = div_ids[i];
div.style.width = "150px";
div.style.marginLeft = margin + "px";
margin = margin + 150;
live.appendChild(div);
const div_img = document.createElement("div");
div_img.id = div_ids[i] + "_img";
div.appendChild(div_img);
const p = document.createElement("p");
p.id = div_ids[i] + "_p";
p.innerText = div_text[i];
div.appendChild(p);
div.addEventListener("click", () => {
window.open(urls[i]);
})

}
}
function Game() {  
  let margin = 0;  
  lösche_Grund()
  const Überschrift = document.createElement("h3");
  Überschrift.innerText = "Scratch";
  Überschrift.id ="Game_h1";
  live.appendChild(Überschrift);
  for (let i = 0; i < innerText_Game.length; i++) {
    const div_Game = document.createElement("div");
    div_Game.id = id_Game[i] + "_div";
    div_Game.style.marginLeft = margin +"px";
    margin = margin + 225;
    live.appendChild(div_Game);
    const img_Game = document.createElement("div");
    img_Game.id = id_Game[i] + "_img";
    div_Game.appendChild(img_Game);
    const p_Game = document.createElement("p");
    p_Game.id = id_Game[i] + "_p";
    p_Game.innerText = innerText_Game[i];
    div_Game.appendChild(p_Game);
    div_Game.addEventListener("click", () => {
      window.open(url_Game[i]);
    })
  }
  const h4 = document.createElement("h4");
  h4.innerText = "Andere Spiele"
  h4.id = "OGH";
  live.appendChild(h4);
  const p = document.createElement("p");
  p.innerText = "Weitere Spiele kommen noch";
  p.id = "WSP";
  live.appendChild(p);
}
function lösche_Grund() {

live.innerHTML = '';
}
function Home() {
  window.location.href = "https://js-evhos.github.io/";
}
function Profil() {
  const Profil_Name = ["EVHOS", "EVHOS_TUTOR","EVHOS-Team","McTyp","victor42e","Programm1012"];
  const Profil_ids = ["evhos","ET","E-T","McTyp","VH42","P1012"];
  let margin = 0;
  for (let i = 0; i < Profil_Name.length; i++) {
    const div_Profil = document.createElement("div");
    div_Profil.id = Profil_ids[i];
    div_Profil.style.marginLeft = margin + "px";
    margin = margin + 150;
    live.appendChild(div_Profil);
    const img_Profil = document.createElement("div");
    img_Profil.id = Profil_ids[i] + "_img";
    div_Profil.appendChild(img_Profil);
    const p_Profil = document.createElement("p");
    p_Profil.id = Profil_ids[i] + "_p";
    p_Profil.innerText = Profil_Name[i];
    div_Profil.appendChild(p_Profil);
    div_Profil.addEventListener("click", () => {
      window.open("https://scratch.mit.edu/users/" + Profil_Name[i] + "/");
    })
  }
  const div_input  = document.createElement("div");
  div_input.id = "div_input";
  live.appendChild(div_input);
  const input = document.createElement("input");
  input.id = "SUser";
  div_input.appendChild(input);
  const button = document.createElement("button");
  button.id = "SUser_button";
  button.innerText = "Suchen";
  div_input.appendChild(button);
  button.addEventListener("click", () => {
    window.open("https://scratch.mit.edu/users/" + input.value + "/");
    input.value ='';
  })
}

let have_I_got_a_Button = 0;
const innerText = ['Scratch', 'Studios', 'Suchmaschine', 'Spiele', 'Profile',];
const innerText_Game = ['Paintcarrun', 'Escape from school','Smartphone/Handy'];
const id_Game = ["Paintcarrun", "Ve-Di-Ma","Handy"]
const url_Game = ["https://scratch.mit.edu/projects/635022736/", "https://scratch.mit.edu/projects/630052494/","https://scratch.mit.edu/projects/632332672/"];

