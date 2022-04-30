console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function () {
  console.logs.push(Array.from(arguments));
  console.stdlog.apply(console, arguments);
};

let output = document.getElementById("Console");
let input = document.getElementById("Input");
let submitButton = document.getElementById("Sub");
let codeOutput = document.getElementById("CodeOutput");


input.addEventListener("input", updateValue);
input.addEventListener("click", updateValue);

function updateValue() {


  codeOutput.innerHTML = input.outerText;
  hljs.highlightAll();

  let lastDiv = input.querySelectorAll("div:last-child")[0];


  if (lastDiv) {
    if (!(lastDiv.innerHTML == lastDiv.outerText) && lastDiv.innerHTML.length > 4) {
        lastDiv.removeChild(lastDiv.querySelector("br"));
       codeOutput.innerHTML = input.outerText;
       hljs.highlightAll();
     }
   }
}

hljs.highlightAll();

submitButton.addEventListener("click", function (e) {
  createDiv(input.outerText);
});

function createDiv(value) {
  console.log(console.logs)
  eval(value);
  output.value = console.logs.join(",").split(",").join(" ");
}

window.onerror = function(error, url, line) {
  output.value = console.logs.join(",").split(",").join("") + error + line
  console.log('-----')
  console.log(error)
  console.log(url)
  console.log(line)
  console.log('-----')
};