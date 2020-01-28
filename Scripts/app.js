/*
    Student Name  : Harmanpreet Kaur
    StudentID     : 100734511
    Date Completed: 28-01-2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
let replaceButton;
let replaceText;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    
    
   
    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {

       
        // part A
       replaceButton = document.getElementById("largeButton");
       
       replaceButton.innerHTML="Learn More";
       //part B

       var h3 = document.createElement('h3');
       var content = document.createTextNode('Harmanpreet Kaur 100734511');
       h3.appendChild(content);
       document.body.appendChild(h3);
   
       conatctUs.insertBefore(content,h3);

       // part C 
       
       replaceText = document.getElementById("This simple site is the template you will use for your test");
       
       replaceText.innerHTML="javascript is a prototype-based language, and every object in javaScript has a hidden internal property called Prototype that can be used to extend object properties and methods";

   
       
        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

