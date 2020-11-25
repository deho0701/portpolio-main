var button = document.getElementById('input_button');
var input = document.getElementById('input_text');
var list = document.getElementById('list');

if(button){
    button.addEventListener("click", clickButton);
}else{
    console.log("다시 시도해주세요");
}


var cnt = 1;

function clickButton() {
  var temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='float: right;' class='btn-outline-secondary' type='button' onclick='remove("+cnt+")'>delete</button>";
  list.appendChild(temp);
  cnt++;
}


function remove(cnt) {
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
  }