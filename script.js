const tasks = [
  {
    libelle: "Tache numéro 1",
    completed: 1,
  },
  {
    libelle: "Tache numéro 2",
    completed: 0,
  },
  {
    libelle: "Tache numéro 3",
    completed: 0,
  },
  {
    libelle: "Tache numéro 4",
    completed: 0,
  },
  {
    libelle: "Tache numéro 5",
    completed: 0,
  },
];

let milieuMidListe = document.querySelector(".milieu-mid-liste");
let addCheck = document.querySelector(".add-check");
let addInput = document.querySelector(".add-input");

function loadData(tasks) {
  tasks.forEach((task) => {
    let templateTodoList = `
          <div class="liste-element">
          <span class="list-check ${task.completed ? "check-back" : ""}">
          <i class="${task.completed ? "check-icon" : ""}"></i>
          </span>
          <span class="${task.completed ? "barrer" : ""}">${task.libelle}</span>
          <span>X</span>
          </div>
          `;
    milieuMidListe.insertAdjacentHTML("afterbegin", templateTodoList);
  });
}

function addNewData(task) {
  let templateTodoList = `
  <div class="liste-element">
  <span class="list-check ${task.completed ? "check-back" : ""}">
  <i class="${task.completed ? "check-icon" : ""}"></i>
  </span>
  <span class="${task.completed ? "barrer" : ""}">${task.libelle}</span>
  <span>X</span>
  </div>
  `;
  milieuMidListe.insertAdjacentHTML("afterbegin", templateTodoList);
  let listCheck = milieuMidListe.firstElementChild.querySelector(".list-check");
  milieuMidListe.firstElementChild.addEventListener("click", function (e) {
    listCheck.classList.toggle("check-back");
    let i_check = listCheck.firstElementChild;
    let libelle_check = listCheck.nextElementSibling;
    i_check.classList.toggle("check-icon");
    libelle_check.classList.toggle("barrer");
  });
}

function addCheckStatus() {
  return addCheck.classList.contains("check-back");
}

addCheck.addEventListener("click", function (e) {
  addCheck.classList.toggle("check-back");
  let i_check = addCheck.firstElementChild;
  i_check.classList.toggle("check-icon");
});

addInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (addInput.value != "") {
      let task = {
        libelle: addInput.value,
        completed: addCheckStatus() ? 1 : 0,
      };
      addNewData(task);
      tasks.push(task);
      addInput.value = "";
    }
  }
});

loadData(tasks);

let listChecks = document.querySelectorAll(".list-check");
listChecks.forEach((listCheck) => {
  listCheck.addEventListener("click", function (e) {
    listCheck.classList.toggle("check-back");
    let i_check = listCheck.firstElementChild;
    let libelle_check = listCheck.nextElementSibling;
    i_check.classList.toggle("check-icon");
    libelle_check.classList.toggle("barrer");
  });
});
