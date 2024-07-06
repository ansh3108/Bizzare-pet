const creatureDiv = document.getElementById('creature');

const creatures = ['🐉', '🐙', '🦄', '👾', '🦖', '🐬', '🕷️', '🐢', '🦑', '🦀'];


function changeCreature() {
    const randomIndex = Math.floor(Math.random() * creatures.length);
    creatureDiv.style.opacity = 0;
    setTimeout(() => {
        creatureDiv.textContent = creatures[randomIndex];
        creatureDiv.style.opacity = 1;
    }, 500);
}



setInterval(changeCreature, 2000);



changeCreature();
    
