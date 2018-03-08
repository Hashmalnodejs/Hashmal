var counter = 3;
var intervalId = null;

function action()
{
    clearInterval(intervalId);
    setTimeout(function(){
        window.location.href = '/home'
    }, 400);
}
function bip()
{
    document.getElementById("bip").innerHTML = counter;
    $('#bip').show();
    $('#bip').addClass('animated bounceIn');
    counter--;
}

function start()
{
    $('#demarrer').hide();
    intervalId = setInterval(bip, 1000);
    setTimeout(action, counter * 1000);
}

document.getElementById("select_currency").addEventListener("change", function( event ) {
  document.getElementById("form_currency").submit()
}, false);

jQuery(function($){
    $("#demarrer").click(function(){
        start();
    });
});
