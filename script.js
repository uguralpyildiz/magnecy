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

const web2 = document.querySelector("#brandsweb2")

    function infinite() {
        setTimeout(() => {
            web2.style.top = "50px"
        }, 1000);
        setTimeout(() => {
            web2.innerHTML = "Social Media"
            web2.style.fontFamily = "'Montserrat', sans-serif"
            web2.style.top = "0px"
            
        }, 2000);
        setTimeout(() => {
            web2.style.top = "-50px"
        }, 3000);
        setTimeout(() => {
            web2.innerHTML = "Influencer"
            web2.style.fontFamily = "'Montserrat', sans-serif"
            web2.style.top = "0px"
            
        }, 4000);
        setTimeout(() => {
            web2.style.top = "50px"
        }, 5000);
        setTimeout(() => {
            web2.innerHTML = "Marketing"
            web2.style.fontFamily = "'Montserrat', sans-serif"
            web2.style.top = "0px"
            
        }, 6000);
        setTimeout(() => {
            web2.style.top = "-50px"
        }, 7000);
        setTimeout(() => {
            web2.innerHTML = "Web2"
            web2.style.fontFamily = "'Batangas', serif"
            web2.style.top = "0px"
            
        }, 8000);
        setTimeout(() => {
            web2.style.top = "0px"
        }, 9000);
        setTimeout(() => {
            infinite()
        }, 9000);
    }

    infinite()

const web3 = document.querySelector("#brandsweb3")

function infinite2() {
    setTimeout(() => {
        web3.style.top = "50px"
    }, 1000);
    setTimeout(() => {
        web3.innerHTML = "Crypto"
        web3.style.fontFamily = "'Montserrat', sans-serif"
        web3.style.top = "0px"

    }, 2000);
    setTimeout(() => {
        web3.style.top = "-50px"
    }, 3000);
    setTimeout(() => {
        web3.innerHTML = "Blockchain"
        web3.style.fontFamily = "'Montserrat', sans-serif"
        web3.style.top = "0px"

    }, 4000);
    setTimeout(() => {
        web3.style.top = "50px"
    }, 5000);
    setTimeout(() => {
        web3.innerHTML = "NFT"
        web3.style.fontFamily = "'Montserrat', sans-serif"
        web3.style.top = "0px"

    }, 6000);
    setTimeout(() => {
        web3.style.top = "-50px"
    }, 7000);
    setTimeout(() => {
        web3.innerHTML = "Web3"
        web3.style.fontFamily = "'Batangas', serif"
        web3.style.top = "0px"

    }, 8000);
    setTimeout(() => {
        web3.style.top = "0px"
    }, 9000);
    setTimeout(() => {
        infinite2()
    }, 9001);
}

infinite2()


    

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