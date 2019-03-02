First add the following JS:

    In /app/assets/javascripts/ create the file hide.js
    Create the function hideWhenClicked that hides the element that was clicked.
        MAKE SURE TO BIND #hide-this
    Add hide.js to your JS manifest.

Next add the following CSS:

    In /app/assets/stylesheets/ create the file links.css
    Create a CSS class called .error that changes the color of the text to red. Add this CSS class to the link on the root page.
    Create another CSS class called .cool-background that makes the background grey. Add this CSS class to the <body> tag on the application layout.
    Add links.css to your CSS manifest.

	<button onclick="myFunction()">Click Me</button>

   <div id="myDIV">
     This is my DIV element.
   </div>
   Step 2) Add JavaScript:
   Example
   function myFunction() {
     var x = document.getElementById("myDIV");
     if (x.style.display === "none") {
       x.style.display = "block";
     } else {
       x.style.display = "none";
     }
   }
