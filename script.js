var allowYesButtonClick = true;

function allowClick() {
    if (allowYesButtonClick) {
        allowYesButtonClick = false;
        
        // Add a class to the body for a transition effect, if needed
        document.body.classList.add('transitioning');

        // Redirect to the new date_page.html after a delay
        setTimeout(function () {
            window.location.href = "date_page.html";
        }, 500); // 500ms delay before redirecting
    }
}

// Start playing the audio when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    startAudio();
});

function startAudio() {
    var audio = document.getElementById("backgroundAudio");

    if (audio) {
        audio.addEventListener('canplaythrough', function() {
            audio.muted = false;
            audio.volume = 1; // Adjust the volume as needed

            // Play the audio
            audio.play().catch(function(error) {
                console.error("Error playing audio:", error);
            });
        });

        audio.addEventListener('error', function(error) {
            console.error("Audio error:", error);
        });
    } else {
        console.error("Audio element not found");
    }
}
