(function(){
  let imgBlock = document.getElementById('img-block');
  let modalBlock = document.getElementById('modal-block');
  let closeButton = document.getElementById('closeButtonInModal');
  let addButton = document.getElementById('addNewPicture');
  let link = document.getElementById('link');

  closeButton.onclick = () => {
    modalClose();
  }

  addButton.onclick = () => {
    if(link.value){
      imgBlock.style.background = `url(${link.value}) center center / cover`;
    }
    link.value = "";
    modalClose();
  }

  imgBlock.onclick = () => {
    modalBlock.style.display = 'flex';
    setTimeout(() => {
      modalBlock.style.opacity = 1;
    },300);
  }

  let modalClose = () => {
    modalBlock.style.opacity = 0;
    setTimeout(() => {
      modalBlock.style.display = 'none';
    },300);
  }
})();