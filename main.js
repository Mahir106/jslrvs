name_of_the_people_array=[];
function submit(){
    var display_student_array=[];
    for (var j=1;j<=2;j++){
        var name_of_the_people =document.getElementById("name_"+j).value;
        console.log(name_of_the_people);
        name_of_the_people_array.push(name_of_the_people)
}
console.log(name_of_the_student_array);
var length_of_the_student_array= name_of_the_student_array.length;
console.log(length_of_the_student_array);
for(var k=0;k<length_of_the_student_array;k++){
    display_student_array.push("<h4>Name-"+ name_of_the_student_array[k]+"</h4>");
    console.log(display_student_array);
}
document.getElementById("names").innerHTML=display_student_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

  
