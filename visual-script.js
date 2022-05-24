console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function () {
  console.logs.push(Array.from(arguments));
  console.stdlog.apply(console, arguments);
};
// document.execCommand("defaultParagraphSeparator", false, "p");

let output = document.getElementById("Console");
let input = document.getElementById("Input");
let submitButton = document.getElementById("Sub");
let coudeOutputDivContainer = document.querySelector(".code__output-container");
// coudeOutputDivContainer.style.background
let codeOutput = document.getElementById("CodeOutput");

input.addEventListener("input", () => updateValue());
input.addEventListener("click", () => updateValue());

function updateValue() {
  const widthValue = input.value.length * 8  
  input.style.height = codeOutput.offsetHeight + 'px'
  input.style.width = widthValue  + 'px'
  codeOutput.style.width = widthValue + 'px'
  codeOutput.innerHTML = input.value


   hljsCall();
}

async function hljsCall() {
  hljs.highlightAll();
}

hljs.highlightAll();

submitButton.addEventListener("click", function (e) {
  createOutputDiv(input.value);
});

function createOutputDiv(value) {
  eval(value);
  let nOutput = document.createElement("output");
  nOutput.classList.add("code__console-output");
  nOutput.value = console.logs.join(",").split(",").join(" ");
  console.logs = [];
  coudeOutputDivContainer.appendChild(nOutput);
}

window.onerror = function (error, url, line) {
  output.value = console.logs.join(",").split(",").join("") + error + line;
  console.log("-----");
  console.log(error);
  console.log(url);
  console.log(line);
  console.log("-----");
};
