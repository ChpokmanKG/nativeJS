(function(){
  let white = document.getElementById('white-theme'),
      yellow = document.getElementById('yellow-theme'),
      black = document.getElementById('afro-american-theme');
  
  let wrap = document.getElementById('read-story'),
      textWrap = document.getElementById('read-story-body');
  
  yellow.onclick = () => {
    activeContentBlock('yellow');
  }

  black.onclick = () => {
    activeContentBlock('black');
  }

  white.onclick = () => {
    activeContentBlock('white');
  }

  
  let activeContentBlock = (strings) => {
    let elements = [wrap,textWrap];

    if(strings === 'yellow'){
      for(let i = 0; i < elements.length; i++){
        elements[i].classList.add('yellow-theme');
        elements[i].classList.remove('black-theme');
      }
    }
    else if (strings === 'black'){
      for(let i = 0; i < elements.length; i++){
        elements[i].classList.add('black-theme');
        elements[i].classList.remove('yellow-theme');
      }
    }
    else {
      for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove('black-theme');
        elements[i].classList.remove('yellow-theme');
      }
    }
  }
})();