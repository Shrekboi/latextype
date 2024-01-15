// Create MathQuill input box
let mathField = MathQuill.getInterface(2).MathField($('#mathquill-input')[0]);
let toisenasteenyhtalo = "x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}"
const question = document.querySelector("#question")
const equation = document.querySelector("#equation")

// MathQuill.StaticMath(equation)

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
        name: "Toisen asteen yhtälö",
        formula: "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}"
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
        name: "Harmonisen värähtelijän jaksonaika",
        formula: "p=\\frac{F}{A}"
    },


    // Add more items if needed
];

// runThatShit()
let randomEquation = equations[Math.floor(Math.random() * equations.length)].formula
equation.innerHTML = randomEquation
MathQuill.StaticMath(equation)



function runThatShit() {
    if (mathField.latex() == randomEquation) {
        alert("Oikein")
    } else {
        alert("Väärin")
    }
    console.log(mathField.latex())
    console.log(randomEquation)
    // let randomName = equations[randomIndex].name
    randomEquation = equations[Math.floor(Math.random() * equations.length)].formula

    // ask in text
    // question.innerHTML = randomEquation

    equation.innerHTML = randomEquation
    MathQuill.StaticMath(equation)
}

// function checkAnswer(answer, result) {
//     console.log(answer)
//     console.log(result)
//     if (answer === result) {
//         alert("Oikein")
//     } else {
//         alert("Väärin")
//     }
// }



// // Function to get LaTeX from MathQuill input box
// function getLatex() {
//     // var latex = mathField.latex();
//     // alert('LaTeX expression: ' + latex);
//     // alert(mathField.latex())
//     alert(bank[1][1])

//     // if (latex === "x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}") {
//     //     alert("correct")
//     // }
//     // else {
//     //     alert("nah")
//     // }


// }

document.getElementById("runButton").style.display = "none";
document.getElementById("mathquill-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        runThatShit();
        mathField.latex("")
    }
});