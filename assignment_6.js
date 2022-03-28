function assigngrade(grade){
if(grade>=80){
  return "A";
}
else if (grade>=70 && grade<80)
{
  return "B";

}
else if (grade>=60 && grade<70)
{
  return "C";

}
else if (grade>=50 && grade<60)
{
  return "D";

}
else
{
  return "F";
}


}




$(document).ready(function(){
  

var gradearray = new Array();

  $('td').click(function() {
    var current_element = $(this);
    
    
     $('<input>', {
        
      val: current_element.text(),

        keypress: function(event) {
          if (event.key == 'Enter')
{
    (current_element.text(this.value));
}
       },
        
      
          
    
    }).appendTo(current_element.empty()).focus();
});
});
