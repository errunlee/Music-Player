let flag = 1;
let sound;
let playing;
let article=document.querySelector('article')
function songName(){
  if(flag==1){
    article.innerHTML='On and On by NCS'
  }
  if(flag==2){
    article.innerHTML='Moonknight Theme Song'
  }
  if(flag==3){
    article.innerHTML='Baarish by Anuv Jain'
  }
  if(flag==4){
    article.innerHTML='WorldCup 2022 Song by BTS and Himart'
  }
  if(flag==5){
    article.innerHTML='Rabba Rabaa by Shruti Sinna'
  }
}
let playSound = (soundName) => {
  sound = new Audio(`audios/sound${soundName}.mp3`);
}
playSound(flag);

function songEnd() {
  sound.addEventListener('ended', () => {
    flag++;
    sound.pause();
    playSound(flag);
    sound.play();
  })
}

function pl() {
  play.addEventListener('click', () => {
    play.innerHTML = `||`
    sound.play();
    songName();
    article.classList.add('songAnim')
    songEnd();
    play.classList.add('playing');
    image.classList.add('moving');
    playing = document.querySelector('.playing');
    setTimeout(pause, 000);
    
  })
}

pl();

function pause() {
  playing.addEventListener('click', () => {
    sound.pause();
    play.innerHTML = `<i class='fa fa-play'></i>`;
    play.classList.remove('playing')
    image.classList.remove('moving')
    setTimeout(pl, 000);
  })
}

next.addEventListener('click', () => {
  sound.pause();
  flag++;
  if (flag === 6) {
    flag = 1;
  }
  playSound(flag);
  sound.play();
  songName();
  songEnd();
})
previous.addEventListener('click', () => {
  sound.pause();
  flag--;
  if (flag === 0) {
    flag = 5;
  }
  playSound(flag)
  sound.play();
  songName();
  songEnd();
})

