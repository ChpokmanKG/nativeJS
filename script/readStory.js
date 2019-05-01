let readStoryAllStory = (el) => {
  let last = el.childNodes.length - 1;
  console.log(el.childNodes[last].previousSibling.innerText)
}
let readStory = (el) =>{
  console.log(el.childNodes[2].previousSibling.childNodes[6].previousSibling.innerHTML)
}