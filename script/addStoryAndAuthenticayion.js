let storyTitle = [];
let storyBody = [];

let login = document.getElementById('login'),
    password = document.getElementById('password'),
    wrap = document.getElementById('all-story');

let storyTit = document.getElementById('story-title'),
    storyBod = document.getElementById('story-body');

let addButton = document.getElementById('add-button');
let count = 0;

addButton.onclick = () => {
  count++;
  storyTitle.push(storyTit.value);
  storyBody.push(storyBod.value);
  storyTit.value = '';
  storyBod.value = '';
  wrap.innerHTML += `
  <div class="all-story-card">
  <div class="all-story-card-head all-center">
    <p>${login.value}</p>
  </div>

  
  
  <div class="all-story-card-body all-center">
    <div class="all-story-card-title all-center">
      <p>${storyTitle[count - 1]}</p>
      <button class="story-card-wrap-read-story">Читать</button>
      <div class="like-fav-wrap all-center all-story-like-fav-wrap">
        <button class="around-button like">

        </button>
        <button class="around-button fav">

        </button>
      </div>
    </div>
  </div>

  
  <div class="all-story-card-desc">
  ${storyBody[count - 1]}
  </div>
</div>
  `
}
