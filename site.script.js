document.addEventListener("DOMContentLoaded", function() {
   
    function showForm() {
        alert("Thank you for your interest! Please fill out the form on the next page.");
    }
    document.getElementById("showFormBtn").addEventListener("click", showForm);
    document.getElementById("greenButton").addEventListener("click", function() {
        var video = document.getElementById("instructionVideo");
        video.style.display = "block";
        video.play();
    });
});
