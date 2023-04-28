function toggleMenu(){
  document.querySelector(".topic-sidebar").classList.toggle("a");
}

  var menuBtn = document.getElementsByClassName('burger')[0];

  menuBtn.addEventListener('click', function (event) {
    toggleMenu();
  });


function topicSelect(pageName)
{
  $('#lesson-content').load('ASO/'+pageName+'.html');
          toggleMenu();
}







document.addEventListener('keypress', (event)=>{

  if(event.key === "Enter" && document.activeElement==menuBtn) {
    toggleMenu()
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso1")) {
    topicSelect("aso1");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso2")) {
    topicSelect("aso2");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso3")) {
    topicSelect("aso3");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso4")) {
    topicSelect("aso4");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso5")) {
    topicSelect("aso5");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso6")) {
    topicSelect("aso6");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso7")) {
    topicSelect("aso7");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso8")) {
    topicSelect("aso8");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso9")) {
    topicSelect("aso9");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso10")) {
    topicSelect("aso10");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso11")) {
    topicSelect("aso11");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso12")) {
    topicSelect("aso12");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso13")) {
    topicSelect("aso13");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso14")) {
    topicSelect("aso14");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso15")) {
    topicSelect("aso15");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso16")) {
    topicSelect("aso16");
  }
  if(event.key === "Enter" && document.activeElement==document.getElementById("aso17")) {
    topicSelect("aso17");
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
          $('#lesson-content').load('ASO/aso2.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso3').click(function () {
          $('#lesson-content').load('ASO/aso3.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso4').click(function () {
          $('#lesson-content').load('ASO/aso4.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso5').click(function () {
          $('#lesson-content').load('ASO/aso5.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso6').click(function () {
          $('#lesson-content').load('ASO/aso6.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso7').click(function () {
          $('#lesson-content').load('ASO/aso7.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso8').click(function () {
          $('#lesson-content').load('ASO/aso8.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso9').click(function () {
          $('#lesson-content').load('ASO/aso9.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso10').click(function () {
          $('#lesson-content').load('ASO/aso10.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso11').click(function () {
          $('#lesson-content').load('ASO/aso11.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso12').click(function () {
          $('#lesson-content').load('ASO/aso12.html');
          toggleMenu();
   });
});

$(document).ready(function () {
  $('#aso13').click(function () {
          $('#lesson-content').load('ASO/aso13.html');
          toggleMenu();
   });
});

$(document).ready(function () {
  $('#aso14').click(function () {
          $('#lesson-content').load('ASO/aso14.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso15').click(function () {
          $('#lesson-content').load('ASO/aso15.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso16').click(function () {
          $('#lesson-content').load('ASO/aso16.html');
          toggleMenu();
   });
});
$(document).ready(function () {
  $('#aso17').click(function () {
          $('#lesson-content').load('ASO/aso17.html');
          toggleMenu();
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
