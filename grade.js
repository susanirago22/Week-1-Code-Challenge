//write function here--->//

function grade(marks){
 
//TODO:calculate student's grade

    if(marks > 79){
        
        //return student's grade

     return "A"; 

    }
    // TODO:calculate student's grade

    else if(marks>=60 && marks<=79) {

        //return student's grade

        return "B";

    }
    // TODO:calculate student's grade
    else if(marks>=49 && marks<=59){

        //return student's grade

        return "C";
    }
    //TODO:calculate student's grade

    else if(marks>=40 && marks<=49){

        //return student's grade

        return marks="D";

    }
    //TODO:calculate student's grade

    else if(marks<40){

        //return student's grade

        return marks="E";
    }

}
console.log(marks(79))