window.onload = function() {
    let countdownElement = document.getElementById('countdown');
    let countdown = 5;
    let hackScreen = document.getElementById('hackScreen');
    let confession = document.getElementById('confession');
    let blackScreen;

    // Add shaking effect initially
    hackScreen.classList.add('shake');

    let countdownInterval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            hackScreen.classList.remove('shake'); // Remove shaking effect

            // Hide the hack screen and show the black screen
            hackScreen.classList.add('hidden');
            
            blackScreen = document.createElement('div');
            blackScreen.id = 'blackScreen';
            blackScreen.textContent = 'SYSTEM CORRUPTED';
            document.body.appendChild(blackScreen);

            // Hide black screen and show confession after a delay
            setTimeout(function() {
                blackScreen.classList.add('hidden');
                confession.classList.remove('hidden');
                document.body.removeChild(blackScreen); // Clean up black screen

                // Add a full-page overlay to prevent interaction
                let overlay = document.createElement('div');
                overlay.id = 'overlay';
                document.body.appendChild(overlay);
            }, 2000); // Delay before revealing the confession
        }
    }, 1000);

    // Reveal confession and hide elements
    document.getElementById('revealConfession').onclick = function() {
        document.getElementById('confessionBox').classList.remove('hidden');
        document.getElementById('revealConfession').style.display = 'none'; // Hide the button
        document.getElementById('surpriseTitle').style.display = 'none'; // Hide the "Surprise!" title
        document.getElementById('prankMessage').style.display = 'none'; // Hide the prank message
    };
};
