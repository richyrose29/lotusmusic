console.log("hey there im testing this for the job");

//Nav bar 

  function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
  document.getElementById("mySidenav").style.width = "0"; } 

  $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 100, function(){
                 
            window.location.hash = hash;
          });
        } // End if
      });
    });
 
 
 //Volume Slider

  var slider = document.getElementById("volumeSlider");
  var output = document.getElementById("demo");
 
 
 //Audio
 //This gets the myAudio from the reference in your html file

  let myAudio = document.getElementById("myAudio");  
  let isPlaying = false;


 //Volume Slider output

    output.innerHTML = slider.value;
  
    slider.oninput = function() {
    output.innerHTML = this.value;
    myAudio.volume=volumeSlider.value / 100;    
  
  }
  
  
  //Audio Buttons 

  function togglePlay() {
   
      myAudio.play();     
   
    }
  

  function togglePause() {
    if (isPlaying) {
      myAudio.pause();
    } 
  } 



  function toggleStop() {
    if (isPlaying) {
      myAudio.pause();
      myAudio.currentTime=0;
    }
  }

  
  //Play, pause, stop,disk animation functions

  myAudio.onplaying = function() {
    isPlaying = true;
    disk.style.animation = "spinny 3s linear infinite";
  };
  myAudio.onpause = function() {
    isPlaying = false;
    disk.style.animation = "";
  };
  
  myAudio.onstop = function() {
    isPlaying = false;
    disk.style.animation = "";
  };



  //Arrow 

  $( window ).on( "load", function() {
    $(".pointer").fadeIn(1000);
});




































    
    




    