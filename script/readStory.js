let readStoryAllStory = (el) => {
  let contentPlace = document.getElementById('content-place');
  let last = el.childNodes.length - 1;
  contentPlace.innerText = el.childNodes[last].previousSibling.innerText;
}
let readStory = (el) =>{
  let contentPlace = document.getElementById('content-place');
  
  let text = el.childNodes
  contentPlace.innerText = el.childNodes[2].previousSibling.childNodes[6].previousSibling.innerHTML;
}

let closeButtonInReadStoryJs = document.getElementById('read-close');

closeButtonInReadStoryJs.onclick = () => {
  let wrap = document.getElementById('read-story');
  wrap.style.top = '120%';
}

let storyOpen = () => {
  let wrap = document.getElementById('read-story');
  wrap.style.top = '0%';
}