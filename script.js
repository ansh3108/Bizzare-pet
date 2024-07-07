const creatureDiv = document.getElementById('creature');
const sound = document.getElementById('sound');



const creatures = [
    { icon: '🐉', class: 'dragon', sound: 'https://www.soundjay.com/nature/dragon-roar-01.mp3' },
    { icon: '🐙', class: 'octopus', sound: 'https://www.soundjay.com/nature/water-bubble-01.mp3' },
    { icon: '🦄', class: 'unicorn', sound: 'https://www.soundjay.com/button/beep-07.mp3' },
    { icon: '👾', class: 'alien', sound: 'https://www.soundjay.com/button/button-09.mp3' },
    { icon: '🦖', class: 'trex', sound: 'https://www.soundjay.com/nature/dinosaur-roar-01.mp3' },
    { icon: '🐬', class: 'dolphin', sound: 'https://www.soundjay.com/nature/dolphin-01.mp3' },
    { icon: '🕷️', class: 'spider', sound: 'https://www.soundjay.com/button/beep-10.mp3' },
    { icon: '🐢', class: 'turtle', sound: 'https://www.soundjay.com/nature/turtle-swim-01.mp3' },
    { icon: '🦑', class: 'squid', sound: 'https://www.soundjay.com/nature/water-bubble-02.mp3' },
    { icon: '🦀', class: 'crab', sound: 'https://www.soundjay.com/nature/crab-01.mp3' }
];



function changeCreature() {
    const randomIndex = Math.floor(Math.random() * creatures.length);
    const creature = creatures[randomIndex];
    creatureDiv.style.opacity = 0;
    sound.pause();
    setTimeout(() => {
        creatureDiv.innerHTML = creature.icon;
        creatureDiv.className = '';
        creatureDiv.classList.add('creature-animation', creature.class);
        creatureDiv.style.opacity = 1;
        sound.src = creature.sound;
        sound.play();
    }, 500);
}



setInterval(changeCreature, 3000);


changeCreature();
