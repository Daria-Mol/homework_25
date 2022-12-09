"use strict"

const formCount = document.querySelector('.form__count');
const button = document.querySelector('.form__btn');
const form = document.querySelector('form');

document.addEventListener("click", showInput);

function showInput(event){
	// console.log(Boolean(event.target.closest('.form__btn._active') && event.target.closest('HTML')));
	if (event.target.closest('.form__btn')){
		formCount.classList.add('_active');
		button.classList.add('_active')

	}	
	if (!event.target.closest('.form')){
		formCount.classList.remove('_active');
		button.classList.remove('_active');
	}
}

document.addEventListener("keyup", function(event){
	console.log(event.code);
	if (event.code === "Escape"){
		formCount.classList.remove('_active');
		button.classList.remove('_active');
	}
})


const item = document.querySelector('.form__input');
const itemLenght = item.getAttribute('maxlength') ;
const itemCounter = document.querySelector('.form__counter-input span');
itemCounter.innerHTML = itemLenght;

item.addEventListener("keyup",setCounter);
item.addEventListener("keydown",function(event){
	if (event.repeat) setCounter();
});

function setCounter(){
	const counterResult = itemLenght - item.value.length;
	itemCounter.innerHTML = counterResult;
}



