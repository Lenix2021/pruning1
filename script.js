var  message = () => alert("Thank you for signing up");


function func2()
{
    setTimeout(message,2000);
}


function employee()
{
    var eid= document.getElementById("eid").value;
    var check=/[DE]253[10-99]/

    if ((check.test(eid))) {
        alert("valid id")
       
    }
    else
    {
        alert("invalid id")
    }

}