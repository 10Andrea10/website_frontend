const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://7kkcu27tfviwa7msgrrgt36zwa0ntynn.lambda-url.eu-south-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();