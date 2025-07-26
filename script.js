const area = document.querySelector(".area");
function boxes(x) {
  for (let i = 0; i < x; i++) {
    const row = document.createElement("div");
    row.id = "row";
    area.appendChild(row);
    for (let j = 0; j < x; j++) {
      const column = document.createElement("div");
      column.id = "column";
      row.appendChild(column);
      area.addEventListener("click", () => {
        column.addEventListener("mouseover", function (e) {
          e.target.style.backgroundColor = "blue";
        });
      });
    }
  }
}
boxes(16);
const count = document.querySelector(".count");
count.addEventListener("click", newsheet);
function newsheet(){
    let p = prompt ("Add the number of boxes");
    p = parseInt(p);
    if (p<=100 && p >1){
        area.innerHTML = "";
        boxes(p);
    }
    else {
        alert("enter a valid number");
    }
}