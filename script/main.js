(function Chpok(){
  let mainWrap = document.getElementById('root');
  
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

  const Container = MakeElement('div','container','',false);
  const h1 = MakeElement('h1','','','Hello world!');
  Container.appendChild(h1);
  render(Container);

})();