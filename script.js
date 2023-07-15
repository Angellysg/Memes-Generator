//Asides //

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

/*function hideTextAside() {
    imgAside.classList.add("hidden");
    textAside.classList.remove("hidden");
}

const hideImgAside = () => {
    imgAside.classList.remove("hidden");
    textAside.classList.add("hidden");
}

textButton.addEventListener("click" , () => hideImgAside());
imgButton.addEventListener("click" , () => hideTextAside())*/

///////////////////////////////////////////////////////////////////


//Text up and Text Bottom//
const textTop = document.getElementById("top-text-container");
const textBottom = document.getElementById("bottom-text-container");
const inputTextTop = document.getElementById("top-text")
const inputTextBottom = document.getElementById("bottom-text")

inputTextTop.addEventListener("input" , () => {
    textTop.innerHTML = `<p>${ inputTextTop.value}</p>`
})

inputTextBottom.addEventListener("input" , () => {
    textBottom.innerHTML = `<p>${ inputTextBottom.value}</p>`
})


//Meme Image Container//
const inputUrl = document.getElementById("url-input");
const imgContainer = document.getElementById("meme-img");

inputUrl.addEventListener( "input" , () => {
    imgContainer.style.backgroundImage = `url("${inputUrl.value}"`
})

// input background text color//

const inputColor = document.getElementById("input-color")
//let colors;

inputColor.addEventListener("input" , () => {
    textTop.style.color = `${inputColor.value}`
    textBottom.style.color = `${inputColor.value}`
})

const inputColorBackgound = document.getElementById("input-color-background")

inputColorBackgound.addEventListener("input" , () => {
    textTop.style.backgroundColor = `${inputColorBackgound.value}`
    textBottom.style.backgroundColor = `${inputColorBackgound.value}`

})


/*const modoOscuro = () => {

    body.classList.toggle('light-mode');
    darkModeIcon.classList.toggle('fa-solid');
    darkModeIcon.classList.toggle('fa-regular');
    
    if (darkModeSpan.innerText == 'Dark mode') {
        darkModeSpan.innerText = 'Light mode'
    } else {
        darkModeSpan.innerText = 'Dark mode'
    }
};

Asi Tambien puede ser, si se usa el mismo icono de fontawesome, solo le cambias una clase*/
