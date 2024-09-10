    </div>
    <div class="dialog-buttons">
        <button class="dialog-button" onclick="closeDialog('picturesDialog')">Close</button>
    </div>
</div>

    <div class="dialog-box" id="cvDialog">
        <div class="dialog-title">
            <span>View CV</span>
            <span class="close-button" onclick="closeDialog('cvDialog')">×</span>
        </div>
        <div class="dialog-content">
            There is no CV. I love you.
        </div>
        <div class="dialog-buttons">
            <button class="dialog-button" onclick="showDialog('cv2Dialog')">I understand &lt;3</button>
            <button class="dialog-button" onclick="showDialog('cv2Dialog')">Ok</button>
        </div>
    </div>

    <div class="dialog-box" id="cv2Dialog">
        <div class="dialog-title">
            <span>View CV</span>
            <span class="close-button" onclick="closeDialog('cv2Dialog')">×</span>
        </div>
        <div class="dialog-content">
            Jk :) check out the READ ME on the top right
        </div>
        <div class="dialog-buttons">
            <button class="dialog-button" onclick="closeDialog('cv2Dialog')">lol silly thx</button>
        </div>
    </div>

    <div class="dialog-box" id="helpDialog">
        <div class="dialog-title">
            <span>What the heck</span>
            <span class="close-button" onclick="closeDialog('helpDialog')">×</span>
        </div>
        <div class="dialog-content">
            Welcome, I have been expecting you!<br><br>
            Click on desktop icons or use the Start menu to navigate.<br>
        </div>
        <div class="dialog-buttons">
            <button class="dialog-button" onclick="closeDialog('helpDialog')">Got it!</button>
        </div>
    </div>

    <div class="dialog-box" id="secretDialog">
        <div class="dialog-title">
            <span>Use your keyboard to reveal</span>
            <span class="close-button" onclick="closeDialog('secretDialog')">×</span>
        </div>
        <div class="dialog-content">
            ↑↑↓↓←→←→
        </div>
        <div class="dialog-buttons">
            <button class="dialog-button" onclick="closeDialog('secretDialog')">Ain't no way!</button>
        </div>
    </div>

    <div class="dialog-box" id="konamiDialog">
        <div class="dialog-title">
            <span>Secret Revealed</span>
            <span class="close-button" onclick="closeDialog('konamiDialog')">×</span>
        </div>
        <div class="dialog-content">
            There is no shortcut. Work harder.
        </div>
        <div class="dialog-buttons">
            <button class="dialog-button" onclick="closeDialog('konamiDialog')">LOCK BACK IN</button>
        </div>
    </div>

<div class="dialog-box" id="portfolioWizard">
    <div class="dialog-title">
        <span>Portfolio Installation Wizard 4.2b</span>
        <span class="close-button" onclick="closeDialog('portfolioWizard')">×</span>
    </div>
    <div class="dialog-content">
        <div id="wizardContent"></div>
    </div>
    <div class="dialog-buttons">
        <button class="dialog-button" id="backButton" onclick="wizardBack()" disabled>← Back</button>
        <button class="dialog-button" id="nextButton" onclick="wizardNext()">Next →</button>
    </div>
</div>

<div class="music-player dialog-box" id="musicPlayer">
    <div class="dialog-title">
        <span>Music Player</span>
        <span class="close-button" onclick="closeMusicPlayer()">×</span>
    </div>
    <div class="dialog-content">
        <video width="560" height="315" controls>
            <source src="https://lavender-objective-python-753.mypinata.cloud/ipfs/QmbVmAz4wQp9keCHdzjsv9dZm6X5dAuTXruETJRiQSfBiu" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>

