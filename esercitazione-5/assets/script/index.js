let Edit = document.getElementById('edit');
let Done = document.getElementById('done');
let ratingsSelect = document.getElementById('ratings');
let spanSel = document.getElementById('selezionato');

let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 6
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

displayValue();
Edit.addEventListener("click", toggleEdit);
Done.addEventListener("click", toggleDone);

function displayValue() {

    let selectedOption = ratingsSelect.options[ratingsSelect.selectedIndex];
    let selectedValue = selectedOption.value;
    spanSel.textContent = selectedValue;
}

function toggleEdit() {
    ratingsSelect.disabled = false;
    Edit.style.backgroundColor= 'grey';
    Edit.style.color= 'black';
    Done.style.visibility = 'visible';
}

function toggleDone(){
    ratingsSelect.disabled = true;
    Done.style.visibility='hidden'
    Edit.style.backgroundColor= 'transparent';
    Edit.style.color= 'white';
    displayValue();
}