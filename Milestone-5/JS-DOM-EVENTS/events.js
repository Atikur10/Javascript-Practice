// way 02 use sometime
function makeTomato(){
    document.body.style.backgroundColor = 'tomato';
}
// way 03
let red = document.getElementById('red');
red.onclick = makeRed;

function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// way 04 use most of the time
const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', makePinkFunction);
function makePinkFunction() {
    document.body.style.backgroundColor = 'pink'
}
// way 04 01
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeGreenFunction(){
    document.body.style.backgroundColor = 'green';
})
// way 05
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})