const popcat = document.getElementById('popcat');
const popSound = document.getElementById('pop-sound');
const popCounter = document.getElementById('pop-counter');
let count = 0;

popcat.addEventListener('click', () => {
    if (popcat.src.includes('cat-close.png')) {
        popcat.src = 'cat-open.png';
    } else {
        popcat.src = 'cat-close.png';
    }
    popSound.currentTime = 0;
    popSound.play();
    count++;
    popCounter.textContent = count;
});
