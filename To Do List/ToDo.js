var button = document.getElementById('input_button');
var input = document.getElementById('input_text');
var list = document.getElementById('list');
var checkbox =document.getElementById('checkbox');
var title= document.getElementById('title');

if(button){
    button.addEventListener("click", clickButton);
}else{
    console.log("다시 시도해주세요");
}

function max_line(count){
  if(count==9){
    // window.onload.title.innerHTML="9 is max";
    
    return 0;
  }
  else{
    return 1;
  }
}
var cnt = 1;

function clickButton() {
  if(max_line(list.childElementCount)==0){
    alert("오늘은 이정도면 충분해요 :)");
    
    return 0;
  }
  var temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<input type='checkbox' id='checkbox' onclick='clicked()'><button style='float: right;' class='btn-outline-secondary' type='button' onclick='remove("+cnt+")'>delete</button>";
  list.appendChild(temp);
  cnt++;
}

// function clicked(){
//   if(true){
//     Element.('color','red');
//   }
// }

function remove(cnt) {
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
  }