function fetchitem() {
  let name = document.getElementById("computer-title").innerHTML;
  document.getElementById("item1").innerHTML = name;
}
function itemdata(item){
  window.open("./item-data.hmtl", "_blank")
}