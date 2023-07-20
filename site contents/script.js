function fetchitem() {
  let i = localStorage.getItem("itemNum")
  for (i;i>0;i--){
    let element = document.createElement("li")
    element.innerHTML = localStorage.getItem(`item${i}`)
    document.getElementById("basket").appendChild(element)
  }
}
function setconsts(){
  localStorage.setItem("itemNum", 1)
}
function itemdata(item){
  window.open("./item-data.html", "_blank")
  localStorage.setItem("item", item);
}
function printitem(item){
  document.getElementById("itemdataTitle").innerHTML = item
}
function addToBasket(item, price){
  localStorage.setItem(`item${localStorage.getItem("itemNum")}`, item)
  localStorage.setItem(`price${localStorage.getItem("itemNum")}`, price)
  localStorage.setItem("itemNum", localStorage.getItem("itemNum")+1)
}
