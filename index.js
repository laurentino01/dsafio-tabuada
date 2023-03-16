function elementGenerator(element, content, parentElement) {
  const newElement = document.createElement(element);
  newElement.innerHTML = content;
  parentElement.appendChild(newElement);
}
function clearResults() {
  let resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = "";
}

function handleTab() {
  let resultContainer = document.querySelector(".result-container");
  let firstQuest = document.getElementById("first-quest").value;
  let tabNumber = parseInt(firstQuest);
  let secondQuest = document.getElementById("second-quest").value;
  let count = parseInt(secondQuest) + 1;

  if (tabNumber || count == !NaN) {
    clearResults();

    elementGenerator("p", `A tabuada do ${tabNumber} é: `, resultContainer);

    for (let i = 0; i < count; i++) {
      const contentLayout = `${tabNumber} X ${i} = ${tabNumber * i}`;
      elementGenerator("p", `${contentLayout}`, resultContainer);
    }
  } else {
    return alert("Por favor, preencha os campos :)");
  }
}
