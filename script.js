function paper(){
    let rps;
    let num = Math.random();
    num =num*100;
    if(num>=0 && num<=33){
        rps="Rock"
    }
    if(num>33 && num<=66){
        rps="Paper"
    }
    if(num>66){
        rps="Scissor"
    }
    if (rps=="Rock"){
        document.getElementById('system').innerHTML="system has chosen:" +rps;
        document.getElementById('Result').innerHTML="you won"
    }
    if (rps=="Paper"){
        document.getElementById('system').innerHTML="system has chosen:" +rps;
        document.getElementById('Result').innerHTML="Game drwan"
    }
    if (rps=="Rock"){
        document.getElementById('system').innerHTML="system has chosen:" +rps;
        document.getElementById('Result').innerHTML="system won"
    }
}
function scissor(){
    let rps;
    let num = Math.random();
    num =num*100;
    if(num>=0 && num<=33){
        rps="Rock"
    }
    if(num>33 && num<=66){
        rps="Paper"
    }
    if(num>66){
        rps="Scissor"
    }
    if (rps=="Rock"){
        document.getElementById('system').innerHTML="system has chosen:" +rps;
        document.getElementById('Result').innerHTML="system won"
    }
    if (rps=="Paper"){
        document.getElementById('system').innerHTML="system has chosen:" +rps;
        document.getElementById('Result').innerHTML="you won"
    }
    if (rps=="Rock"){
        document.getElementById('system').innerHTML="system has chosen:" +rps;
        document.getElementById('Result').innerHTML="Game drawn"
    }
}
function Rock(){
    let rps;
    let num = Math.random();
    num =num*100;
    if(num>=0 && num<=33){
        rps="Rock"
    }
    if(num>33 && num<=66){
        rps="Paper"
    }
    if(num>66){
        rps="Scissor"
    }
    if (rps=="Rock"){
        document.getElementById('system').innerHTML="system has chosen:" +rps;
        document.getElementById('Result').innerHTML="Game drwan"
    }
    if (rps=="Paper"){
        document.getElementById('system').innerHTML="system has chosen:" +rps;
        document.getElementById('Result').innerHTML="system won"
    }
    if (rps=="Rock"){
        document.getElementById('system').innerHTML="system has chosen:" +rps;
        document.getElementById('Result').innerHTML="you won"
    }
}