function StageFlag() {
    var selectedStage = document.getElementById("Stage").value;
    var flagImage = document.getElementById("flagimage");
    var flags = flagImage.getElementsByClassName("flag");
    for (var i = 0; i < flags.length; i++) {
        flags[i].style.display = "none";
    }

    var selectedFlag = document.querySelector("[data-flag='" + selectedStage + "Flag']");
    if (selectedFlag) {
        selectedFlag.style.display = "block";
    }
}
