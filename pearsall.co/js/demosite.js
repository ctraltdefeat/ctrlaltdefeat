/*External JS file for demosite */

$(document).ready(function(){
    $("#workPlayBtn").click(function(){
        $("#photoOne").toggleClass("play");
        $("#photoTwo").toggleClass("play");
        $("#photoThree").toggleClass("play");
        $(".informationBox").toggleClass("play");
        $("#blurbTwo").toggleClass("play");
        $("#blurbThree").toggleClass("play");
        $("body").toggleClass("play");
        $("#workPlayBtn").html($('#workPlayBtn').text() == 'Work Mode' ? 'Play Mode' : 'Work Mode');
        
        $("#blurbThree").html($('#blurbThree').text() == 'Technologist' ? 'Adventurer' : 'Technologist');
    });
});