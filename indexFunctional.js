var courses = document.querySelectorAll(".RightLessIcon");

for (let index = 0; index < courses.length; index++) {
  courses[index].addEventListener('click', function (event) {
    coursSelect(index);
  });
  
}

function coursSelect(number){
    switch(number)
    {
     case 0: document.location = 'aso.html'; break;
     case 1: document.location = 'sk.html'; break;
     case 2: document.location = 'Malware/index.html'; break;
 // case 3: document.location = 'Malware/MalwareTest/index.html'; break;
     case 4: document.location = 'bd.html'; break;
    }
   }

   document.addEventListener('keypress', (event)=>{

    if(event.key === "Enter" && document.activeElement == courses[0]) {
      coursSelect(0);
    }
    if(event.key === "Enter" && document.activeElement == courses[1]) {
        coursSelect(1);
    }
    if(event.key === "Enter" && document.activeElement == courses[2]) {
        coursSelect(2);
    }
    if(event.key === "Enter" && document.activeElement == courses[3]) {
        coursSelect(3);
    }
      
      
  });
