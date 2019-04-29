let friendStory = document.getElementById('friendsStory'),
    allStory = document.getElementById('allStory'),
    addStory = document.getElementById('addNewStory'),
    favoriteStory = document.getElementById('favStory'),
    profile = document.getElementById('profile')
    menuBlock = document.getElementById('menu-block');

let redLogoText = document.getElementById('redText'),
    logo = document.getElementById('logoText'),

    friendStoryBlock = document.getElementById('main'),
    allStoryBlock = document.getElementById('all-story'),
    addStoryBlock = document.getElementById('add-story'),
    favoriteStoryBlock = document.getElementById('fav-story'),
    profileBlock = document.getElementById('profileBlock');

friendStory.onclick = () => {
  friendStoryFunc();
}

allStory.onclick = () => {
  allStoryFunc();
}

addStory.onclick = () => {
  addStoryFunc();
}

favoriteStory.onclick = () => {
  favStoryFunc();
}

profile.onclick = () => {
  profileFunc();
}






let friendStoryFunc = () => {
  addActiveClass(friendStory);
  activeContentBlock(friendStoryBlock)
}


let allStoryFunc = () => {
  addActiveClass(allStory);
  activeContentBlock(allStoryBlock)
}

let addStoryFunc = () => {
  addActiveClass(addStory);
  activeContentBlock(addStoryBlock)
}

let favStoryFunc = () => {
  addActiveClass(favoriteStory);
  activeContentBlock(favoriteStoryBlock)
}

let profileFunc = () => {
  addActiveClass(profile);
  activeContentBlock(profileBlock)
}


let addActiveClass = (el) => {
  let elements = [friendStory,
                  allStory,
                  addStory,
                  favoriteStory,
                  profile];
  for(let i = 0; i < elements.length; i++) {
    if(elements[i].className === 'menu-block-items menu-block-items-active' || "menu-block-items add-story all-center") {
      elements[i].classList.remove('menu-block-items-active');
      el.classList.add('menu-block-items-active');
    }
  }
}

let activeContentBlock = (el) => {
  let elements = [friendStoryBlock,
                  allStoryBlock,
                  addStoryBlock,
                  favoriteStoryBlock,
                  profileBlock];
  for(let i = 0; i < elements.length; i++){
    if(elements[i].className == "main all-story all-center story-activate") {
      elements[i].classList.remove('story-activate');
      el.classList.add('story-activate');
    }
  }
}