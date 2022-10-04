const soundicon = document.querySelector('.audio')
let mySound = new Audio('sound/battle.mp3')

mySound.play()




soundicon.addEventListener('click', function() {
	mySound.pause()
	soundicon.innerHTML = '<div>🔇</div>'
	
})

const btn = document.querySelector('.btn')
let clicksound = new Audio('sound/sificlick.wav')


btn.addEventListener('click', function() {
	
	clicksound.play()

})


const missions = document.querySelectorAll(".mission");



