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
function loadItem() 
{
  document.getElementById("item-name").innerHTML = localStorage.getItem('item_name');
  document.getElementById("item-desc").innerHTML = localStorage.getItem('item_desc');
  if (document.getElementById("item-name").innerHTML === 'computer')
  {
    for (let i = 0; i < computer_spec.length; i++)
    {
      let listItem = document.createElement('li');
      listItem.innerHTML = computer_spec[i];
      document.getElementById("item-list").append(listItem);
    }
  }
  else if (document.getElementById("item-name").innerHTML === 'book')
  {
    for (let i = 0; i < book_spec.length; i++)
    {
      let listItem = document.createElement('li');
      listItem.innerHTML = book_spec[i];
      document.getElementById("item-list").append(listItem);
    }
  }
  else if (document.getElementById("item-name").innerHTML === 'banana')
  {
    for (let i = 0; i < banana_spec.length; i++)
    {
      let listItem = document.createElement('li');
      listItem.innerHTML = banana_spec[i];
      document.getElementById("item-list").append(listItem);
    }
  }
}


//----------------------- C O M P U T E R ------------------------------

let computer_desc = "HP All-in-One Desktop PC 24-k0022na | Intel® Core™ i5-10400T Processor | 8GB RAM | 512GB SSD | 23.8 inch Full HD 16:9 display | Microsoft Windows 11 Home OS | Black";

let computer_spec = ["Brand: HP", "Resolution: 1080p Full HD Pixels", "RAM Size: 8GB"];

//------------------------- B O O K -----------------------

let book_desc = "An exciting book.";

let book_spec = ["Dimensions: 15.24 x 2.84 x 22.86 cm", "Number of Pages: 448"]

//---------------------- B A N A N A ---------------------------------

let banana_desc = "A yummy banana."

let banana_spec = ["Weight: 0.08kg", "Size: Medium"];

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
