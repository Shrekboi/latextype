// Create MathQuill input box
let mathField = MathQuill.getInterface(2).MathField($('#mathquill-input')[0]);

const question = document.querySelector("#question")
const equation = document.querySelector("#equation")
let equationCheckbox = document.getElementById("equation2");
let definitionCheckbox = document.getElementById("definition");


let equations = [
    {
        name: "Newtonin II. laki",
        formula: "\\overline{G}=m\\overline{g}"
    },
    {
        name: "Gravitaatio voima",
        formula: "F=\\gamma\\frac{m_1m_2}{r^2}"
    },
    {
        name: "Normaalikiihtyvyys",
        formula: "a_n=\\frac{v^2}{r}"
    },
    {
        name: "Työ",
        formula: "W=Fs"
    },
    {
        name: "Liike energia",
        formula: "E_k=\\frac{1}{2}mv^2"
    },
    {
        name: "Potentiaali energia",
        formula: "E_p=mgh"
    },
    {
        name: "Noste",
        formula: "N=\\rho Vg"
    },
    {
        name: "Paine",
        formula: "p=\\frac{F}{A}"
    },
    {
        name: "Pituuden lämpötilakerroin",
        formula: "l=l_0\\left(1+\\alpha \\Delta T\\right)"
    },
    {
        name: "Ideaalikaasun tilanyhtälö",
        formula: "pV=nRT"
    },
    {
        name: "Joulen laki",
        formula: "l=l_0\\left(1+\\alpha \\Delta T\\right)"
    },
    {
        name: "Pituuden lämpötilakerroin",
        formula: "P=UI"
    },
    {
        name: "Sähkökentän voimakkuus",
        formula: "l=l_0\\left(1+\\alpha \\Delta T\\right)"
    },
    {
        name: "Pituuden lämpötilakerroin",
        formula: "l=l_0\\left(1+\\alpha \\Delta T\\right)"
    },


    // Add more items if needed
];

let randomQuestion = equations[Math.floor(Math.random() * equations.length)];

let randomEquation = randomQuestion.formula
let randomDefinition = randomQuestion.name

question.innerHTML = randomDefinition
equation.innerHTML = randomEquation
MathQuill.StaticMath(equation)


let showEquation = true
let showDefinition = true



// Add event listeners to the checkboxes
equationCheckbox.addEventListener("change", function () {
    showEquation = equationCheckbox.checked
    console.log(equationCheckbox.checked)
});

definitionCheckbox.addEventListener("change", function () {
    showDefinition = definitionCheckbox.checked
    console.log(definitionCheckbox.checked)
});

function runThatShit() {


    if (mathField.latex() == randomEquation.formula) {
        alert("Oikein")
    } else {
        alert("Väärin")
    }
    console.log(mathField.latex())
    console.log(randomEquation)
    // let randomName = equations[randomIndex].name
    randomEquation = equations[Math.floor(Math.random() * equations.length)]

    // ask in text
    // question.innerHTML = randomEquation

    if (showEquation === true) {
        equation.innerHTML = randomEquation.formula
        MathQuill.StaticMath(equation)
    }
    else {
        equation.innerHTML = ""
    }

    if (showDefinition === true) {
        question.innerHTML = randomEquation.name
    }
    else {
        question.innerHTML = ""
    }

}


var enterKeyPressCount = 0;

document.getElementById("runButton").style.display = "none";

document.getElementById("mathquill-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        enterKeyPressCount++;

        if (enterKeyPressCount === 2) {
            runThatShit();
            mathField.latex("");
            enterKeyPressCount = 0;  // Reset the count
        }
    } else {
        enterKeyPressCount = 0;  // Reset the count if any other key is pressed
    }
});



