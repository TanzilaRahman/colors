
function changeColors(){

    const r = Math.floor(Math.random()*255); 
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    document.getElementsByTagName("body")[0].style.background = `rgb(${r},${g},${b})`;
}