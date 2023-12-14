    // disable rightclick
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) {

// disable F12 key
if(e.keyCode == 123) {
alert("co probojesz? B)");
    return false;
}


// disable c key
if(e.ctrlKey && e.keyCode == 67){
    alert("cos nie wychodzi co nie?");
    return false;

}

    // disable c key
if(e.ctrlKey && e.keyCode == 67){
    alert("proboj dalej ;)");
    return false;

}


// wypierdol i
if(e.ctrlKey && e.keyCode == 73) {
alert("do kogo ? ");
    return false;
}

    // disable c key
if(e.ctrlKey && e.keyCode == 80){
    alert("Fanozo ty chcesz to drukowac? XDDDDDDDD");
    return true;
    alert("Trzymaj fanie");

}

}
