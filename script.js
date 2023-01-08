
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
        outputScreen.value("invaojiad")
    }
}
function wipe(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value
    .slice(0, -1)
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