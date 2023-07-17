// ----####--> ASIDES BOTTON <--####---- //
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

// ----####--> MODE LIGHT <--####---- //
const modeButton = document.getElementById("mode-btn");
const mainContainer = document.getElementById("main-container");
const headerContainer = document.getElementById("header-container");
const bodyLight = document.getElementById("light-body");
const labelLight = document.getElementById("label-light-filters");
const labelLight2 = document.getElementById("label-light-filters2");
const labelLight3 = document.getElementById("label-light-filters3");
const labelLight4 = document.getElementById("label-light-filters4");
const labelLight5 = document.getElementById("label-light-filters5");
const labelLight6 = document.getElementById("label-light-filters6");
const labelLight7 = document.getElementById("label-light-filters7");
const labelLight8 = document.getElementById("label-light-filters8");
const labelLight9 = document.getElementById("label-light-filters9");
const divBackContainer = document.getElementById("color-picker-background-container");
const pLight = document.getElementById("p-light-mode");
const pLight2 = document.getElementById("p-light-mode2");
const pLight3 = document.getElementById("p-light-mode3");
const labelColorText= document.getElementById("title-color-text-light");
const labelColorText2= document.getElementById("title-color-text-light2");
const inputColorText= document.getElementById("label-light-color");
const inputColorText2= document.getElementById("label-light-color2");

const changeMode = () => {
    textAside.classList.toggle("light-aside");
    imgAside.classList.toggle("light-aside");
    mainContainer.classList.toggle("main-container-light");
    headerContainer.classList.toggle("header-light");
    bodyLight.classList.toggle("light-body");
    imgButton.classList.toggle("light-buttons");
    textButton.classList.toggle("light-buttons");
    modeButton.classList.toggle("light-buttons");
    inputUrl.classList.toggle("inputs-light");
    efectsImage.classList.toggle("inputs-light");
    divBackContainer.classList.toggle("inputs-light");
    filtersResetButton.classList.toggle("inputs-light");
    labelLight.classList.toggle("labes-filters");
    labelLight2.classList.toggle("labes-filters");
    labelLight3.classList.toggle("labes-filters");
    labelLight4.classList.toggle("labes-filters");
    labelLight5.classList.toggle("labes-filters");
    labelLight6.classList.toggle("labes-filters");
    labelLight7.classList.toggle("labes-filters");
    labelLight8.classList.toggle("labes-filters");
    labelLight9.classList.toggle("labes-filters");
    brightInput.classList.toggle("ranges-inputs-filters");
    opacityInput.classList.toggle("ranges-inputs-filters");
    contrastInput.classList.toggle("ranges-inputs-filters");
    blurInput.classList.toggle("ranges-inputs-filters");
    grayscaleInput.classList.toggle("ranges-inputs-filters");
    sepiaInput.classList.toggle("ranges-inputs-filters");
    hueInput.classList.toggle("ranges-inputs-filters");
    saturationInput.classList.toggle("ranges-inputs-filters");
    negativeInput.classList.toggle("ranges-inputs-filters");
    inputTextTop.classList.toggle("inputs-light");
    inputTextBottom.classList.toggle("inputs-light");
    pLight.classList.toggle("labes-filters");
    pLight2.classList.toggle("labes-filters");
    pLight3.classList.toggle("labes-filters");
    fontSelect.classList.toggle("inputs-light");
    labelColorText.classList.toggle("labes-filters");
    labelColorText2.classList.toggle("labes-filters");
    inputColorText.classList.toggle("inputs-light");
    inputColorText2.classList.toggle("inputs-light");
    sizeFonts.classList.toggle("inputs-light");
    buttonDirectionFontsLeft.classList.toggle("inputs-light");
    buttonDirectionFontsCenter.classList.toggle("inputs-light");
    buttonDirectionFontsRight.classList.toggle("inputs-light");
    buttonNone.classList.toggle("inputs-light");
    buttonDark.classList.toggle("inputs-light");
    buttonLight.classList.toggle("inputs-light");
    spacing.classList.toggle("inputs-light");
    interline.classList.toggle("inputs-light");

    if (mainContainer.classList.contains("main-container-light")) {
        modeButton.innerHTML = '<i class="fa-sharp fa-regular fa-lightbulb"></i> Dark Mode';
    } else {
        modeButton.innerHTML = '<i class="fa-sharp fa-solid fa-lightbulb"></i>Light Mode';
        ;
    }
}
modeButton.addEventListener("click", () => changeMode());

// ----####--> MEME DOWNLOAD <--####---- //
const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("meme-container");

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};

// ----####--> MEME IMAGE CONTAINER <--####---- //
const inputUrl = document.getElementById("url-input");
const imgContainer = document.getElementById("meme-img");

inputUrl.addEventListener( "input" , () => {
    imgContainer.style.backgroundImage = `url("${inputUrl.value}"`;
})

// ----####--> MEME IMAGE BACKGROUND <--####---- //
const colorPickerImg = document.getElementById("color-picker-background-meme-img");
const colorName = document.getElementById("color-name");

const nameColor = () => {
    let colorElegido = colorPickerImg.value;
    colorName.innerHTML = `${colorElegido}`;
};

colorPickerImg.addEventListener("input" , () => {
    imgContainer.style.backgroundColor = `${colorPickerImg.value}`;
    
})

colorPickerImg.addEventListener("input", () => nameColor());

// ----####--> BACKGROUND EFECTS IMAGE SELECT <--####---- //
const efectsImage = document.getElementById("efects-image")

efectsImage.addEventListener('change', () => changeEfects());

function changeEfects() {
    imgContainer.style.backgroundBlendMode = `${efectsImage.value}`;
}

// ----####--> FILTERS ASIDE IMAGE <--####---- //
const brightInput = document.getElementById("bright-input");
const opacityInput = document.getElementById("opacity-input");
const contrastInput = document.getElementById("contrast-input");
const blurInput = document.getElementById("blur-input");
const grayscaleInput = document.getElementById("grayscale-input");
const sepiaInput = document.getElementById("sepia-input");
const hueInput = document.getElementById("hue-input");
const saturationInput = document.getElementById("saturation-input");
const negativeInput = document.getElementById("negative-input");

const filters = () => {
    imgContainer.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}%) hue-rotation(${hueInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturationInput.value}%) invert(${negativeInput.value})`;
};
    brightInput.addEventListener("input", () => filters());
    opacityInput.addEventListener("input", () => filters());
    contrastInput.addEventListener("input", () => filters());
    grayscaleInput.addEventListener("input", () => filters());
    hueInput.addEventListener("input", () => filters());
    sepiaInput.addEventListener("input", () => filters());
    saturationInput.addEventListener("input", () => filters());
    blurInput.addEventListener("input", () => filters());
    negativeInput.addEventListener("input", () => filters());

// ----####--> RESET FILTERS BUTTON  <--####---- //
const filtersResetButton = document.getElementById("reset");

filtersResetButton.addEventListener("click" , () => resetFilters());
const resetFilters = () => {
    imgContainer.style.filter = `brightness(${brightInput.value = 1}) opacity(${opacityInput.value = 1}) blur(${blurInput.value = 0}px) contrast(${contrastInput.value = 100}%) grayscale(${grayscaleInput.value = 0}%) hue-rotate(${hueInput.value = 0}deg) sepia(${sepiaInput.value = 0}%) saturate(${saturationInput.value = 100}%) invert(${negativeInput.value = 0}) `;
}

// ----####--> TEXT UP/TEXT BOTTOM ASIDE TEXT <--####---- //
const textTop = document.getElementById("top-text-container");
const textBottom = document.getElementById("bottom-text-container");
const inputTextTop = document.getElementById("top-text");
const inputTextBottom = document.getElementById("bottom-text");

inputTextTop.addEventListener("input" , () => {
    textTop.innerHTML = `<p>${ inputTextTop.value}</p>`;
})

inputTextBottom.addEventListener("input" , () => {
    textBottom.innerHTML = `<p>${inputTextBottom.value}</p>`;
})

// ----####--> CHECKBOXS TEXTS  <--####---- //
const noTextTop = document.getElementById("no-top-text");
const noTextBottom = document.getElementById("no-bottom-text");

const hideTopText = () => {
    if (noTextTop.checked) {
        textTop.classList.add("hidden");
} else {
    textTop.classList.remove("hidden");
}
};

const hideBottomText = () => {
    if (noTextBottom.checked) {
        textBottom.classList.add("hidden");
} else {
    textBottom.classList.remove("hidden");
}
};

textTop.addEventListener("change", () => hideTopText());
textBottom.addEventListener("change", () => hideBottomText());

// ----####--> FONT SELECT <--####----  //
const fontSelect = document.getElementById("font-select");
const changeFontFamily = () => {
    textTop.style.fontFamily = `${fontSelect.value}`;
    textBottom.style.fontFamily = `${fontSelect.value}`;
};

fontSelect.addEventListener("change", () => changeFontFamily());

// ----####--> INPUTS BACKGROUD/TEXT COLOR Aside Text <--####----//
const inputColor = document.getElementById("input-color");
let colors;
const colorNameOne = document.getElementById("color-name-text");

const nameColorOne = () => {
    let colorElegido = inputColor.value;
    colorNameOne.innerHTML = `${colorElegido}`;
};

inputColor.addEventListener("input" , () => {
    textTop.style.color = `${inputColor.value}`;
    textBottom.style.color = `${inputColor.value}`;
    
})

inputColor.addEventListener("input", () => nameColorOne());

const inputColorBackgound = document.getElementById("input-color-background")
const colorNameTwo = document.getElementById("color-name-text-two")

const nameColorTwo = () => {
    let colorElegido = inputColorBackgound.value;
    colorNameTwo.innerHTML = `${colorElegido}`;
};

inputColorBackgound.addEventListener("input" , () => {
    textTop.style.backgroundColor = `${inputColorBackgound.value}`;
    textBottom.style.backgroundColor = `${inputColorBackgound.value}`;
});

inputColorBackgound.addEventListener("input", () => nameColorTwo());

// ----####--> BUTTONS SIZE/LEFT/CENTER/RIGHT FONTS <--####---- //
const sizeFonts = document.getElementById("size-fonts");
const buttonDirectionFontsLeft = document.getElementById("button-left");
const buttonDirectionFontsCenter = document.getElementById("button-center");
const buttonDirectionFontsRight = document.getElementById("button-right");

// ----####--> BUTTONS CONTOUR <--####---- //
const buttonNone = document.getElementById("button-none");
const buttonDark = document.getElementById("button-dark");
const buttonLight = document.getElementById("button-light");

// ----####--> SPACING <--####---- //
const spacing = document.getElementById("input-spacing");

// ----####--> INTERLINE <--####---- //
const interline = document.getElementById("input-interline");












