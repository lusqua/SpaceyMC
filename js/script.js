function Navopen() {
	var nav = document.getElementById("nav");
	var line = document.querySelectorAll(".line");

	for (i = 0; i < line.length; i++) {
		line[i].classList.toggle("Lopen");
	}
	nav.classList.toggle("open");
}

function outFunc() {
	var ccopiar = document.getElementById("Fcopiar");
	ccopiar.innerHTML = "Copiar";
}

function copy() {
	var ip = document.getElementById("ip");
	ip = "Spaceymc.xyz";
	document.execCommand("copy");

	var vcopiar = document.getElementById("Fcopiar");
	vcopiar.innerHTML = "Copiado!";
}

function openhelp() {
	var help = document.getElementById("help");

	help.classList.toggle("viphelp");
}
