const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const body = document.querySelector('body')

burger.onclick = () => {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
	body.classList.toggle('lock')
}