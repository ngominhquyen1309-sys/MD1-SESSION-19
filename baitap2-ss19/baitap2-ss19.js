const courses = [
  {
    id: 1,
    content: 'Learn Javascript Session 01',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Anh Bách',
  },
  {
    id: 2,
    content: 'Learn Javascript Session 2',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Lâm th`',
  },
  {
    id: 3,
    content: 'Learn CSS Session 1',
    dueDate: '2023-04-17',
    status: 'Pending',
    assignedTo: 'Hiếu Ci ớt ớt',
  },
];

let tbodyEl = document.querySelector("#tbody");

function showData() {
  let c = ``;
  for (let i = 0; i < courses.length; i++) {
    c += `
            <tr>
                <td>${courses[i].id}</td>
                <td>${courses[i].content}</td>
                <td>${courses[i].dueDate}</td>
                <td>${courses[i].status}</td>
                <td>${courses[i].assignedTo}</td>
                <td>
                    <button class="btn-edit" onclick="editCourse(${courses[i].id})">Sửa</button>
                    <button class="btn-del" onclick="delCourse(${courses[i].id})">Xóa</button>
                </td>
            </tr>
    `
  }
  tbodyEl.innerHTML = c;
}

let editId = null;

function addCourse() {
  // event.preventDefault();

  let ipContent = document.querySelector(".ipContent").value;
  let ipDate = document.querySelector(".ipDate").value;
  let chooseStatus = document.querySelector(".chooseStatus").value;
  let asignedTo = document.querySelector(".asignedTo").value;
  console.log(chooseStatus);
  let newCourse = {
    id: courses.length + 1,
    content: ipContent,
    dueDate: ipDate,
    status: chooseStatus,
    assignedTo: asignedTo,
  }

  if (editId === null) {
    courses.push(newCourse);
  } else {
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].id === editId) {
        courses[i].content = ipContent;
        courses[i].dueDate = ipDate;
        courses[i].status = chooseStatus;
        courses[i].assignedTo = asignedTo;
        break;
      }
    }
  }
  document.querySelector(".ipContent").value = "";
  document.querySelector(".ipDate").value = "";
  document.querySelector(".chooseStatus").value = selected;
  document.querySelector(".asignedTo").value = "";
  editId = null;
  showData();
}


function editCourse(id) {

  editId = id;

  for (let i = 0; i < courses.length; i++) {

    if (courses[i].id === id) {

      document.querySelector(".ipContent").value = courses[i].content;

      document.querySelector(".ipDate").value = courses[i].dueDate;

      document.querySelector(".chooseStatus").value = courses[i].status;

      document.querySelector(".asignedTo").value = courses[i].assignedTo;
    }
  }
}

function delCourse(id) {

  for (let i = 0; i < courses.length; i++) {

    if (courses[i].id === id) {
      courses.splice(i, 1);
      break;
    }
  }
  showData();
}

showData();

