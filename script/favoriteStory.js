let favoriteStoryAllWrap;
let cloneForFavoriteStorys;

let favoriteStoryFuncOnClick = (el) => {
  favoriteStoryAllWrap = document.getElementById(el.id);
  cloneForFavoriteStorys = favoriteStoryAllWrap.cloneNode(true);
}

let addFavoriteStory = () => {
  let wrap = document.getElementById('fav-story');
  wrap.appendChild(cloneForFavoriteStorys);
}