$(document).ready(function(){
    $("#submit").click(function(ev){
    ev.preventDefault()
    });
});
$(".Submit").click(function(){
var pnm = $("#numb").val();
  $('#numb').val('');
if (pnm.length == 0) {
            alert('Enter a section!');
        }
  else{
  $(".text").append('<div class="card" data-name='+pnm+'><h1>'+pnm+'</h1><i class="fa-solid fa-trash"></i><br><input type="text" name="task"><button class="btn" type="submit" >save</button></div>');

   }
});
$('.text').on('click', '.btn', function () {
  var pname = $(this).closest('.card').find("input[name=task]").val();
 $(this).closest('.card').find("input[name=task]").val('');
  if (pname.length === 0) {
            alert('Enter a task!');
       }
  else{
  $(this).closest('.card').append('<div class="card1" data-name="'+pname+'">'+pname+' <i class="fa-regular fa-square"></i><i class="fa-regular fa-circle-xmark"></i></div>');
  }
  });

$('.text').on('click', '.fa-trash', function () {
    $(this).closest('.card').remove();

    });
$('.text').on('click', '.fa-circle-xmark', function () {
    $(this).closest('.card1').remove();

    });
$('.text').on('click', '.fa-square', function () {
    $(this).closest('.card1').wrap("<strike>");
    $(this).remove();
    });