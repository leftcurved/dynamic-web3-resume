<script>

function showReadme() {
    document.getElementById('readme-dialog').style.display = 'block';
}

function closeReadme() {
    document.getElementById('readme-dialog').style.display = 'none';
}

function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = element.querySelector('.dialog-title');
    
    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function showBinContents() {
    document.getElementById('binContentsDialog').style.display = 'block';
}

function closeBinContents() {
    document.getElementById('binContentsDialog').style.display = 'none';
}

function openFile(fileIndex) {
    closeBinContents(); // Close the bin contents dialog

    // Simulate opening the file
    const fileWindow = window.open('', fileIndex, 'width=800,height=600');
    fileWindow.document.write('<html><head><title>' + fileIndex + '</title></head><body>');
    fileWindow.document.write('<h1>Loading ' + fileIndex + '...</h1>');
    fileWindow.document.write('</body></html>');

    // Show the error dialog after 5 seconds
    setTimeout(() => {
        fileWindow.close(); // Close the file window
        showErrorDialog();
    }, 5000);
}

function showErrorDialog() {
    const errorPopup = document.createElement('div');
    errorPopup.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #C0C0C0; border: 2px outset #ffffff; padding: 20px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); z-index: 1000;">
            <div style="background-color: #000080; color: white; padding: 3px 5px; font-weight: bold; margin-bottom: 10px;">
                System Error
            </div>
            <p style="color: red; font-weight: bold; font-size: 24px;">FATAL ERROR - RUGGED PROJECTS</p>
            <button onclick="this.parentElement.parentElement.remove();" style="margin-top: 10px;">OK</button>
        </div>
    `;
    document.body.appendChild(errorPopup);
}

function openFile(fileIndex) {
    closeBinContents(); // Close the bin contents dialog

    // Simulate opening the file
    const fileWindow = window.open('', fileIndex, 'width=800,height=600');
    fileWindow.document.write('<html><head><title>' + fileIndex + '</title></head><body>');
    fileWindow.document.write('<h1>Loading ' + fileIndex + '...</h1>');
    fileWindow.document.write('</body></html>');

    // Show the error dialog after 5 seconds
    setTimeout(() => {
        fileWindow.close(); // Close the file window
        showErrorDialog();
    }, 5000);
}

function showErrorDialog() {
    const errorPopup = document.getElementById('errorPopup');
    if (errorPopup) {
        errorPopup.style.display = 'block';
    } else {
        // If the error popup doesn't exist, create it
        const newErrorPopup = document.createElement('div');
        newErrorPopup.id = 'errorPopup';
        newErrorPopup.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #C0C0C0; border: 2px outset #ffffff; padding: 20px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); z-index: 1000;">
                <div style="background-color: #000080; color: white; padding: 3px 5px; font-weight: bold; margin-bottom: 10px;">
                    System Error
                </div>
                <p style="color: red; font-weight: bold; font-size: 24px;">RUGGED PROJECT</p>
                <button onclick="this.parentElement.parentElement.style.display='none';" style="margin-top: 10px;">OK</button>
            </div>
        `;
        document.body.appendChild(newErrorPopup);
    }
}

// Make the Bin contents dialog draggable
document.addEventListener('DOMContentLoaded', (event) => {
    makeDialogDraggable(document.getElementById('binContentsDialog'));
}); // Fixed the missing closing parenthesis
    function toggleStartMenu() {
        const menu = document.getElementById('startMenu');
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }

    function showDialog(id) {
        closeAllDialogs();
        document.getElementById(id).style.display = 'block';
    }

    function closeDialog(id) {
        document.getElementById(id).style.display = 'none';
    }

    function closeAllDialogs() {
        const dialogs = document.querySelectorAll('.dialog-box');
        dialogs.forEach(dialog => dialog.style.display = 'none');
    }

    function shutdown() {
        document.body.innerHTML = '<div style="background-color: #000080; color: #ff00ff; font-size: 24px; padding: 100px; text-align: center; height: 100vh;">Uh oh.<br>...<br>Thanks for playing!</div>';
    }

function toggleMusic() {
    const musicPlayer = document.getElementById('musicPlayer');
    const video = musicPlayer.querySelector('video');
    
    if (musicPlayer.style.display === 'none') {
        musicPlayer.style.display = 'block';
        video.play();
        makeDraggable(musicPlayer);
    } else {
        closeMusicPlayer();
    }
}

function closeMusicPlayer() {
    const musicPlayer = document.getElementById('musicPlayer');
    const video = musicPlayer.querySelector('video');
    musicPlayer.style.display = 'none';
    video.pause();
    video.currentTime = 0;
}

// Make sure this function is defined in your script
function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = element.querySelector('.dialog-title');
    
    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

    // Close start menu when clicking outside
    document.addEventListener('click', function(event) {
        const startMenu = document.getElementById('startMenu');
        const startButton = document.querySelector('.start-button');
        if (!startMenu.contains(event.target) && !startButton.contains(event.target)) {
            startMenu.style.display = 'none';
        }
});

    // Draggable dialogs
    const dialogs = document.querySelectorAll('.dialog-box');
    dialogs.forEach(makeDialogDraggable);

    function makeDialogDraggable(dialog) {
        const titleBar = dialog.querySelector('.dialog-title');
        let isDragging = false;
        let startX, startY, startLeft, startTop;

        titleBar.addEventListener('mousedown', startDragging);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDragging);

        function startDragging(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            startLeft = parseInt(window.getComputedStyle(dialog).left);
            startTop = parseInt(window.getComputedStyle(dialog).top);
            dialog.style.zIndex = 1000; // Bring to front
        }

        function drag(e) {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            dialog.style.left = `${startLeft + dx}px`;
            dialog.style.top = `${startTop + dy}px`;
        }

        function stopDragging() {
            isDragging = false;
        }
    }

    // Easter egg: Konami Code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        showDialog('konamiDialog');
    }

    // Portfolio Wizard
    let wizardStep = 0;
    const wizardSteps = [
        {
            title: "Welcome to the Portfolio Installation Wizzz",
            content: "This wizard will guide you through my professional profile. Click 'Next' to begin."
        },
        {
            title: "Step 1: Personal Information",
            content: "Name: Julien De Buck<br>Role: Marketing Professional<br>Location: APAC/Remote<br>Passion: Innovating at the intersection of marketing and technology"
        },
        {
            title: "Step 2: Skills Installation",
            content: "Installing skills...<br><progress value='0' max='100' id='skillsProgress'></progress><br><span id='skillText'></span>"
        },
        {
    title: "Step 3: Built-up Skills",
    content: "• On-Chain Product Growth – Led strategy and execution for blockchain-based products.<br><br><br>" +
             "• Community-Driven Campaigns – Built and engaged loyal Web3 communities.<br><br><br>" +
             "• Cross-Platform Launches – Managed launches across CEX, DEX, and on-chain environments.<br><br><br>" +
             "Click 'Next' to collaborate."
},

        {
            title: "Step 4: Contact Information",
            content: "Email: juliendebuck@gmail.com<br>LinkedIn: linkedin.com/in/juliendebuck<br>GitHub: github.com/leftcurved<br>ENS: julien.debuck.eth"
        },
        {
            title: "Installation Complete",
            content: "When do we start?"
        }
    ];

    function startPortfolioWizard() {
        wizardStep = 0;
        updateWizardContent();
        showDialog('portfolioWizard');
    }

    function updateWizardContent() {
        const content = document.getElementById('wizardContent');
        content.innerHTML = `<h2>${wizardSteps[wizardStep].title}</h2><p>${wizardSteps[wizardStep].content}</p>`;
        document.getElementById('backButton').disabled = (wizardStep === 0);
        document.getElementById('nextButton').innerHTML = (wizardStep === wizardSteps.length - 1) ? 'Finish' : 'Next →';
        
        if (wizardStep === 2) {
            simulateSkillsInstallation();
        }
    }

    function wizardNext() {
        if (wizardStep < wizardSteps.length - 1) {
            wizardStep++;
            updateWizardContent();
        } else {
            closeDialog('portfolioWizard');
        }
    }

    function wizardBack() {
        if (wizardStep > 0) {
            wizardStep--;
            updateWizardContent();
        }
    }

    function simulateSkillsInstallation() {
        const skills = ['Marketing Strategy', 'Content Creation', 'Social Media Management', 'Data Analysis', 'Blockchain Marketing'];
        let progress = 0;
        const progressBar = document.getElementById('skillsProgress');
        const skillText = document.getElementById('skillText');
        
        const installInterval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(installInterval);
                skillText.innerHTML = "All skills installed successfully!";
            } else {
                progress += 20;
                progressBar.value = progress;
                skillText.innerHTML = `Installing: ${skills[Math.floor(progress / 20) - 1]}`;
            }
        }, 1000);
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', (event) => {
        showDialog('helpDialog');
        // Make sure dialogs are positioned correctly
        document.querySelectorAll('.dialog-box').forEach(dialog => {
            dialog.style.position = 'fixed';
            dialog.style.left = '40%';
            dialog.style.top = '30%';
        });
    });

// Add Portfolio Wizard icon to desktop
const desktopIcons = document.querySelector('.desktop');
const wizardIcon = document.createElement('a');
wizardIcon.href = "#";
wizardIcon.className = "icon";
wizardIcon.onclick = startPortfolioWizard;
wizardIcon.innerHTML = `
    <img src="https://win98icons.alexmeub.com/icons/png/installer-0.png" alt="Portfolio">
    <span>Install Portfolio</span>
`;
desktopIcons.appendChild(wizardIcon);

    // ContentScan functionality
    const allTransactions = [
    {
    "hash": "0xddd2...dd6",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "468 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-bigtime-drift-and-portal-starts-june-20"
  },
  {
    "hash": "0xaf88...d6d",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "440 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-playdapp-pda-starts-june-6"
  },
  {
    "hash": "0xfee4...0fc",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "412 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-pendle-starts-on-june-6"
  },
  {
    "hash": "0xf931...d3b",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "428 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-tremp-tnsr-zeus-and-more-starts-now"
  },
  {
    "hash": "0x6602...e1c",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "474 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-aevo-arkm-ena-and-more-available-now"
  },
  {
    "hash": "0x11ae...e5f",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "413 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-beam-beam-and-ondo-ondo-starts-now-in-canada"
  },
  {
    "hash": "0xd3af...ea7",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "401 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-jup-w-wif-and-more-starts-now-in-the-united-kingdom"
  },
  {
    "hash": "0x6e5b...c10",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "458 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-beam-beam-starts-april-11-deposit-now"
  },
  {
    "hash": "0x606c...837",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "461 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-ondo-ondo-starts-april-11-deposit-now"
  },
  {
    "hash": "0xe793...16e",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "420 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-wormhole-w-starts-april-3-deposit-now"
  },
  {
    "hash": "0xa297...e09",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "457 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/expanded-margin-pairs-available-for-rndr-and-fet"
  },
  {
    "hash": "0x685c...048",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "505 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-helium-hnt-starts-march-14-deposit-now"
  },
  {
    "hash": "0xd10f...e5c",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "469 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-dymension-dym-and-jupiter-jup-starts-now-in-canada"
  },
  {
    "hash": "0x0fe5...51e",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "463 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-starknet-token-strk-starts-now-starknet-provisions-program"
  },
  {
    "hash": "0x939d...a0a",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "488 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/new-otc-rfq-pairs-available-for-apt-arb-inj-and-tia"
  },
  {
    "hash": "0x47da...25a",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "496 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-polygon-ecosystem-token-pol-starts-now-in-canada"
  },
  {
    "hash": "0x1d64...9fd",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "484 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-dymension-dym-starts-now"
  },
  {
    "hash": "0xc158...b62",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "439 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/new-otc-portal-pairs-available-for-eth-inj-and-sol"
  },
  {
    "hash": "0xcf84...9bd",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "409 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-dogwifhat-wif-starts-february-1"
  },
  {
    "hash": "0xf83d...139",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "414 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-jupiter-jup-starts-january-31"
  },
  {
    "hash": "0xe40c...67d",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "507 words - click here to read",
    "link": "https://blog.kraken.com/product/expanded-margin-pairs-available-for-near-and-sei"
  },
  {
    "hash": "0x3b9a...484",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "450 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-bonk-bonk-starts-now"
  },
  {
    "hash": "0x911e...bff",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "502 words - click here to read",
    "link": "https://blog.kraken.com/product/expanded-margin-pairs-available-for-inj-op-snx-and-tia"
  },
  {
    "hash": "0x973c...62a",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "468 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-polygon-ecosystem-token-pol-starts-now"
  },
  {
    "hash": "0xdec0...7d0",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "458 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-jito-jto-starts-now"
  },
  {
    "hash": "0xcd2f...146",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "457 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/usdt-deposits-and-withdrawals-now-available-on-optimism"
  },
  {
    "hash": "0x9e6f...a7d",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "416 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/usdc-deposits-and-withdrawals-now-available-on-optimism"
  },
  {
    "hash": "0x7091...8e3",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "443 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-pyth-network-pyth-starts-now"
  },
  {
    "hash": "0x6b45...86f",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "420 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-celestia-tia-starts-now"
  },
  {
    "hash": "0xefcb...f54",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "437 words - click here to read",
    "link": "https://blog.kraken.com/product/eth-and-op-deposits-and-withdrawals-now-available-on-optimism"
  },
  {
    "hash": "0x2dc9...a9c",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "499 words - click here to read",
    "link": "https://blog.kraken.com/news/deposits-and-withdrawals-for-genshiro-gens-picasso-pica-and-origintrail-otp-start-now"
  },
  {
    "hash": "0x59a8...826",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "461 words - click here to read",
    "link": "https://blog.kraken.com/news/trading-for-paypal-usd-pyusd-starts-august-21-deposit-now"
  },
  {
    "hash": "0xb6d7...259",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "493 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-sei-sei-starts-august-15-deposit-now"
  },
  {
    "hash": "0xf9c7...45a",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "426 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/brick-and-moon-trading-starts-today-on-spot-and-futures"
  },
  {
    "hash": "0x8503...c21",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "430 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-ripple-xrp-starts-now-for-the-usa"
  },
  {
    "hash": "0x96ed...a2a",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "507 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/deposits-and-withdrawals-for-aventus-avt-starts-now"
  },
  {
    "hash": "0x7979...f31",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "400 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-trueusd-tusd-starts-june-29-deposit-now"
  },
  {
    "hash": "0x6380...e60",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "509 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-pepe-pepe-starts-now"
  },
  {
    "hash": "0x8d16...1ab",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "495 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-limewire-token-lmwr-starts-may-16-deposit-now"
  },
  {
    "hash": "0xb970...680",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "466 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-sui-sui-starts-now"
  },
  {
    "hash": "0xe862...f63",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "419 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-euro-tether-eurt-starts-may-2-deposit-now"
  },
  {
    "hash": "0x3904...31d",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "444 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-arbitrum-arb-starts-now-for-usa"
  },
  {
    "hash": "0x6afe...c22",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "447 words - click here to read",
    "link": "https://blog.kraken.com/product/expanded-margin-pairs-available-for-arb"
  },
  {
    "hash": "0x47f3...ff6",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "435 words - click here to read",
    "link": "https://blog.kraken.com/product/eth-deposits-and-withdrawals-available-on-the-polygon-network"
  },
  {
    "hash": "0x1b30...885",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "437 words - click here to read",
    "link": "https://blog.kraken.com/product/dai-usdc-and-usdt-deposits-and-withdrawals-available-on-the-arbitrum-network"
  },
  {
    "hash": "0x18ba...b0f",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "414 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-arbitrum-arb-starts-march-23-deposit-now"
  },
  {
    "hash": "0xc71a...5e6",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "450 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-gmx-gmx-starts-march-21-deposit-now"
  },
  {
    "hash": "0x5b4b...f06",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "438 words - click here to read",
    "link": "https://blog.kraken.com/product/usdt-deposits-and-withdrawals-available-via-the-solana-network"
  },
  {
    "hash": "0x375f...af0",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "466 words - click here to read",
    "link": "https://blog.kraken.com/product/expanded-margin-pairs-available-for-ftm-ldo-ocean-and-paxg"
  },
  {
    "hash": "0xaad1...875",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "497 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-aptos-apt-starts-now-for-usa-and-ca"
  },
  {
    "hash": "0x4fb1...ec2",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "470 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-blur-blur-starts-now"
  },
  {
    "hash": "0x7c8f...d8f",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "403 words - click here to read",
    "link": "https://blog.kraken.com/product/eth-deposits-and-withdrawals-available-on-arbitrum"
  },
  {
    "hash": "0x67f0...473",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "430 words - click here to read",
    "link": "https://blog.kraken.com/product/dai-usdc-and-usdt-deposits-and-withdrawals-available-on-the-polygon-network"
  },
  {
    "hash": "0xe0d0...89a",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "443 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-hydradx-hdx-starts-january-24-deposit-now"
  },
  {
    "hash": "0x11ae...9a4",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "431 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-eul-and-waxl-starts-december-15-deposit-now"
  },
  {
    "hash": "0xe40b...d57",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "459 words - click here to read",
    "link": "https://blog.kraken.com/product/matic-deposits-and-withdrawals-available-on-the-polygon-network"
  },
  {
    "hash": "0x9867...326",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "409 words - click here to read",
    "link": "https://blog.kraken.com/product/asset-listings/trading-for-hashflow-hft-starts-november-7-deposit-now"
  },
  {
    "hash": "0xff54...1fe",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "447 words - click here to read",
    "link": "https://blog.kraken.com/product/kraken-now-supports-deposits-and-withdrawals-of-usdc-via-the-solana-and-tron-networks"
  },
  {
    "hash": "0xa93c...013",
    "type": "Listing Announcement",
    "from": "Julien De Buck",
    "to": "Kraken Blog",
    "value": "497 words - click here to read",
    "link": "https://blog.kraken.com/product/trading-for-stacks-stx-starts-october-21-deposit-now"
  }
];

let displayedTransactions = [];
let totalWords = 0;
let uniqueTickers = new Set();

function startContentScan() {
    const dialog = document.getElementById('contentScanDialog');
    dialog.style.display = 'block';
    
    document.getElementById('contentFeed').innerHTML = '';
    displayedTransactions = [];
    totalWords = 0;
    uniqueTickers = new Set();
    addContentItem();
}

function addContentItem() {
    if (displayedTransactions.length < allTransactions.length) {
        const tx = allTransactions[displayedTransactions.length];
        const item = document.createElement('div');
        item.className = 'content-item';
        item.innerHTML = `
            <span>${tx.hash}</span>
            <span>${tx.type}</span>
            <span>${new Date().toLocaleTimeString()}</span>
            <a href="${tx.link}" target="_blank">${tx.value}</a>
        `;
        document.getElementById('contentFeed').prepend(item);
        displayedTransactions.push(tx);
        updateStats(tx);
        setTimeout(addContentItem, 2000);
    }
}

function updateStats(newTx) {
    totalWords += parseInt(newTx.value.split(' ')[0]);
    const ticker = extractTicker(newTx.link);
    if (ticker) uniqueTickers.add(ticker);

    document.getElementById('totalContent').textContent = displayedTransactions.length;
    document.getElementById('avgPostsDay').textContent = (displayedTransactions.length / 365).toFixed(2);
    document.getElementById('totalWords').textContent = totalWords.toLocaleString();
    document.getElementById('uniqueTickers').textContent = uniqueTickers.size;
}

function extractTicker(link) {
    const match = link.match(/trading-for-(\w+)/);
    return match ? match[1].toUpperCase() : null;
}

// Add ContentScan icon to desktop

const contentScanIcon = document.createElement('a');
contentScanIcon.href = "#";
contentScanIcon.className = "icon";
contentScanIcon.onclick = startContentScan;
contentScanIcon.innerHTML = `
    <img src="https://win98icons.alexmeub.com/icons/png/search_file-2.png" alt="ContentScan">
    <span>ContentScan</span>
`;
document.querySelector('.desktop').appendChild(contentScanIcon);

</script>
