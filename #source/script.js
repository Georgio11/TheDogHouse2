let containerDown = document.querySelector('.item');
let containerUp = document.querySelector('.item2');
let blocksDown = Array.from(containerDown.querySelectorAll('.block'));
let blocksUp = Array.from(containerUp.querySelectorAll('.block'));
let text = document.querySelector('.text');
let startBtn = document.querySelector('.start_btn');
let dogs = document.querySelector('.bottom_dogs');

// click function
function animateBlocks() {
    let modal = document.querySelector('.modal');
    let link = document.querySelector('.modal a');
    link.style.display = 'none';
    modal.classList.add('active');
 

    let outputArrayDown = [];
    let outputArrayUp = [];
  
    // Splitting the array into five separate arrays for containers
    for (let i = 0; i < 5; i++) {
        var subArray = blocksDown.slice(i * 5, (i + 1) * 5);
        outputArrayDown.push(subArray);
        var subArray = blocksUp.slice(i * 5, (i + 1) * 5);
        outputArrayUp.push(subArray);
    }
  
  
    // Arrays flip for containers
    outputArrayDown.reverse();
    outputArrayUp.reverse();
  
    // Animation for containerDown
    outputArrayDown.forEach((subArray, index) => {
        setTimeout(() => {
            subArray.forEach((block, subIndex) => {
                setTimeout(() => {     // Fall
                    block.style.transform = 'translateY(' + (containerUp.offsetHeight ) + 'px)'; 
                }, subIndex * 80);
            });
        }, index * 80);
    });
    
    // Animation for containerUp
    setTimeout(() => {     // Second container fall delay
        outputArrayUp.forEach((subArray, index) => {
            setTimeout(() => {
                subArray.forEach((block, subIndex) => {
                    setTimeout(() => {     // Fall
                        block.style.transform = 'translateY(' + containerUp.offsetHeight + 'px)'; 
                        block.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    }, subIndex * 80);
                    
                    setTimeout(() => {
                        modal.classList.add('opacity');
                        link.style.display = 'block';
                    }, subIndex * 80 + 3000);
                });
            }, index * 80);
        });
    }, outputArrayDown.length * 80);
      
    // Adding classes to remove blocks
    text.classList.add('active');
    startBtn.classList.add('active');
}

let frame = document.querySelector('.frame');
let wrapper = document.querySelector('.wrapper');

// Resise function
// Move button
function removeText() {
    if ((window.innerWidth >= 500) || ((window.innerWidth >= 925) && (window.innerHeight >= 425))) {
        wrapper.appendChild(text);
    } else {
        frame.appendChild(text);
    }
};

removeText();

window.addEventListener('resize', removeText);

// shuffleImages function 
function shuffleImages(blocks) {

    let elems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Mixing numbers in the array
    for (let i = elems.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [elems[i], elems[j]] = [elems[j], elems[i]];
    }
    
    // Substituting random images into a blocks
    blocks.forEach((block, index) => {
        let imgElement = block.querySelector('img');
        let imgNumber;
        
        // Substituting winning images into a second row
        if (blocks === blocksUp && index >= 5 && index <= 9) {
            imgNumber = 10; 
            block.classList.add('bonus');
      
        } else {
            imgNumber = elems[index % elems.length]; 
        }
        
        imgElement.src = 'images/elem/' + imgNumber + '.webp';
    });
}

shuffleImages(blocksUp);
shuffleImages(blocksDown);

let logo = document.querySelector('.logo');
let logoMedia = document.querySelector('.logo img');
let casinoLogo = document.querySelector('.casino_logo')

document.addEventListener('DOMContentLoaded', () => {
    function findHouseTopPosition() {
        const houseImage = document.querySelector('img[src="images/house.webp"]');
        if (houseImage) {
            const rect = houseImage.getBoundingClientRect();
            const houseTopPosition = rect.top + window.scrollY;

            if (houseTopPosition > 100) {
                logo.classList.add('big');
                logoMedia.src = 'images/logo_media.webp';
            } else {
                logo.classList.remove('big');
                logoMedia.src = 'images/logo.webp';
            }
        }
    }

    function handleResize() {
        findHouseTopPosition();
    }

    window.addEventListener('load', () => {
        findHouseTopPosition();
        window.addEventListener('resize', handleResize);
    });
});


