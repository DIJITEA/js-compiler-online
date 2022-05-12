console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function () {
  console.logs.push(Array.from(arguments));
  console.stdlog.apply(console, arguments);
};

let output = document.getElementById("Console");
let input = document.getElementById("Input");
let submitButton = document.getElementById("Sub");
let coudeOutputDivContainer = document.querySelector(".code__output-container");
// coudeOutputDivContainer.style.background
let codeOutput = document.getElementById("CodeOutput");

input.addEventListener("input", (e) => updateValue(e));
input.addEventListener("click", (e) => updateValue(e));

function updateValue(e) {
  input.removeAttribute("style");
  console.log(input.outerText);
  console.log(input.innerHTML);
  console.log(e);

  codeOutput.innerHTML = input.outerText;

  // need 2 fix
  // if (e.inputType == "deleteContentBackward") {
  //   console.log(e.inputType)
  //   let lastDiv = input.querySelectorAll("div:last-child")[0];
  //   if (lastDiv) {
  //     if (
  //       !(lastDiv.innerHTML == lastDiv.outerText) &&
  //       lastDiv.innerHTML.length > 4
  //     ) {
  //       lastDiv.removeChild(lastDiv.querySelector("br"));
  //       codeOutput.innerHTML = input.outerText;
  //       hljs.highlightAll();
  //     }
  //   }
  // }
  // ----------
  hljsCall();
}
function hljsCall() {
  hljs.highlightAll();
}

hljs.highlightAll();

submitButton.addEventListener("click", function (e) {
  createOutputDiv(input.outerText);
});

function createOutputDiv(value) {
  // console.log(console.logs.join(",").split(","));
  eval(value);
  let nOutput = document.createElement("output");
  nOutput.classList.add("code__console-output");
  nOutput.value = console.logs.join(",").split(",").join(" ");
  console.logs = [];
  coudeOutputDivContainer.appendChild(nOutput);
  // output.value = console.logs.join(",").split(",").join(" ");
}

window.onerror = function (error, url, line) {
  output.value = console.logs.join(",").split(",").join("") + error + line;
  console.log("-----");
  console.log(error);
  console.log(url);
  console.log(line);
  console.log("-----");
};
