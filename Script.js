"use strict"
$(document).ready(() =>{
    $("#FAQs h2").click(evt => {
        //Catches the events to unhide the div tag
        //current target points to whichever one you clicked.
        const target = evt.currentTarget;
        if ($(target).next().attr("class") != "hidden")
        {
            $(target).next().slideUp(1000);
            $(target).next().toggleClass("hidden");
        }
        else
        {
            $(target).next().slideDown(1000);
            $(target).next().toggleClass("hidden");
        }
    });
});
