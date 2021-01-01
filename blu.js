function speak(message) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function download(url){
    window.open(url, download)
}

function write(write){
    document.write(write)
}

function print(write){
    document.write(write)
}

//progress//////////////////
function getId(id){
    document.getElementById(id);
}

function getVal(id){
    document.getElementById(id).value;

}

function getHTML(id){
    document.getElementById(id).innerHTML;
}

function getTxt(id){
    document.getElementById(id).innerText;
}
/////////////////////////////

var today = new Date();
var todhrs = today.getHours()
if(todhrs == 13){
    todhrs = 1;
}
if(todhrs == 14){
    todhrs = 2;
}
if(todhrs == 15){
    todhrs = 3;
}
if(todhrs == 16){
    todhrs = 4;
}
if(todhrs == 17){
    todhrs = 5;
}
if(todhrs == 18){
    todhrs = 6;
}
if(todhrs == 19){
    todhrs = 7;
}
if(todhrs == 20){
    todhrs = 8;
}
if(todhrs == 21){
    todhrs = 9;
}
if(todhrs == 22){
    todhrs = 10;
}
if(todhrs == 23){
    todhrs = 11;
}
if(todhrs == 23){
    todhrs = 12;
}
var time = todhrs + ":" + today.getMinutes()

var date = today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();

function userInput(value){
    prompt(value)
}

function input(value){
    document.write("<textarea class='input' style='resize: none; text-align: center; border-radius: 10px; background-color: rgb(173, 173, 173; width: 10%; height: 5%; ' id='input' placeholder='value'></textarea>")
    document.getElementById("input").placeholder = value;
    console.log('class for input() is "input"')
}


