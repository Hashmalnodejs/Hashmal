var counter = 4;
var intervalId = null;

var currentUrl = window.location.href;
var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};
var url = getLocation(currentUrl);
var linkNav = $('.navbar-nav a').attr('href');

var linkNav = $('.navbar-nav a')
for (var i = 0; i < linkNav.length; i++) {
    if(url.pathname == linkNav[i].pathname){
        $(linkNav[i]).parent().addClass('active')
    }
}


function action()
{
    clearInterval(intervalId);
    setTimeout(function(){
        window.location.href = '/home'
    }, 400);
}
function bip()
{
    document.getElementById("bip").innerHTML = counter - 1;
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


if ($('#select_currency').length > 0) {
    $("#select_currency").change((event) => {
        $("#form_currency").submit()
    })
}
jQuery(function($){
    $("#demarrer").click(function(){
        start();
    });
});
