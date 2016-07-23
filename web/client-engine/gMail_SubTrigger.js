/**
 * Created by Fenix on 23/07/16.
 */
function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("email").value;

    // If x is Not a Number or less than one or greater than 10
    if (x == null || x == "" ) {
        alert("Input not valid");
    } else {

        var loginDataSend =
        {
            "sender:": email,
            "subject": "null"
        };
        $.ajax({
            method: "post",
            url: "/TempServlet",
            data: loginDataSend,
            dataType: "json",
            success: console.log("la post ha avuto successo")
        });
        location.href = "#SubGMailAction";
    }
    //   document.getElementById("demo").innerHTML = text;
}