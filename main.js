const formIntro = document.querySelector('.introBtnDiv');
const emailIntro = document.getElementById('inputIntro');
const introResponse = document.getElementById('introResponse');


formIntro.addEventListener('submit', (e) => {
    console.log("Submit Intro !");
    e.preventDefault();
    let emailValue = emailIntro.value;
    if (validateEmail(emailValue)) {
        introResponse.style.display = "none";
    } else {
        introResponse.style.display = "block";
        emailIntro.style.borderColor = "hotpink";
    }
});

const formCta = document.querySelector('.ctaBtnDiv');
const emailCta = document.getElementById('inputCta');
const ctaResponse = document.getElementById('ctaResponse');


formCta.addEventListener('submit', (e) => {
    console.log("Submit CTA !");
    e.preventDefault();
    let emailValue = emailCta.value;
    if (validateEmail(emailValue)) {
        ctaResponse.style.display = "none";
    } else {
        ctaResponse.style.display = "block";
    }
});


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};