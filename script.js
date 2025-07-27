const area = document.querySelector(".area");
let drawing = false ; 
function boxes(x) {
  for (let i = 0; i < x; i++) {
    const row = document.createElement("div");
    row.id = "row";
    area.appendChild(row);
    for (let j = 0; j < x; j++) {
      const column = document.createElement("div");
      column.id = "column";
      row.appendChild(column); 
      column.addEventListener("mouseover", function (e) {
        if(drawing){
          e.target.style.backgroundColor = "blue";
        }
      });
    }
  }
}
const drawingStatus = document.createElement("div");
drawingStatus.textContent = `drawing :${drawing? 'enabled': 'disabled'}`;
const body = document.querySelector(".body");
body.appendChild(drawingStatus);
drawingStatus.style.color = 'white'; 
drawingStatus.classList.add("drawingStatus");
let p = 16 ; 
boxes(p);
document.addEventListener ("keypress", (e)=>{
  if (e.key === "d" ){
    drawing = !drawing;
    drawingStatus.textContent = `drawing :${drawing? 'enabled': 'disabled'}`;
  }
})
const count = document.querySelector(".count");
count.addEventListener("click", newsheet);
function newsheet(){
    p = prompt ("Add the number of boxes");
    p = parseInt(p);
    if (p<=100 && p >1){
        area.innerHTML = "";
        boxes(p);
    }
    else {
        alert("enter a valid number");
    }
}
const reset = document.querySelector(".reset");
reset.addEventListener("click", ()=>{
  area.innerHTML = "";
  boxes(p); 
  drawing= false; 
  drawingStatus.textContent = `drawing :${drawing? 'enabled': 'disabled'}`;
})
const info = document.createElement("div");
info.classList.add('info');
info.textContent = `press [D] to ${drawing? 'disable':'enable'} the drawing`;
info.style.color= "white";
body.appendChild(info);
