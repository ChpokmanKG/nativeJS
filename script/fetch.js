let countF = 0;
let a = document.getElementById('signIn')
  .addEventListener('click',() => {
    countF++;
    if(countF == 2) {
      addContent();
    }
  })

addContent = () => {
  let wrap = document.getElementById('main');
  let allStoryWrap = document.getElementById('all-story');
let Quotes = [
  'Послушай, живи, будь счастлива, улыбайся... кто знает, наступит завтра или нет...',
  'Вот бы за дешево загнать «завтра» первому встречному и осесть в этом июле, в этом втором его числе.',
  'Либо вы поднимитесь вверх на одну ступень сегодня, или соберитесь с силами, чтобы подняться на эту ступень завтра.',
  'Впервые за очень долгое время завтрашний день казался ей... возможным.',
  'А если завтра не будет? Сегодня, например, его не было!',
  'Время без тебя течет слишком медленно. Завтра наступит через год.',
  'Cras, cras, semper cras, sic evadit aetas. Завтра, завтра, всегда завтра — так проходит жизнь'
]

const randomInt = (min,max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

fetch('https://demo5957191.mockable.io/friendStory', {method: 'GET'})
  .then(result => result.json())
  .then(arr => {
    console.log(arr);
    let content;
    let allContent;
    Array.from(arr).forEach(item => {
      content += `
      <div class="story-card-wrap">
      <div class="story-card-wrap-head all-center">
        <p class="story-card-wrap-username">
          ${item.username}
        </p>
        <p class="story-card-wrap-title">
          ${item.storyTitle}
        </p>
        <p class="story-card-wrap-story-demo">
          ${item.storyContent}
        </p>
      </div>
      <div class="story-card-wrap-body all-center">
        <button class="story-card-wrap-read-story">
          Читать
        </button>
        <div class="like-fav-wrap all-center">
          <button class="around-button like">

          </button>
          <button class="around-button fav">

          </button>
        </div>
      </div>
    </div>
      `;

      allContent += `
      <div class="all-story-card">
      <div class="all-story-card-head all-center">
        <p>${item.username}</p>
      </div>

      
      
      <div class="all-story-card-body all-center">
        <div class="all-story-card-title all-center">
          <p>${item.storyTitle}</p>
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
      ${item.storyContent}
      </div>
    </div>
      `;
    })
    wrap.innerHTML = content;
    allStoryWrap.innerHTML = allContent;
  })
  .catch(err => {
    console.error(err);
    wrap.innerHTML = `
    <div>
    <h2 class='error'>
      ${Quotes[randomInt(0,Quotes.length)]}
    </h2> \n
    <small>
      Проблемы с соединением
    </small>
    </div>`;
    allStoryWrap.innerHTML = `
    <div>
    <h2 class='error'>
      ${Quotes[randomInt(0,Quotes.length)]}
    </h2> \n
    <small>
      Проблемы с соединением
    </small>
    </div>`;
  })
}