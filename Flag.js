document.addEventListener("DOMContentLoaded", function () {
    const stateSelector = document.getElementById("stateSelector");
    const flagDisplay = document.getElementById("flagDisplay");

    
    const stateFlags = {
        california: "linear-gradient(45deg, #FFD100, #00ADEF)",
        texas: "#00ADEF",
     
    };

   
    stateSelector.addEventListener("change", function () {
        const selectedState = stateSelector.value;

      
        if (selectedState !== "default") {
            const selectedColor = stateFlags[selectedState];
            displayFlag(selectedColor);
        } else {
        
            clearFlagDisplay();
        }
    });

    function displayFlag(color) {
       
        flagDisplay.style.backgroundColor = color;
    }

    function clearFlagDisplay() {
      
        flagDisplay.style.backgroundColor = "";
    }
});
