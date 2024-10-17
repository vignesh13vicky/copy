function myFunction() {  
    let Mark = document.getElementById("Mark").value;
    let class1 = "";
    if(Mark<1)
    {
        alert("Enter the valid number above the number=1")
    }
    else if(100<Mark)
    {
        alert("Enter the valid number below the number=100")
       
    }
    else{
        class1 = (isNaN(Mark)) ? "Invalid input" :
        (Mark < 35) ? "Fail" :
        (Mark < 40) ? "Just Pass" :
        (Mark < 60) ? "Third Class" :
        (Mark < 80) ? "Second Class" :
        (Mark < 90) ? "First Class" :
        "First Class with Distinction";
    
    document.getElementById("demo").innerHTML = class1;
    }
}
