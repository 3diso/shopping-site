function fetchitem() {
  let Arr = localStorage.getItem("itemArr")
  let arr = []
  arr = Arr.split(',')
  for(i=0;i<arr.length;i++){
    if (Arr.length >0)
    {
      let element = document.createElement("li")
      element.innerHTML = arr[i]
      document.getElementById("basket1").append(element)
    }
  }
  localStorage.setItem("itemArr",[])
  itemBasket = []
}
var itemBasket = []
localStorage.setItem("itemArr", [])

function itemdata(item){
  window.open("./item-data.html", "_blank")
  localStorage.setItem("item", item);
}
function printitem(item){
  document.getElementById("itemdataTitle").innerHTML = item
  if (item == "computer")
  {
    document.getElementById("main").innerHTML = "computer is good"
  } else if (item == "banana")
  {
    document.getElementById("main").innerHTML = "book is readable"
  }else 
  {
    document.getElementById("main").innerHTML = "banana exits"
  }
}
function gotoBasket(){
  document.getElementById("main").hidden = true;
  fetchitem();
  document.getElementById("basket").hidden = false
}
function gotoMain(){
  document.getElementById("main").hidden = false;
  document.getElementById("basket").hidden = true;
  
}
function addtobasket(item, price){
  itemBasket.push(item)
  localStorage.setItem("itemArr", itemBasket)
}
