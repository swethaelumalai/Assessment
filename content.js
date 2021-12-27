var values =[];        
        function check(){
            var name = document.getElementById('name').value;
            var c=0;
            var q1= document.Quiz.Question1.value;
            var q2= document.Quiz.Question2.value;
            var q3= document.Quiz.Question3.value;
            var q4= document.Quiz.Question4.value;
            var q5= document.Quiz.Question5.value;
            if(q1 == ""){
                alert("PLEASE ATTEND ALL THE QUESTION")
            }else{
            if(q1=="Charles Babage") {c++}
            if(q2=="Washington") {c++}
            if(q3=="Archie") {c++}
            if(q4=="Prolog") {c++}
            if(q5=="Apple") {c++}
            alert(c+ " " +"out of 5");
            values.push(q1);
            values.push(q2);
            values.push(q3);
            values.push(q4);
            values.push(q5);

        }
        values.push(name);
        localStorage.setItem('Quiz', JSON.stringify(values));

console.log(localStorage.getItem(Quiz));
    }