window.addEventListener("scroll", function () {
	var logo1 = document.getElementById("logo1");
	var logo2 = document.getElementById("logo2");
	var header = document.getElementById("headerbar");
	var ham = document.getElementById("HAM");
	var img = document.getElementById("imglogo");

	logo1.classList.toggle("sticky", window.scrollY > 50);
	logo2.classList.toggle("sticky", window.scrollY > 50);
	header.classList.toggle("sticky", window.scrollY > 50);
	ham.classList.toggle("sticky", window.scrollY > 50);

	console.log(scrollY);
});
