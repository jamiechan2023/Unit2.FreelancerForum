let totalPrice = 0;
let averageStartingPrice = 0;
const names = [
  "Alice",
  "Bob",
  "Carol",
  "Fion",
  "Jenny",
  "John",
  "Tiffiny",
  "Jack",
  "Michael",
  "Grace",
];

const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Technician",
  "Designer",
  "Engineer",
  "Journalist",
  "Accountant",
  "Financial Analyst",
  "Secretary",
];

const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    startingPrice: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    startingPrice: 50,
  },
];

const addFreelancerId = setInterval(addFreelancer, 3000);

render(freelancers);

function addFreelancer() {
  // Randomize the name of the freelancer
  const name = names[Math.floor(Math.random() * names.length)];

  // Randomize the occupation of the freelancer
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];

  // Generate the startingPrice of the freelancer
  const startingPrice = Math.round(Math.random() * 100);

  freelancers.push({ name, occupation, startingPrice });

  render(freelancers);
}

//**************** Header Section *************
function createTableHeader(table) {
  const thead = document.createElement("thead");
  // create header rows
  const headerRow = document.createElement("tr");
  // create a container that stores all the headers
  const headers = ["Name", "Occupation", "Starting Price"];

  for (let i = 0; i < headers.length; i++) {
    // create a new table heading
    const th = document.createElement("th");
    const header = headers[i];
    th.innerText = header;
    headerRow.appendChild(th);
  }
  // add headers to thead
  thead.appendChild(headerRow);
  // add thead to table
  table.appendChild(thead);
}

//************** Add Table Container */
function appendTableToContainer(table) {
  // Grab the root element
  const root = document.querySelector("#root");
  // Create a heading
  const h1 = document.createElement("h1");
  h1.innerText = "Freelancers Forum";
  const p = document.createElement("p");
  p.innerText = `The average starting price is ${averageStartingPrice}.`;
  const h2 = document.createElement("h2");
  h2.innerText = "Available Freelancers";
  // Add it to the Root.
  root.appendChild(h1);
  root.appendChild(p);
  root.appendChild(h2);
  root.appendChild(table);
}

// *************** Body Section **************
function createTableBody(table, freelancers) {
  // Create tbody tag
  const tbody = document.createElement("tbody");
  totalPrice = 0;
  averageStartingPrice = 0;
  for (let i = 0; i < freelancers.length; i++) {
    const row = document.createElement("tr");
    console.log("row", row);
    // Grab the freelancer
    const freelancer = freelancers[i];
    for (const key in freelancer) {
      const cell = document.createElement("td");
      cell.innerText = freelancer[key];
      row.appendChild(cell);
    }
    // add tr to tbody
    tbody.appendChild(row);
    totalPrice += freelancer.startingPrice;
  }

  table.appendChild(tbody);

  averageStartingPrice = Math.round(totalPrice / freelancers.length);
}

function render(initialState) {
  // Create a table element
  const table = document.createElement("table");
  createTableHeader(table);
  createTableBody(table, initialState);
  appendTableToContainer(table);
}
