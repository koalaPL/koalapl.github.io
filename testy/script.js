
function loadTest() {
    var password = document.getElementById('password').value
    if(password == "123")
    {
        let testCanvas = document.getElementById('testCanvas');
        testCanvas.innerHTML = '<object style="height:100%; width: 100%;" data="http://127.0.0.1:3000/testy/LSK/media-Transmisyjne.html"></object>';
        testCanvas.firstChild.removeAttribute("data");
        let kl = 4.5*testCanvas.clientHeight;
        let heightElementQ="height:"+kl+"px";
        testCanvas.setAttribute("style",heightElementQ);
    }
    
    

    }
  


   

  










