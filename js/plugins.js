// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//Kontaktformular
$(document).ready(function(){
$("#submit").click(function(){
	var name = $("#name").val();
  var oname = $("#oname").val();
	var email = $("#email").val();
	var message = $("#message").val();
	var contact = $("#contact").val();

	$("#returnmessage").empty(); //To empty previous error/success message.
//checking for blank fields
if(name==''||oname==''||email==''||contact=='')
{
   alert("Bitte füllen Sie alle Pflichtfelder aus!");
}
else{
// Returns successful data submission message when the entered information is stored in database.
$.post("contact_form.php",{ name1: name, oname1: oname, email1: email, message1:message, contact1: contact},
   function(data) {
                $("#returnmessage").append(data);//Append returned message to message paragraph
					if(data=="Die Anfrage wurde Versendet, wir melden uns in Kürze!"){
						$("#form")[0].reset();//To reset form fields on success
					}
			});
         }

});
});
