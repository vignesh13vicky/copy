function myfun(x){
    if(x.length>1)
    {
        document.getElementById("input").value=""
    }
    if(document.getElementById("input").value==0){
        document.getElementById("input").value=""
    document.getElementById("input").value=x
    }
    else{
        document.getElementById("input").value+=x
    }
}
function clean() {
    document.getElementById("input").value = 0;
}
function sol(){
    var x= document.getElementById("input").value
    var y = eval(x);
    document.getElementById("input").value = y;
    
}