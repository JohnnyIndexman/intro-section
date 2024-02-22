const dropdown = document.querySelector('.header1');
const hamburger = document.querySelector('.open');
const klose = document.querySelector('.close');
const arrow_up = document.querySelectorAll('.arrow-up'); 
//console.log(arrow_up)
const arrow_down = document.querySelectorAll('.arrow-down');
const select = document.querySelectorAll('.dropdown');
const select_1 = document.querySelectorAll('.dropdown1');
let isOpen = false;
let isClicked = false

/*event listeners for the dropdowns*/
arrow_down[0].addEventListener('click', treasure);
arrow_down[1].addEventListener('click', treasure);
arrow_down[2].addEventListener('click', treasure);
arrow_down[3].addEventListener('click', treasure);
   
function treasure(e) {
    e.preventDefault();
    const currentArrow = e.target;

    if (window.matchMedia('(max-width:670px)').matches) {
        if(arrow_down[2]=== currentArrow){
            select_1[0].style.display = 'block';
            arrow_down[2].style.display = 'none';
            arrow_up[2].style.display = 'block';
        }
        else{
            select_1[1].style.display = 'block';
            arrow_down[3].style.display = 'none'; 
            arrow_up[3].style.display = 'block';
        }
    } 
    else {
        if(arrow_down[0] === currentArrow){
            select[0].style.display = 'block';
            arrow_down[0].style.display = 'none';
            arrow_up[0].style.display = 'block';
        }
        else{
            select[1].style.display = 'block';
            arrow_down[1].style.display = 'none';
            arrow_up[1].style.display = 'block';
        }
    }
    
}

arrow_up[0].addEventListener('click', treasure2)
arrow_up[1].addEventListener('click', treasure2)
arrow_up[2].addEventListener('click', treasure2)
arrow_up[3].addEventListener('click', treasure2)
function treasure2(e) {
        e.preventDefault();
        const currentArrow = e.target;

        select.forEach((s) => {
            s.style.display = 'none';
        });

        select_1.forEach((s) => {
            s.style.display = 'none';
        });

        arrow_up.forEach((arrow) => {
            arrow.style.display = 'none'; // Hide all arrow_up elements
        });

        arrow_down.forEach((arrowDown) => {
            arrowDown.style.display = 'block'; // Display all arrow_down elements
        });
    };


/* hamburger function */
hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isOpen) {
        hamburger.style.display = 'none';
        klose.style.display = 'block';
        dropdown.style.display = 'block';
    }
});

klose.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isOpen) {
        hamburger.style.display = 'block';
        klose.style.display = 'none';
        dropdown.style.display = 'none';
    }
});
