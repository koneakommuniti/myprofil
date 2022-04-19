const nav = document.getElementsByClassName('nav')[0];
const menutoggle = document.getElementsByClassName('toggle-menu')[0];
const close = document.getElementById('close');

menutoggle.addEventListener('click', function(){
	nav.classList.add('slide');
});

close.addEventListener('click', function(){
	nav.classList.remove('slide');
});