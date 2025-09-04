const display = document.getElementById("display");
const modeSelect = document.getElementById("viewMode"); // 5 (quinary) or 10 (decimal)

let currentExpression = "";

function appendNumber(num) {

  if (!/^[0-4]$/.test(num)) return;
  currentExpression += num;
  display.textContent = currentExpression;
}

function appendOperator(operator) {
  const lastChar = currentExpression.slice(-1);

  if (currentExpression === "" && operator !== "-") return;

  if (["+","-","x","÷"].includes(lastChar)) {
    currentExpression = currentExpression.slice(0, -1) + operator;
  } else {
    currentExpression += operator;
  }
  display.textContent = currentExpression;
}

document.getElementById("clearButton").addEventListener("click", () => {
  currentExpression = "";
  display.textContent = "";
});

document.getElementById("button0").addEventListener("click", () => appendNumber("0"));
document.getElementById("button1").addEventListener("click", () => appendNumber("1"));
document.getElementById("button2").addEventListener("click", () => appendNumber("2"));
document.getElementById("button3").addEventListener("click", () => appendNumber("3"));
document.getElementById("button4").addEventListener("click", () => appendNumber("4"));

document.getElementById("plus").addEventListener("click", () => appendOperator("+"));
document.getElementById("subtract").addEventListener("click", () => appendOperator("-"));
document.getElementById("multiplication").addEventListener("click", () => appendOperator("x"));
document.getElementById("division").addEventListener("click", () => appendOperator("÷"));

function parseExpression(expr) {
  if (!expr) return null;

  let opIndex = -1;
  let opChar = null;

  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    const isOp = ch === "+" || ch === "x" || ch === "÷" || ch === "-";
    if (!isOp) continue;

    if (ch === "-" && i === 0) continue;

    opIndex = i;
    opChar = ch;
    break;
  }

  if (opIndex <= 0 || opIndex >= expr.length - 1) return null;

  const left = expr.slice(0, opIndex);
  const right = expr.slice(opIndex + 1);

  if (!/^[0-4]+$/.test(left) || !/^[0-4]+$/.test(right)) return null;

  return { num1: left, num2: right, op: opChar };
}

function routeFor(opChar) {
  switch (opChar) {
    case "+": return "add";
    case "-": return "sub";
    case "x": return "mult";
    case "÷": return "div";
    default:  return null;
  }
}

document.getElementById("equal").addEventListener("click", async function () {
  if (!currentExpression) return;

  const parsed = parseExpression(currentExpression);
  if (!parsed) {
    display.textContent = "Error";
    currentExpression = "";
    return;
  }

  const { num1, num2, op } = parsed;
  const base = Number(modeSelect?.value || 5);
  const opSegment = routeFor(op);
  if (!opSegment) {
    display.textContent = "Error";
    currentExpression = "";
    return;
  }


  const url = `/api/calc/${opSegment}_${base}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ num1, num2 })
    });

    if (!response.ok) throw new Error("Bad response");

    const data = await response.json();

    let out = null;
    if (base === 5 && typeof data.result !== "undefined") {
      out = String(data.result);
    } else if (base === 10 && typeof data.result_before_convert !== "undefined") {
      out = String(Math.trunc(Number(data.result_before_convert)));
    }

    if (out === null) throw new Error("Malformed response");

    currentExpression = out;
    display.textContent = currentExpression;
  } catch (err) {
    display.textContent = "Error";
    currentExpression = "";
  }
});