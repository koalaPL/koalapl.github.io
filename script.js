function toggleMenu(){
  document.querySelector(".topic-sidebar").classList.toggle("a");
}
function closeMenu(){
  document.querySelector(".topic-sidebar").classList.remove("a");
}
var lessonContent = document.getElementById("lesson-content");
lessonContent.addEventListener('click', function (){
    closeMenu()
  })
var menuBtn = document.getElementsByClassName('burger')[0];

  menuBtn.addEventListener('click', function () {
    toggleMenu();
  });


function setLesson(dir, how){
  if(document.location.hash.replace("#","")!="")
  {
    topicSelect(dir, how + document.location.hash.replace("#",""));
  }
  
}



toggleMenu();

function topicSelect(dir, pageName)
{
  document.getElementById('lesson-content').innerHTML=" ";
  $('#lesson-content').load(dir+'/'+pageName+'.html');

  switch(dir)
  {
    case "ASO":document.location.href = document.location.pathname+"#"+pageName.replace("aso","");
      break;
    case "LSK": document.location.href = document.location.pathname+"#"+pageName.replace("sk","");
      break;
    case "CISCO": document.location.href = document.location.pathname+"#"+pageName.replace("id","");;
      break;
    case "BD": document.location.href = document.location.pathname+"#"+pageName.replace("bd","");;
      break;
  }
  
 
 
          toggleMenu();
}


switch(document.location.pathname)
{
  case "/aso.html":
    setLesson("ASO/","aso");
  break;
  case "/sk.html":
    setLesson("LSK/","sk");
  break;
  case "/id.html":
    setLesson("CISCO/","id");
  break;
  case "/bd.html":
    setLesson("BD/","bd");
  break;
}
document.addEventListener('keypress', (event)=>{

  if(event.key === "Enter" && document.activeElement==menuBtn) {
    toggleMenu()
  }
  switch(document.location.pathname)
  {
    case "/aso.html":
      for(var i=1; i<=17; i++)
      {
        if(event.key === "Enter" && document.activeElement==document.getElementById("aso"+i)) {
          topicSelect("ASO","aso"+i);
        }
      }
      setLesson("ASO/","aso");
    break;
    case "/sk.html":
      for(var i=1; i<=4; i++)
      {
        if(event.key === "Enter" && document.activeElement==document.getElementById("sk"+i)) {
          topicSelect("LSK","sk"+i);
        }
      }
      setLesson("LSK/","sk");
    break;
    case "/cisco.html":
      for(var i=1; i<=3   ; i++)
      {
        if(event.key === "Enter" && document.activeElement==document.getElementById("cisco"+i)) {
          topicSelect("CISCO","id"+i);
        }
      }
      setLesson("CISCO/","id");
    break;
    case "/bd.html":
      for(var i=1; i<=3   ; i++)
      {
        if(event.key === "Enter" && document.activeElement==document.getElementById("bd"+i)) {
          topicSelect("BD","bd"+i);
        }
      }
      setLesson("BD/","bd");
    break;
  }
  
});

 

function checkedCompletedTopic() {
  topics.classList.add("CompletedIcon");
  topics.classList.remove("RightLessIcon");
    
}



//-----------SO---------------//

$(document).ready(function () {
  $('#aso1').click(function () {
    topicSelect("ASO","aso1");
   });
});
$(document).ready(function () {
  $('#aso2').click(function () {
    topicSelect("ASO","aso2");
   });
});
$(document).ready(function () {
  $('#aso3').click(function () {
    topicSelect("ASO","aso3");
   });
});
$(document).ready(function () {
  $('#aso4').click(function () {
    topicSelect("ASO","aso4");
   });
});
$(document).ready(function () {
  $('#aso5').click(function () {
    topicSelect("ASO","aso5");
   });
});
$(document).ready(function () {
  $('#aso6').click(function () {
    topicSelect("ASO","aso6");
   });
});
$(document).ready(function () {
  $('#aso7').click(function () {
    topicSelect("ASO","aso7");
   });
});
$(document).ready(function () {
  $('#aso8').click(function () {
    topicSelect("ASO","aso8");
   });
});
$(document).ready(function () {
  $('#aso9').click(function () {
    topicSelect("ASO","aso9");
   });
});
$(document).ready(function () {
  $('#aso10').click(function () {
    topicSelect("ASO","aso10");
   });
});
$(document).ready(function () {
  $('#aso11').click(function () {
    topicSelect("ASO","aso11");
   });
});
$(document).ready(function () {
  $('#aso12').click(function () {
    topicSelect("ASO","aso12");
   });
});

$(document).ready(function () {
  $('#aso13').click(function () {
    topicSelect("ASO","aso13");
   });
});

$(document).ready(function () {
  $('#aso14').click(function () {
    topicSelect("ASO","aso14");
   });
});
$(document).ready(function () {
  $('#aso15').click(function () {
    topicSelect("ASO","aso15");
   });
});
$(document).ready(function () {
  $('#aso16').click(function () {
    topicSelect("ASO","aso16");
   });
});
$(document).ready(function () {
  $('#aso17').click(function () {
    topicSelect("ASO","aso17");
   });
});

//-----------SK---------------//

$(document).ready(function () {
  $('#sk1').click(function () {
    topicSelect("LSK", "sk1");
   });
});
$(document).ready(function () {
  $('#sk2').click(function () {
    topicSelect("LSK", "sk2");
   });
});
$(document).ready(function () {
  $('#sk3').click(function () {
    topicSelect("LSK", "sk3");
   });
});
$(document).ready(function () {
  $('#sk4').click(function () {
    topicSelect("LSK", "sk4");
   });
});

//-----------CISCO---------------//

$(document).ready(function () {
  $('#cisco1').click(function () {
    topicSelect("CISCO", "id1");
   });
});
$(document).ready(function () {
  $('#cisco2').click(function () {
    topicSelect("CISCO", "id2");
   });
});
$(document).ready(function () {
  $('#cisco3').click(function () {
    topicSelect("CISCO", "id3");
   });
});

//----------Bazy Danych-----------//
$(document).ready(function () {
  $('#bd1').click(function () {
    topicSelect("BD", "bd1");
   });
});
$(document).ready(function () {
  $('#bd2').click(function () {
    topicSelect("BD", "bd2");
   });
});
$(document).ready(function () {
  $('#bd3').click(function () {
    topicSelect("BD", "bd3");
   });
});
$(document).ready(function () {
  $('#bd4').click(function () {
    topicSelect("BD", "bd4");
   });
});
$(document).ready(function () {
  $('#bd5').click(function () {
    topicSelect("BD", "bd5");
   });
});
$(document).ready(function () {
  $('#bd6').click(function () {
    topicSelect("BD", "bd6");
   });
});
$(document).ready(function () {
  $('#bd7').click(function () {
    topicSelect("BD", "bd7");
   });
});

$(document).ready(function () {
  $('#bd8').click(function () {
    topicSelect("BD", "bd8");
   });
});

