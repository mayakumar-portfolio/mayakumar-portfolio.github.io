
// colour changing navigation bar to white


var top1 = $('#title').offset().top;
var top2 = $('#content').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1) {
    $('#artwork').css('background-color', 'white');
  } 
  if (scrollPos <= top2) {
    $('#artwork').css('background-color', '#91B28C');
  } 

  if (scrollPos >= top1) {
      $('#about').css('background-color', 'white');
    } 
  if (scrollPos <= top2) {
      $('#about').css('background-color', '#F9A45C');
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
      $('#archive').css('background-color', '#F98759');
    } 
  
});

//text hover


//hover on menu box


  
    //alert('Button 1 was clicked') 





