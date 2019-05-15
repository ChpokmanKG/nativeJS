let storyTitle = [];
let storyBody = [];

let login = document.getElementById('login'),
    password = document.getElementById('password'),
    wrap = document.getElementById('all-story');

let storyTit = document.getElementById('story-title'),
    storyBod = document.getElementById('story-body'),
    lastStory = document.getElementById('lastStory'),
    storyCount = document.getElementById('profile-story-count'),
    storySucces = document.getElementById('story-add-succes');

let addButton = document.getElementById('add-button');
let counter = 0;


let modalBlock = document.getElementById('modal-block2'),
    link = document.getElementById('link2'),
    addNewPicture = document.getElementById('addNewPicture2'),
    addPhotoForStory = document.getElementById('add-photo-for-story'),
    closeButtonInModal2 = document.getElementById('closeButtonInModal2');

    addNewPicture.onclick = () => {
      modalClose();
      storyBod.style.background = `url(${link.value}) center center / cover`;
    }
  
    addPhotoForStory.onclick = () => {
      modalBlock.style.display = 'flex';
      setTimeout(() => {
        modalBlock.style.opacity = 1;
      },300);
      link.value = '';
    }

    closeButtonInModal2.onclick = () => modalClose();

    let modalClose = () => {
      modalBlock.style.opacity = 0;
      setTimeout(() => {
        modalBlock.style.display = 'none';
      },300);
    }

  
    const randomIntAddStory = (min,max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }


addButton.onclick = () => {
  counter++;
  storyTitle.push(storyTit.value);
  storyBody.push(storyBod.value);
  storyTit.value = '';
  storyBod.value = '';
  storyCount.innerText = storyTitle.length + '-историй';
  storySucces.style.opacity = 1;
  setTimeout(() => {
    storyBod.style.background = 'var(--color-bg)';
  },1000);
  setTimeout(() => {
    storySucces.style.opacity = 0;
  },1500);
  wrap.innerHTML += `
  <div id="${randomIntAddStory(0,100000000)}" onclick="readStoryAllStory(this),favoriteStoryFuncOnClick(this)" class="all-story-card" style="background: url(${link.value}) center center / cover">
  <div class="all-story-card-head all-center">
    <p>${login.value}</p>
  </div>

  
  
  <div class="all-story-card-body all-center">
    <div class="all-story-card-title all-center">
      <p>${storyTitle[counter - 1]}</p>
      <button class="story-card-wrap-read-story" onclick="storyOpen()">
      Читать
    </button> 
      <div class="like-fav-wrap all-center all-story-like-fav-wrap"> 
      <button class="around-button like">

        </button>
        <button class="around-button fav" onclick="addFavoriteStory()">

        </button>
      </div>
    </div>
  </div>

  
  <div class="all-story-card-desc">
  ${storyBody[counter - 1]}
  </div>
</div>
  `
  lastStory.innerHTML = `
  <p class="profileBlock50Header">Последняя история</p>

  <div id="${randomIntAddStory(0,100000000)}" onclick="readStoryAllStory(this),favoriteStoryFuncOnClick(this)" class="all-story-card" style="background: url(${link.value}) center center / cover">
    <div class="all-story-card-head all-center">
      <p>${login.value}</p>
    </div>
  
    
    
    <div class="all-story-card-body all-center">
      <div class="all-story-card-title all-center">
        <p>${storyTitle[counter - 1]}</p>
        <button class="story-card-wrap-read-story" onclick="storyOpen()">
        Читать
      </button> 
        <div class="like-fav-wrap all-center all-story-like-fav-wrap">
         
        <button class="around-button like">
  
          </button>
          <button class="around-button fav" onclick="addFavoriteStory()">
  
          </button>
        </div>
      </div>
    </div>
  
    
    <div class="all-story-card-desc">
    ${storyBody[counter - 1]}
    </div>
  </div>
  `
}
