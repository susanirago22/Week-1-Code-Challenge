
 //write function here-->//
function grades (marks){
    const grades = document.getElementById('input').value;

 const result = document.getElementById('output');
//Grade
    if(marks > 79){
     result.innerHTML ="A"; 

    }
    //Grade
    else if(marks>=60 && marks<=79) {
        result.innerHTML="B";

    }
    //Grade
    else if(marks>=49 && marks<=59){
        result.innerHTML="C";
    }
    //Grade
    else if(marks>=40 && marks<=49){
        result.innerHTML="D";

    }
    //Grade 
    else if(marks<40){
        result.innerHTML="E";
    }

}
console.log(marks(79))