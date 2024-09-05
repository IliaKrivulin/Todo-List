const SERVER_URL = 'http://localhost:3000'

async function serverAddSudent(obj) {
    let response = await fetch(SERVER_URL + '/api/students', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    })

    let data = await response.json()

    return data
}

async function serverGetSudents() {
    let response = await fetch(SERVER_URL + '/api/students', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    })

    let data = await response.json()

    return data
}


async function serverDeleteSudent(id) {
    let response = await fetch(SERVER_URL + '/api/students/' + id, {
        method: "DELETE",
    })

    let data = await response.json()

    return data
}

let serverData = await serverGetSudents()

//let listData = [{
//   lastname: 'Нестеренко',    
//   name: 'Петр',
//   surename: 'Петрович',
//   birthday: new Date(2001, 11, 11),
//   studyStart: 2019,
//   faculty: 'Экономика'
//},
//{
//   lastname: 'Агафонов',
//   name: 'Михаил',
//   surename: 'Андреевич',
//   birthday: new Date(2000, 11, 18),
//   studyStart: 2018,
//   faculty: 'Туризм'
//},
//{
//   lastname: 'Романов',
//   name: 'Игорь',
//   surename: 'Федорович',
//   birthday: new Date(2004, 09, 11),
//   studyStart: 2021,
//   faculty: 'Менеджмент'
//},
//{
//   lastname: 'Орликов',
//   name: 'Константин',
//   surename: 'Олегович',
//   birthday: new Date(1990, 12, 12),
//   studyStart: 2008,
//   faculty: 'Психология'
//},
//{
//   lastname: 'Немов',
//   name: 'Игорь',
//   surename: 'Андреевич',
//   birthday: new Date(1997, 12, 11),
//   studyStart: 2014,
//   faculty: 'Право'
//}
//]
 
let listStudents = []

if (serverData) {
    listStudents = serverData
}


function formatDate(date) {
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

function $getNewStudentTR(studObj) {
    const $tr = document.createElement("tr")
    const $tdFIO = document.createElement("td")
    const $tdBirthday = document.createElement("td")
    const $tdfaculty = document.createElement("td")
    const $tdStudyStart = document.createElement("td")
    const $tdDelete = document.createElement("td")
    const $btnDelete = document.createElement("button")

    $btnDelete.classList.add("btn", "btn-danger", "w-100")
    $btnDelete.textContent = "Удалить"

    $tdFIO.textContent = `${studObj.lastname} ${studObj.name} ${studObj.surname}`
    $tdBirthday.textContent = formatDate(new Date(studObj.birthday))
    $tdfaculty.textContent = studObj.faculty
    $tdStudyStart.textContent = studObj.studyStart

    $btnDelete.addEventListener("click", async function() {
        await serverDeleteSudent(studObj.id)
        $tr.remove()
    })

    $tdDelete.append($btnDelete)
    $tr.append($tdFIO, $tdBirthday, $tdfaculty, $tdStudyStart, $tdDelete)
    return $tr
}

function redner(arr) {
    let copyArr = [...arr]

    const $studTable = document.getElementById("stud-table")


    $studTable.innerHTML = ''
    for (const studObj of copyArr) {
        const $newTr = $getNewStudentTR(studObj)
        $studTable.append($newTr)
    }
}

redner(listStudents)

document.getElementById("add-form").addEventListener("submit", async function(event) {
    event.preventDefault()

    let newStudentObj = {
        name: document.getElementById("name-inp").value,
        lastname: document.getElementById("lastname-inp").value,
        surname: document.getElementById("surname-inp").value,
        birthday: new Date(document.getElementById("birthday-inp").value),
        faculty: document.getElementById("faculty-inp").value,
        studyStart: document.getElementById("studyStart-inp").value,
    }

    let serverDataObj = await serverAddSudent(newStudentObj)

    serverDataObj.birthday = new Date(serverDataObj.birthday)

    listStudents.push(serverDataObj)

    console.log(listStudents);
    redner(listStudents)
})