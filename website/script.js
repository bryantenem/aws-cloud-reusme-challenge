function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const counter = document.querySelector(".counter-number");
async function updateCounter() {
    try {
        let response = await fetch("https://5ywhgt2v6turp4vgd6i53bgeae0badln.lambda-url.us-east-1.on.aws/");
        
        if(!response.ok){
            throw new Error('HTTP Error, Status: ${response.status}');
        }
        let data = await response.json();

        if(counter){
            counter.innerHTML =  `Views: ${data}`;
        }
        else {
            console.error('Counter element not found');
        }
    } catch (error){
        console.error('Error fetching or updating counter:', error)
    }
}

updateCounter();