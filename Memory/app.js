function make_the_Game() {
    let margin = 500;
    let Bottom = 0;
    let Element_Nomber = 1;
    const xmalx = 4;
    console.log('Spiel wird vorbereitet')
    const Karte = []; // Array "Karte" erst hier initialisieren
    for (let x = 0; x < 4; x++) {
      for (let i = 0; i < 5; i++) {
        const Karte_Element = document.createElement("div");
        Karte_Element.style.width = "100px";
        Karte_Element.style.height = "100px";
        Karte_Element.style.marginLeft = margin + "px";
        Karte_Element.style.marginTop = Bottom + "px";
        Karte_Element.style.backgroundColor = "blue";
        Karte_Element.id = "Karte " + Element_Nomber;
        Element_Nomber = Element_Nomber + 1;
        Karte_Element.innerText = "";
        document.body.appendChild(Karte_Element);
  
        Karte.push(Karte_Element);
  
        Bottom = 20;
  
        console.log('Karte wurde gelegt!!');
  
        Karte_Element.addEventListener("click", (event) => {
          Zeige_an(event.target.id)
        });
      }
      Bottom = -580;
      margin = margin + 120;
    }
    make_the_Teams()
  }
  
  function make_the_Teams() {
    while (memory.length < 10) {
      let wert = Zufall(0,9);
      if (!memory.includes(wert)) {
        memory.push(wert);
      }
    }
    let Zwichen_memory = [];
    while (Zwichen_memory.length < 10) {
      let wert = Zufall(0,9);
      if (!Zwichen_memory.includes(wert)) {
        Zwichen_memory.push(wert);
      }
    }
    let zahler = 0;
    while (memory.length < 20) {
    memory.splice(9 + zahler,0,Zwichen_memory[zahler]);
    zahler = zahler + 1;
    }

    console.log(memory);
  }
  
  
  function Zufall(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function Zeige_an(id) {
    if (anzahl_der_gezeigten !== 2) {
      Plop()
      const div = document.getElementById(id);
      if (div.style.backgroundColor == "blue") {
        ids.push(id);
        anzahl_der_gezeigten = anzahl_der_gezeigten + 1;
        div.style.backgroundColor = "white";
        const card_nomber = Karte.indexOf(id);
        let Zahl = '';
        console.log(card_nomber);
        Zahl = memory[card_nomber];
        div.innerText = ABC[Zahl];
        if (anzahl_der_gezeigten == 2) {
          setTimeout(function() {
            Check(ids[0], ids[1]);
            console.log('Karten werden zu gedeckt');
            anzahl_der_gezeigten = 0;
            let div_Element = document.getElementById(ids[0]);
            div_Element.innerText = "";
            div_Element = document.getElementById(ids[1]);
            div_Element.innerText = "";
            ids = [];
          }, 2000)
        }
      }
    } else {
      alert('Du kannst nur 2 Karten aufgedeckt haben!')
    }
  }
  
  function Check(Element1, Element2) {
    const Ele1 = document.getElementById(Element1);
    const Ele2 = document.getElementById(Element2);
    if (Ele1.innerText == Ele2.innerText) {
      Ele1.style.backgroundColor = "#767676eb";
      Ele2.style.backgroundColor = "#767676eb";
      console.log('Ja')
      const Punkte_Ele = document.getElementById("Punkte");
      Punkte = Punkte + 1;
      Punkte_Ele.innerText = "Punkte: " + Punkte;
    
      if (Punkte == 10) { 
        alert('Du bist Fertig')     
        klick()
      }
      }
      else {
      Ele1.style.backgroundColor = "blue";
      Ele2.style.backgroundColor = "blue";
      Ele1.innerText = "";
      Ele2.innerText = "";
      anzahl_der_gezeigten = 0;
      }
}
  function klick() {
    location.reload();
  }
  function Plop() {
    const sound = document.getElementById("mp3");
    sound.volume = 0.4;
    sound.play()
  }
  let P_Element = document.createElement("p");
  P_Element.className = "Punkte";
  P_Element.id = "Punkte";
  P_Element.innerText = "Punkte: 0";
  document.body.appendChild(P_Element);
  let Pinkte_gesamt = [0,0];
  let Punkte = 0;
  let Versuche = 0;
  let who_is = 0;
  let memory = [];
  let ids = [];
  let anzahl_der_gezeigten = 0;
  const ABC = ['A','B','C','D','E','F','G','H','I','J'];
  
  const Karte = ['Karte 1', 'Karte 2','Karte 3', 'Karte 4','Karte 5','Karte 6','Karte 7','Karte 8','Karte 9', 'Karte 10','Karte 11','Karte 12','Karte 13','Karte 14','Karte 15','Karte 16','Karte 17','Karte 18','Karte 19','Karte 20',];
  make_the_Game();

  
  