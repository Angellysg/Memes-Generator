// Asides //

const textButton = document.getElementById("text-btn");
const imgButton = document.getElementById("img-btn");

const textAside = document.getElementById("aside-text-container");
const imgAside = document.getElementById("aside-img-container");

const hideTextAside = () => {
    textAside.classList.add("hidden");
    imgAside.classList.remove("hidden");
}

const hideImgAside = () => {
    imgAside.classList.add("hidden");
    textAside.classList.remove("hidden");
}

textButton.addEventListener("click" , () => hideImgAside());
imgButton.addEventListener("click" , () => hideTextAside());

// Mode Light//

const modeButton = document.getElementById("mode-btn");
const mainContainer = document.getElementById("main-container");
const headerContainer = document.getElementById("header-container")
const bodyLight = document.getElementById("light-body")


const changeMode = () => {
    textAside.classList.toggle("light-aside");
    imgAside.classList.toggle("light-aside");
    mainContainer.classList.toggle("main-container-light");
    headerContainer.classList.toggle("header-light")
    bodyLight.classList.toggle("light-body")
    

    if (mainContainer.classList.contains("main-container-light")) {
        modeButton.innerHTML = '<i class="fa-sharp fa-regular fa-lightbulb"></i> Dark Mode';
    } else {
        modeButton.innerHTML = '<i class="fa-sharp fa-solid fa-lightbulb"></i>Light Mode';
        ;
    }
}

modeButton.addEventListener("click", () => changeMode());

// Meme Image Container //
const inputUrl = document.getElementById("url-input");
const imgContainer = document.getElementById("meme-img");

inputUrl.addEventListener( "input" , () => {
    imgContainer.style.backgroundImage = `url("${inputUrl.value}"`
})

// Meme Image BACKGROUND //
const colorPickerImg = document.getElementById("color-picker-background-meme-img");
const colorName = document.getElementById("color-name");

const nameColor = () => {
    let colorElegido = colorPickerImg.value;
    colorName.innerHTML = `${colorElegido}`;
};

colorPickerImg.addEventListener("input" , () => {
    imgContainer.style.backgroundColor = `${colorPickerImg.value}`
    
})

colorPickerImg.addEventListener("input", () => nameColor());


// Filters //

const brightInput = document.getElementById("bright-input");
const contrastInput = document.getElementById("contrast-input");

const filters = () => {
    imgContainer.style.filter = `brightness(${brightInput.value}) opacity(1) blur(0px) contrast(${contrastInput.value}%) grayscale(0%) hue-rotate(0deg) sepia(0%) saturate(100%) invert(0)`;
};

brightInput.addEventListener("input", () => filters());
contrastInput.addEventListener("input", () => filters());


// Text up and Text Bottom //
const textTop = document.getElementById("top-text-container");
const textBottom = document.getElementById("bottom-text-container");
const inputTextTop = document.getElementById("top-text")
const inputTextBottom = document.getElementById("bottom-text")

inputTextTop.addEventListener("input" , () => {
    textTop.innerHTML = `<p>${ inputTextTop.value}</p>`
})

inputTextBottom.addEventListener("input" , () => {
    textBottom.innerHTML = `<p>${inputTextBottom.value}</p>`
})



// input background text color//

const inputColor = document.getElementById("input-color")
let colors;
const colorNameOne = document.getElementById("color-name-text")

const nameColorOne = () => {
    let colorElegido = inputColor.value;
    colorNameOne.innerHTML = `${colorElegido}`;
};

inputColor.addEventListener("input" , () => {
    textTop.style.color = `${inputColor.value}`
    textBottom.style.color = `${inputColor.value}`
    
})

inputColor.addEventListener("input", () => nameColorOne());

const inputColorBackgound = document.getElementById("input-color-background")
const colorNameTwo = document.getElementById("color-name-text-two")

const nameColorTwo = () => {
    let colorElegido = inputColorBackgound.value;
    colorNameTwo.innerHTML = `${colorElegido}`;
};

inputColorBackgound.addEventListener("input" , () => {
    textTop.style.backgroundColor = `${inputColorBackgound.value}`
    textBottom.style.backgroundColor = `${inputColorBackgound.value}`
    
});

inputColorBackgound.addEventListener("input", () => nameColorTwo());












