
topicSidebar = document.querySelector('.topic-sidebar');
topics = document.querySelector('.RightLessIcon');
function openNav() {
    topicSidebar.classList.toggle("topic-sidebar-close");
    
    
}


window.addEventListener('click', function(e){   
  if (! document.querySelector('.topic-sidebar').contains(e.target) && !document.getElementById('Menu').contains(e.target)){
    topicSidebar.classList.add("topic-sidebar-close");
  } 
});

window.addEventListener('resize', function(e){   
    if (window.innerWidth<1100){
      topicSidebar.classList.add("topic-sidebar-close");
    } 
  });

 

function checkedCompletedTopic() {
  topics.classList.add("CompletedIcon");
  topics.classList.remove("RightLessIcon");
    
}

$(document).ready(function () {
  $('#aso1').click(function () {
          $('#lesson-content').load('ASO/aso1.html');
   });
});
$(document).ready(function () {
  $('#aso2').click(function () {
          $('#lesson-content').load('ASO/aso2.html');
   });
});
$(document).ready(function () {
  $('#aso3').click(function () {
          $('#lesson-content').load('ASO/aso3.html');
   });
});
$(document).ready(function () {
  $('#aso4').click(function () {
          $('#lesson-content').load('ASO/aso4.html');
   });
});
$(document).ready(function () {
  $('#aso5').click(function () {
          $('#lesson-content').load('ASO/aso5.html');
   });
});
$(document).ready(function () {
  $('#aso6').click(function () {
          $('#lesson-content').load('ASO/aso6.html');
   });
});
$(document).ready(function () {
  $('#aso7').click(function () {
          $('#lesson-content').load('ASO/aso7.html');
   });
});
$(document).ready(function () {
  $('#aso8').click(function () {
          $('#lesson-content').load('ASO/aso8.html');
   });
});
$(document).ready(function () {
  $('#aso9').click(function () {
          $('#lesson-content').load('ASO/aso9.html');
   });
});
$(document).ready(function () {
  $('#aso10').click(function () {
          $('#lesson-content').load('ASO/aso10.html');
   });
});
$(document).ready(function () {
  $('#aso11').click(function () {
          $('#lesson-content').load('ASO/aso11.html');
   });
});
$(document).ready(function () {
  $('#aso12').click(function () {
          $('#lesson-content').load('ASO/aso12.html');
   });
});

$(document).ready(function () {
  $('#aso13').click(function () {
          $('#lesson-content').load('ASO/aso13.html');
   });
});

$(document).ready(function () {
  $('#aso14').click(function () {
          $('#lesson-content').load('ASO/aso14.html');
   });
});
$(document).ready(function () {
  $('#aso15').click(function () {
          $('#lesson-content').load('ASO/aso15.html');
   });
});
$(document).ready(function () {
  $('#aso16').click(function () {
          $('#lesson-content').load('ASO/aso16.html');
   });
});
$(document).ready(function () {
  $('#aso17').click(function () {
          $('#lesson-content').load('ASO/aso17.html');
   });
});



