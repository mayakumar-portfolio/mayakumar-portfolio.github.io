
// colour changing navigation bar to white


var top1 = $('#title1').offset().top;
var top2 = $('#content1').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1) {
    $('#artwork').css('background-color', 'white');
  } 
  if (scrollPos <= top2) {
    $('#artwork').css('background-color', '#9ECBE0');
  } 

  if (scrollPos >= top1) {
      $('#about').css('background-color', 'white');
    } 
  if (scrollPos <= top2) {
      $('#about').css('background-color', '#9ECBE0');
    } 

  if (scrollPos >= top1) {
      $('#contact').css('background-color', 'white');
    } 
  if (scrollPos <= top2) {
      $('#contact').css('background-color', '#9ECBE0');
    } 

  if (scrollPos >= top1) {
      $('#archive').css('background-color', 'white');
    } 
  if (scrollPos <= top2) {
      $('#archive').css('background-color', '#9ECBE0');
    } 

  if (scrollPos >= top1) {
      $('#white').css('background-color', 'white');
    } 
  if (scrollPos <= top2) {
      $('#white').css('background-color', '#9ECBE0');
    } 
  
});


//mobile menu

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


// change shape of popup menu icon and X for mobile devices