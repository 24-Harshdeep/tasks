document.body.innerHTML = `
  <h2>Grade Calculator</h2>
  <input type="number" placeholder="Marks 1"><br>
  <input type="number" placeholder="Marks 2"><br>
  <input type="number" placeholder="Marks 3"><br>
  <input type="number" placeholder="Marks 4"><br>
  <input type="number" placeholder="Marks 5"><br>
  <button>Calculate Grade</button>
  <p id="result"></p>
`;

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const result = document.querySelector("p");

button.onclick = function() {
  let sum = 0;
  for (let inp of inputs) {
    sum += Number(inp.value) || 0;  
  }
  let avg = sum / inputs.length;

  let grade = avg >= 90 ? "A" :
              avg >= 75 ? "B" :
              avg >= 50 ? "C" : "F";

  result.innerText = `Average: ${avg.toFixed(2)}, Grade: ${grade}`;
}

