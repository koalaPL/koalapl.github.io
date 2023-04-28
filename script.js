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

  setLesson("aso")
function setLesson(how){
  if(document.location.hash.replace("#","")!="")
  topicSelect(how + document.location.hash.replace("#",""))
}


toggleMenu();


function topicSelect(pageName)
{
  $('#lesson-content').load('ASO/'+pageName+'.html');
  document.location.href = document.location.pathname+"#"+pageName.replace("aso","");
          toggleMenu();
}


document.addEventListener('keypress', (event)=>{

  if(event.key === "Enter" && document.activeElement==menuBtn) {
    toggleMenu()
  }
  for(var i=1; i<=17; i++)
  {
    if(event.key === "Enter" && document.activeElement==document.getElementById("aso"+i)) {
      topicSelect("aso"+i);
    }
  }
});

 

function checkedCompletedTopic() {
  topics.classList.add("CompletedIcon");
  topics.classList.remove("RightLessIcon");
    
}






//-----------SO---------------//

$(document).ready(function () {
  $('#aso1').click(function () {
    topicSelect("aso1");
   });
});
$(document).ready(function () {
  $('#aso2').click(function () {
    topicSelect("aso2");
   });
});
$(document).ready(function () {
  $('#aso3').click(function () {
    topicSelect("aso3");
   });
});
$(document).ready(function () {
  $('#aso4').click(function () {
    topicSelect("aso4");
   });
});
$(document).ready(function () {
  $('#aso5').click(function () {
    topicSelect("aso5");
   });
});
$(document).ready(function () {
  $('#aso6').click(function () {
    topicSelect("aso6");
   });
});
$(document).ready(function () {
  $('#aso7').click(function () {
    topicSelect("aso7");
   });
});
$(document).ready(function () {
  $('#aso8').click(function () {
    topicSelect("aso8");
   });
});
$(document).ready(function () {
  $('#aso9').click(function () {
    topicSelect("aso9");
   });
});
$(document).ready(function () {
  $('#aso10').click(function () {
    topicSelect("aso10");
   });
});
$(document).ready(function () {
  $('#aso11').click(function () {
    topicSelect("aso11");
   });
});
$(document).ready(function () {
  $('#aso12').click(function () {
    topicSelect("aso12");
   });
});

$(document).ready(function () {
  $('#aso13').click(function () {
    topicSelect("aso13");
   });
});

$(document).ready(function () {
  $('#aso14').click(function () {
    topicSelect("aso14");
   });
});
$(document).ready(function () {
  $('#aso15').click(function () {
    topicSelect("aso15");
   });
});
$(document).ready(function () {
  $('#aso16').click(function () {
    topicSelect("aso16");
   });
});
$(document).ready(function () {
  $('#aso17').click(function () {
    topicSelect("aso17");
   });
});

//-----------SK---------------//

$(document).ready(function () {
  $('#sk1').click(function () {
          $('#lesson-content').load('LSK/sk1.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#sk2').click(function () {
          $('#lesson-content').load('LSK/sk2.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#sk3').click(function () {
          $('#lesson-content').load('LSK/sk3.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#sk4').click(function () {
          $('#lesson-content').load('LSK/sk4.html');
          toggleMenu();
   });
});

//-----------CISCO---------------//

$(document).ready(function () {
  $('#cisco1').click(function () {
          $('#lesson-content').load('CISCO/id1.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#cisco2').click(function () {
          $('#lesson-content').load('CISCO/id2.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#cisco3').click(function () {
          $('#lesson-content').load('CISCO/id3.html');
          toggleMenu();
   });
});
