const colors = ["red",'green','Blue','yellow','rgba(133,122,200)',"#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    const randonNumber =getrandonnumber();
    document.body.style.backgroundColor = colors[randonNumber];
    color.textContent = colors[randonNumber];
})

function getrandonnumber(){
    return Math.floor(Math.random()*colors.length);
}