(function Chpok(){
  const mainWrap = document.getElementById('root');
  
  
  function MakeElement(el,clas,id,inside){
    this.element = document.createElement(el);
    if(clas.length > 0){
      element.className = clas;
    }
    if(id.length > 0){
      element.id = id;
    }
    if(inside) {
      element.innerText = inside; 
    }

    return element;
  }

  function render(el){
    mainWrap.appendChild(el)
  }

  const container = MakeElement('div','container','',false);
  let div100 = MakeElement('div','div100','firstWrap',false);
  (function firstView(){
    const logoText = MakeElement('p','logo-text','logoText','Story');
    
    let div50 = MakeElement('div','div50 all-center','',false);
    let div50v2 = MakeElement('div','div50 all-center','right',false);
    let textWrap = MakeElement('div','div100','',false);
    let h1 = MakeElement('h2','mainWord','','');
    let span = MakeElement('span','red','','Расскажи ');
    let text = MakeElement('span','','','свою историю');
    
    logoText.style.marginTop = '280px';
    logoText.style.fontSize = '90px';
    div100.style.display = 'flex';
    div100.style.alignItems = 'center';
    h1.style.fontFamily = "'TT BOLD'";
    h1.style.fontSize = '40px';
    h1.style.opacity = '0';
    h1.style.position = 'relative';
    h1.style.top = '10px';
    h1.style.transition = '.7s';
    text.style.color = 'var(--color-violet)';
    

      setTimeout(()=>{
        logoText.style.color = 'var(--color-grey)';
      },1000);

      setTimeout(()=>{
        logoText.style.marginTop = '10px';
        logoText.style.fontSize = '40px';
        setTimeout(() => {
          h1.style.opacity = '1'
          h1.style.top = '0px';
        },1500);
      },2500);

    
    h1.appendChild(span);
    h1.appendChild(text);
    textWrap.appendChild(h1);
    div50.appendChild(textWrap);
    div100.appendChild(div50);
    div50v2.appendChild(Form());
    div100.appendChild(div50v2);
    
    container.appendChild(logoText);
    container.appendChild(div100);
    render(container);
  })();

  function Form(){
    let count = 0;
    let wrap = MakeElement('div','form','',false);
    let firstButton = MakeElement('button','signin-button','','Войти');
    let secondButton = MakeElement('button','signin-button signup-button','','Регистрация');
    let login = MakeElement('input','input-in-form','',false);
    let passInput = MakeElement('input','input-in-form','',false);

    let name = MakeElement('input','input-in-form input-in-form2','',false);
    let surname = MakeElement('input','input-in-form input-in-form2','',false);
    let login2 = MakeElement('input','input-in-form input-in-form2','',false);
    let passInput2 = MakeElement('input','input-in-form input-in-form2','',false);
    let signInP = MakeElement('p','signInP','','Войти');

    // let boolForSignInButton = false;

    firstButton.onclick = () => signInClick();
    secondButton.onclick = () => signUpClick();
    

    wrap.appendChild(signInP);
    wrap.appendChild(login);
    wrap.appendChild(passInput);
    wrap.appendChild(firstButton);
    wrap.appendChild(secondButton);
    wrap.appendChild(name);
    wrap.appendChild(surname);
    wrap.appendChild(login2);
    wrap.appendChild(passInput2);

    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.justifyContent = 'space-between';
    wrap.style.position = 'relative';
    wrap.style.top = '20px';
    wrap.style.opacity = '0';
    wrap.style.transition = '1s';
    login.placeholder = 'Логин';
    passInput.placeholder = 'Пароль';
    passInput.style.transition = '1s';
    name.placeholder = 'Имя';
    name.style.transition = '1.5s';
    surname.placeholder = 'Фамилия';
    surname.style.transition = '1.5s';
    login2.placeholder = 'Логин';
    login2.style.transition = '1.5s';
    passInput2.placeholder = 'Пароль';
    firstButton.style.transition = '1s';
    signInP.style.opacity = 0;


    setTimeout(() => {
      wrap.style.opacity = '1';
      wrap.style.top = '0px';
    },4500);

    signInClick = () => {
      secondButton.classList.add('signin-button-active-for-signup');
      wrap.style.paddingBottom = '20px';
      firstButton.style.position = 'relative';
      firstButton.style.top = '140px';
      passInput.style.position = 'absolute';
      passInput.style.top = '160px';
      firstButton.classList.remove('signin-button-active-for-signup');
      name.style.top = '320px';
      surname.style.top = '320px';
      login2.style.top = '320px';
      passInput2.style.top = '320px';
      wrap.style.paddingTop = '100px';
      signInP.style.opacity = 1;
      count++;
      console.log(count);
      if(count == 2) {
        removeContent();
      }
    }

    signUpClick = () => {
      secondButton.classList.remove('signin-button-active-for-signup');
      wrap.style.paddingBottom = '20px';
      firstButton.style.top = '0px';
      firstButton.classList.add('signin-button-active-for-signup');
      name.style.top = '250px';
      surname.style.top = '250px';
      login2.style.top = '250px';
      passInput2.style.top = '250px';
      wrap.style.paddingTop = '30px';
      passInput.style.top = '30px';
      login2.style.top = '200px';
      surname.style.top = '150px';
      name.style.top = '100px';
      signInP.style.opacity = 0;
      count = 0;
    }
    removeContent = () => {
      var a = document.getElementById('firstWrap');
      a.style.transition = '1s';
      a.style.marginTop = '-30px';
      a.style.opacity = 0;
      

      setTimeout(() => {
        a.parentNode.removeChild(a);
      },1300);
      var b = document.getElementById('logoText');
      setTimeout(() => {
        menuBlock.open();
      },1000)
    }
    return wrap;
  }

  function main(){
    
  };

  let menuBlock = {
    open: () => {
      let element = document.getElementById('menu-block');
      element.classList.add('menu-block-wrap-active');
    },
    bye: () => {
      alert('Bye')
    }
  }

})();