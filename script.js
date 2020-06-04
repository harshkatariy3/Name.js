
    document.getElementById("message").addEventListener("keyup",function(e){
        if(e.keyCode===13){
        Submit();
        }
    })
    function Submit(){
    var Message=document.getElementById("message").value;
    if(Message==""){
        var ele=document.getElementById("last").innerHTML="write Something? &#x1F621";
    }
    else{
        var ele=document.getElementById("last").innerHTML=Message+" &#x1F496";
    }
}