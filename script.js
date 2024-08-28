const menubtn = document.querySelector(".menubtn-m")
const overlay = document.querySelector(".overlay")
const nav = document.querySelector(".lang-theme-op")


menubtn.addEventListener("click", ()=>{
    nav.style.left = "0"
    overlay.style.display = "block"
})
overlay.addEventListener("click", ()=>{
    overlay.style.display = "none"
    nav.style.left = "-150%"
})



function type1() {
    const textss = ['Web2', 'Social Media', 'Influencer', 'Marketing', 'Web2'];
    var countt = 0;
    var indexx = 0;
    var decrement = 0;
    var currentText = '';
    var letter = '';

    function sleepp(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    const typeWrite = async () => {
        if (countt == textss.length) {
            countt = 0;
        }
        currentWord = textss[countt];
        currentLetter = currentWord.slice(0, ++indexx);
        document.querySelector(".job-bar").textContent = currentLetter;
        if (indexx == currentWord.length) {
            await sleepp(1500);
            while (indexx > 0) {
                currentLetter = currentWord.slice(0, --indexx);
                document.querySelector(".job-bar").textContent = currentLetter;
                await sleepp(50);
            }
            countt++;
            indexx = 0;
            await sleepp(500);
        }
        setTimeout(typeWrite, Math.random() * 200 + 50);
    }
    typeWrite();
}
function type2() {
    const texts = ['Web3', 'Crypto', 'Blockchain', 'NFT', 'Web3'];
    var count = 0;
    var index = 0;
    var decrement = 0;
    var currentText = '';
    var letter = '';

    function sleep(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    const typeWrite2 = async () => {
        if (count == texts.length) {
            count = 0;
        }
        currentWorddd = texts[count];
        currentLetter = currentWorddd.slice(0, ++index);
        document.querySelector(".job-bar2").textContent = currentLetter;
        if (index == currentWorddd.length) {
            await sleep(1500);
            while (index > 0) {
                currentLetter = currentWorddd.slice(0, --index);
                document.querySelector(".job-bar2").textContent = currentLetter;
                await sleep(50);
            }
            count++;
            index = 0;
            await sleep(500);
        }
        setTimeout(typeWrite2, Math.random() * 200 + 50);
    }
    typeWrite2();
}
type1()
type2()


    

let socialMediaCount = 1;

function addSocialMediaInput() {
    if (socialMediaCount < 10) {
        socialMediaCount++;
        const container = document.getElementById('social-media-container');
        const inputDiv = document.createElement('div');
        inputDiv.classList.add('form-group', 'hidden'); // Initially hide with hidden class
        inputDiv.innerHTML = `<input type="text" id="social-media-${socialMediaCount}" name="social_media_${socialMediaCount}" placeholder="Social Media Account ${socialMediaCount}" required class="form-input">`;
        container.appendChild(inputDiv);

        // Move the plus button to the new input's div
        const plusButton = document.getElementById('plus-button');
        inputDiv.appendChild(plusButton);

        // Apply transition by removing hidden class after a delay
        setTimeout(() => {
            inputDiv.classList.remove('hidden');
        }, 50);

        // Hide the plus button if the maximum limit is reached
        if (socialMediaCount === 10) {
            plusButton.style.display = 'none';
        }
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Display submit message
    const submitMessage = document.getElementById('submit-message');
    submitMessage.style.display = 'block';
    submitMessage.textContent = 'Form submitted successfully.';

    // Clear input values
    const form = document.getElementById('my-form');
    form.reset();
    socialMediaCount = 1; // Reset social media counter

    // Remove additional social media inputs
    const container = document.getElementById('social-media-container');
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }

    // Reset the visibility of the plus button
    const plusButton = document.getElementById('plus-button');
    plusButton.style.display = 'inline-block';
}


//this is a sample flashlight effect

$(document).ready(function () {
    $(this).mousemove(function (e) {
        $("#light").css({
            "top": e.pageY - 250,
            "left": e.pageX - 250
        })
    }).mousedown(function (e) {
        switch (e.which) {
            case 1:
                $("#light").toggleClass("light-off");
                break;
            case 2:
                console.log('Middle Mouse button pressed.');
                break;
            case 3:
                console.log('Right Mouse button pressed.');
                break;
            default:
                console.log('You have a strange Mouse!');
        }
    })
})