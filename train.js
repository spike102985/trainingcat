const soundicon = document.querySelector('.audio')
let mySound = new Audio('sound/battle.mp3')

mySound.play()




soundicon.addEventListener('click', function() {
	mySound.pause()
	soundicon.innerHTML = '<div>🔇</div>'
	
})


const missions = document.querySelectorAll(".mission");
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const allList = document.querySelectorAll(".missionList");

let clicksound = new Audio('sound/sificlick.wav')


missions.forEach((mission) => {
	mission.addEventListener('click', (e) => {
		e.preventDefault();
		clicksound.play();
		mission.classList.toggle('active');
	});

});


const mission1 = document.querySelector(".mission-1");
const mission2 = document.querySelector(".mission-2");

mission1.addEventListener('click', (e) => {
	e.preventDefault();
	// mission2.classList.toggle('hide');

	missions.forEach((mission) => {
	mission.classList.add('hide');
});

	setTimeout(() => {
		list1.classList.remove('hide');
}, 100);

})


const quits = document.querySelectorAll(".quit");
quits.forEach((quit) => {
	quit.addEventListener('click', (e) => {
	e.preventDefault();
	clicksound.play();
	allList.forEach((list) => {

		list.classList.add('hide');
	
		});
		
	missions.forEach((mission) => {
	mission.classList.remove('hide');
});

})

})





mission2.addEventListener('click', (e) => {
	e.preventDefault();
	// mission2.classList.toggle('hide');

	missions.forEach((mission) => {
	mission.classList.toggle('hide');
});

	setTimeout(() => {
		list2.classList.toggle('hide');
}, 100);

})