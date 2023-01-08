// let display = document.getElementById('screen');
    
// const wipe = () => {
//     display.value = '';
// }
// const show = (n) => {
//     display.value += n;
// }

// const calculate = () => {
//     display.value = eval(display.value);
// }

let outputscreen = document
.getElementById("outputscreen")
function show(num){
    outputscreen.value += num
}
function calculate(){
    try{
        outputscreen.value = eval
        (outputscreen.value);
    }
    catch(err){
        outputscreen.value("invaojiad")
    }
}
function wipe(){
    outputscreen.value = "";
}

function del(){
    outputscreen.value = outputscreen.value
    .slice(0, -1)
}