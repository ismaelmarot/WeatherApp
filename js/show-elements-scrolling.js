let animatedLeft = document.querySelectorAll('.animation-left');
let animatedRight = document.querySelectorAll('.animation-right');
let animatedIn = document.querySelectorAll('.animation-in');

function showScrollingElements(){
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0 ; i<animatedLeft.length; i++){
		let altAnimated = animatedLeft[i].offsetTop;
		if((altAnimated - 500) < scrollTop){
			animatedLeft[i].style.opacity = 1;
			animatedLeft[i].classList.add('showWithAnimationFromLeft');
		}
	}
	for (var i=0 ; i<animatedRight.length ; i++){
		let altAnimated = animatedRight[i].offsetTop;
		if((altAnimated - 500) < scrollTop){
			animatedRight[i].style.opacity = 1;
			animatedRight[i].classList.add('showWithAnimationFromRight');
		}
	}
	for (var i=0 ; i<animatedIn.length ; i++){
		let altAnimated = animatedIn[i].offsetTop;
		if((altAnimated - 500) < scrollTop){
			animatedIn[i].style.opacity = 1;
		}
	}
}	

window.addEventListener('scroll',showScrollingElements);