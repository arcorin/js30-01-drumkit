function handleKey(elem) {
     // function called when a button is clicked or a key is pressed
    // highlight the corresponding button and play the sound
    elem.classList.add('playing');
    setTimeout(() => { elem.classList.remove('playing') }, 300);

    // select the <audio> element with the value of the data-key attribute = the value of the clicked button
    const audio = document.querySelector(`audio[data-key='${elem.getAttribute("data-key")}']`);
    audio.play();
    
    audio.currentTime = 0; // rewind to the start
  }

  window.addEventListener('keydown', e => {
    // function called when a key is pressed
    //print the key and the key code for all the keys
    console.log(e.key.toUpperCase(), e.keyCode);

    // select the <div> element with the value of the data-key attribute = the code of the pressed key
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const silent_key= document.getElementsByClassName("silent-keys");
    const audio_key= document.getElementsByClassName("audio-keys");

    // if the pressed key is not on the screen
    if(!key) {
      silent_key[0].innerHTML = `silent    <span>key</span>${e.key.toUpperCase()}  <span>code</span>${e.keyCode}`;
      setTimeout(() => { silent_key[0].innerHTML = "";}, 7000);
      return;
    };

    // if the pressed key is on the screen, call the function that handles the keys
    audio_key[0].innerHTML = `audio    <span>key</span>${e.key.toUpperCase()}  <span>code</span>${e.keyCode}`;
    setTimeout(() => { audio_key[0].innerHTML = "";}, 7000);
    handleKey(key);
});
