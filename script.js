let texted =  Array(
    "Greetings! Welcome to my website.", 
    "I am a Software Developer.",
    "Feel free to explore my passion!",

    );
    let textSpeed = 100; // time delay of print out
    let textStart = 0; // start printing array at this posision
    let txtLnth = texted[0].length; // the length of the text array
    let scrollUp = 20; // start scrolling up at this many lines
     
    let textPos = 0; // initialise text position
    let conText = ''; // initialise contents variable
    let rows; // initialise current row
     
    function typewriter()
    {
        conText =  ' ';
     rows = Math.max(0, textStart-scrollUp);
     let destination = document.getElementById("typedOut");
     
     while ( rows < textStart ) {
        conText += texted[rows++] + '<br />';
     }
     destination.innerHTML = conText + texted[textStart].substring(0, textPos) + "_";
     if ( textPos++ == txtLnth ) {
        textPos = 0;
      textStart++;
      if ( textStart != texted.length ) {
        txtLnth = texted[textStart].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", textSpeed);
     }
    }
    typewriter();


    //oozing with love