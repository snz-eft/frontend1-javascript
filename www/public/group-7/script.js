// console.log("Hello World from console");
// // document.writeln("This is appended to the nodes in document.body") // this is a basic way to write to the document.
// console.log(document.body)
// // console.log(document.getElementById("DocumentTitle").innerText);

// // const init = function() {
// // console.log(document.getElementById("DocumentTitle").innerText);
// // document.writeln("This is appended to the nodes in document.body") // this is a basic way to write to the document.
// // }
// function init() {
//     let titleElement = document.getElementById("DocumentTitle");// .innerText = "Jag är en ändrad text";
//     let newP = document.createElement("p");
//     newP.innerText="Jag är innehåll från kod.";
//     titleElement.parentNode.append(newP);
// }

//Fetch API
// This is render function
const createEl = (label, value) => {
  const divEl = document.createElement("div");
  const labelEl = document.createElement("span");
  const labelContent = document.createTextNode(label);
  labelEl.appendChild(labelContent);
  divEl.appendChild(labelEl);

  const valueEl = document.createElement("span");
  const valueContent = document.createTextNode(value);
  valueEl.appendChild(valueContent);
  divEl.appendChild(valueEl);
  return divEl;
};

const infoEl = document.getElementById("info");
fetch("http://localhost:3000/api/my")
  .then((response) => response.json())
  .then((data) => {
    infoEl.appendChild(
      createEl("Name: ", `${data.firstname} ${data.lastname}`)
    );
    infoEl.appendChild(createEl("Job: ", data.job));

    console.log("******* data", data);
  });
