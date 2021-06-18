const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
		document.getElementById("myNav").style.height = "100%";
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
		document.getElementById("myNav").style.height = "0%";
	}
});



