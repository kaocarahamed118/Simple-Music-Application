window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const title = document.getElementById('title');
    if(!audio)return;
    audio.play();
    audio.currentTime = 0;
    keys.classList.add('play');
    title.innerHTML = audio.title;
    
})