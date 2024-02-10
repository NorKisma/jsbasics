$(document).ready(function() {
    const stateSelector = $("#stateSelector");
    const flagDisplay = $("#flagDisplay");

    const stateFlags = {
        california: "linear-gradient(45deg, #FFD100, #00ADEF)",
        texas: "#00ADEF"
    };

    stateSelector.on("change", function() {
        const selectedState = stateSelector.val();

        if (selectedState !== "default") {
            const selectedColor = stateFlags[selectedState];
            displayFlag(selectedColor);
        } else {
            clearFlagDisplay();
        }
    });

    function displayFlag(color) {
        flagDisplay.css("background-color", color);
    }

    function clearFlagDisplay() {
        flagDisplay.css("background-color", "");
    }
});
