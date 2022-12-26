/*Declaring variables*/
let paletteOption = document.getElementById("palette-option")
let getButton = document.getElementById("get-scheme-button")
let colorsSection = document.getElementById("colors-section")
let colorChoser = document.getElementById("color-choser")

/*Main code*/
renderSelector()
getButton.addEventListener("click", renderColors)

/*Functions*/
function renderSelector() {
    paletteOption.innerHTML = `<option value="mono">Monochrome</option>
<option value="mono-dark">Monochrome-dark</option>
<option value="mono-light">Monochrome-light</option>
<option value="analogic">Analogic</option>
<option value="complement">Complement</option>
<option value="analogic-comp">Analogic-complement</option>
<option value="triad">Triad</option>`
}

function renderColors() {
    let firstColor = colorChoser.value

    colorsSection.innerHTML = `<div id="colors-bars" class="colors-bars">
    <div id="first-color" class="color-bar">
    </div>
    <div id="second-color" class="color-bar">
    </div>
    <div id="third-color" class="color-bar">
    </div>
    <div id="fourth-color" class="color-bar">
    </div>
    <div id="fifth-color" class="color-bar">
    </div>
</div>

<div id="color-bar-names" class="color-bar-names">
    <p id="first-color-name">${firstColor}</p>
    <p id="second-color-name"></p>
    <p id="third-color-name"></p>
    <p id="fourth-color-name"></p>
    <p id="fifth-color-name"></p>
</div>`
    let firstColorBar = document.getElementById("first-color")
    let secondColorBar = document.getElementById("second-color")
    let thirdColorBar = document.getElementById("third-color")
    let fourthColorBar = document.getElementById("fourth-color")
    let fifthColorBar = document.getElementById("fifth-color")

    firstColorBar.style.backgroundColor = firstColor

    let schemeArray = []

    fetch(`https://www.thecolorapi.com/scheme?hex=${firstColor.substring(1, 7)}&format=json&mode=analogic&count=4`)
        .then(res => res.json())
        .then(data => {
            schemeArray = data.colors
            for (let i = 0; i < schemeArray.length; i++) {
                switch (i) {
                    case 0:
                        secondColorBar.style.backgroundColor = schemeArray[i].hex.value
                        document.getElementById("second-color-name").innerHTML = `${schemeArray[i].hex.value}`
                        break;
                    case 1:
                        thirdColorBar.style.backgroundColor = schemeArray[i].hex.value
                        document.getElementById("third-color-name").innerHTML = `${schemeArray[i].hex.value}`
                        break;
                    case 2:
                        fourthColorBar.style.backgroundColor = schemeArray[i].hex.value
                        document.getElementById("fourth-color-name").innerHTML = `${schemeArray[i].hex.value}`
                        break;
                    case 3:
                        fifthColorBar.style.backgroundColor = schemeArray[i].hex.value
                        document.getElementById("fifth-color-name").innerHTML = `${schemeArray[i].hex.value}`
                        break;
                }

            }
        })
}