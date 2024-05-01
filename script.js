const tasks = [
  {
    libelle: "Tache numéro 1",
    status: 1,
    completed: 0,
  },
  {
    libelle: "Tache numéro 2",
    status: 1,
    completed: 0,
  },
  {
    libelle: "Tache numéro 3",
    status: 1,
    completed: 0,
  },
  {
    libelle: "Tache numéro 4",
    status: 1,
    completed: 0,
  },
  {
    libelle: "Tache numéro 5",
    status: 1,
    completed: 0,
  },
];

let milieuMidListe = document.querySelector(".milieu-mid-liste");
let addCheck = document.querySelector(".add-check");

function loadData(tasks) {
  tasks.forEach((task) => {
    let templateTodoList = `
          <div class="liste-element">
          <span class="list-check"></span>
          <span class="${task.completed ? "barrer" : ""}">${task.libelle}</span>
          <span>X</span>
          </div>
          `;
    milieuMidListe.insertAdjacentHTML("afterbegin", templateTodoList);
  });
}

loadData(tasks);
