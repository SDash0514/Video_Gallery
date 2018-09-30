/*
var i,j,k,l;
function valid(){
     i=$("#1").val();
    console.log(i);
       j=$("#2").val();
       l=j.substring(0,j.lastIndexOf('@'));
      console.log(l);
       k=$("#4").val();
      console.log(k);
      var ans1=k.includes(i);
      console.log(ans1);
      var ans2=k.includes(l);
      console.log(ans2);
      if(ans1||ans2){
        alert("Password should not have the same string of characters as used in username or email-id");
              return false;
      }
      else{
        return true;
      }
}*/

var i,j,k,l;
$(document).ready(function(){
  $("#1").keyup(function(){
    i=$("#1").val();
   console.log(i);
 });
 $("#2").keyup(function(){
   j=$("#2").val();
   l=j.substring(0,j.lastIndexOf('@'));
  console.log(l);
});
$("#4").keyup(function(){
  k=$("#4").val();
  console.log(k);
  var ans1=k.includes(i);
  console.log(ans1);
  var ans2=k.includes(l);
  console.log(ans2);
  if(ans1||ans2){
   alert("Password should not have the same string of characters as used in username or email-id");
   window.history.back();
  }
});



})

