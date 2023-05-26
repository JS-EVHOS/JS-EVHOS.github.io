let eingabe = document.getElementById("eingabe");
function Suche() {
	let Suchen = eingabe.value;
	document.getElementById("eingabe").value = "";
	window.open("https://www.google.com/search?q=" + Suchen);
}
function ChatGPT() {
window.open("https://chat.openai.com/chat/815f47ec-ac7a-41da-8420-4f0cac1d422d")	
}
function Scratch() {
	let Suchen = ISS.value;
	ISS.value ='';
	window.open("https://scratch.mit.edu/search/projects?q=" + Suchen)
}
function ENT() {
	window.open("https://scratch.mit.edu/projects/editor/")
}
function MYSACH() {
	window.open("https://scratch.mit.edu/mystuff/")
}
function PAP() {
	window.open("https://scratch.mit.edu/mystuff/#trash")
}
function Home() {
    window.location.href = "Homepage.html";
}