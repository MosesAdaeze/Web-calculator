
let outputDcreen = document.getElementById("outputScreen")
function show(num){
    outputScreen.value += num
}
function calculate(){
    try{
        outputScreen.value = eval
        (outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function wipe(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value
    .slice(0, -1)
}

// for wipe empty "" 
// slice all button del to delete only a number ,-1

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

// NOTE: 1

// let display = document.getElementById('outputScreen');
    
// const wipe = () => {
//     display.value = '';
// }
// const show = (n) => {
//     display.value += n;
// }

// const calculate = () => {
//     display.value = eval(display.value);
// }