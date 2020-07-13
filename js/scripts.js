const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const body = document.querySelector('body')

burger.onclick = () => {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
	body.classList.toggle('lock')
}

const header = document.querySelector('header')
const main = document.querySelector('main')
window.onscroll = () => {
	if (window.scrollY > 0) {
		header.style.padding = '10px 0 10px'
		main.style.margin = '64px 0 0'
	} else {
		header.style.padding = null
		main.style.margin = null
	}
}