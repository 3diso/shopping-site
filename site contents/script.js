function fetchitem() {
  let name = document.getElementById("computer-title").innerHTML;
  document.getElementById("item1").innerHTML = name;
}
function itemdata(item){
  window.open("./item-data.html", "_blank")
  localStorage.setItem("item", item);
}
function printitem(item){
  document.getElementById("itemdataTitle").innerHTML = item
}