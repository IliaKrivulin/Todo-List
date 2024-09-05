// Список студентов
let listData = [{
    name: 'Игорь',
    surename: 'Иванович',
    lastname: 'Кривцов',
    birthday: new Date(1994, 6, 9), 
    startlearn: '2021',
    faculty: 'Психологии'
},
{
    name: 'Маргарита',
    surename: 'Александровна',
    lastname: 'Семёнова',
    birthday: new Date(1998, 11, 29),
    startlearn: '2020',
    faculty: 'Юридический'
},
{
    name: 'Евгения',
    surename: 'Анатольевна',
    lastname: 'Ягодкина',
    birthday: new Date(1997, 1, 17),
    startlearn: '2019',
    faculty: 'Экономический'
},
{
    name: 'Светлана',
    surename: 'Олеговна',
    lastname: 'Петракова',
    birthday: new Date(2002, 5, 5),
    startlearn: '2018',
    faculty: 'Философский'
},
{
    name: 'Александр',
    surename: 'Иванович',
    lastname: 'Протасов',
    birthday: new Date(2001, 12, 30),
    startlearn: '2017',
    faculty: 'Исторический'
},
]

let sortColumnFlag = 'fio',
sortDirFlag = true

// Создание элементов
const $app = document.getElementById('app'),
$addForm = document.getElementById('add-form'),
$nameInp = document.getElementById('add-form__name-inp'),
$surenameInp = document.getElementById('add-form__surename-inp'),
$lastnameInp = document.getElementById('add-form__lastname-inp'),
$birthdayInp = document.getElementById('add-form__birthday-inp'),
$startlearnInp = document.getElementById('add-form__startlearn-inp'),
$facultyInp = document.getElementById('add-form__faculty-inp'),
$sortFIOBtn = document.getElementById('sort__fio'),
$sortbirthdayBtn = document.getElementById('sort__birthday'),
$sortstartlearnBtn = document.getElementById('sort__startlearn'),
$sortfacultyBtn = document.getElementById('sort__faculty'),

$filterForm = document.getElementById('filter-form'),
$fioFilterInp = document.getElementById('filter-form__fio-inp'),
$facultyFilterInp = document.getElementById('filter-form__faculty-inp'),
/*
$startlearnFilterInp = document.getElementById('filter-form__startlearn-inp'),
$endlearnFilterInp = document.getElementById('filter-form__endlearn-inp'),
*/
$table = document.createElement('table'),
$tableHead = document.createElement('thead'),
$tableBody = document.createElement('tbody'),

$tableHeadTr = document.createElement('tr'),
$tableHeadThFIO = document.createElement('th'),
$tableHeadThbirthday = document.createElement('th'),
$tableHeadThstartlearn = document.createElement('th'),
$tableHeadThFaculty = document.createElement('th');

$table.classList.add('table', 'table-dark')

$tableHeadThFIO.textContent = 'ФИО'
$tableHeadThbirthday.textContent = 'Дата рождения и возраст'
$tableHeadThstartlearn.textContent = 'Годы обучения и номер курса'
$tableHeadThFaculty.textContent = 'Факультет'
$tableHeadTr.append($tableHeadThFIO)
$tableHeadTr.append($tableHeadThbirthday)
$tableHeadTr.append($tableHeadThstartlearn)
$tableHeadTr.append($tableHeadThFaculty)

$tableHead.append($tableHeadTr)
$table.append($tableHead)
$table.append($tableBody)
$app.append($table)


function getBirthday(dateBirthday) {
    let birthday = dateBirthday.toISOString().split('T')[0].split('-');
    let correctBirthday = birthday[2] + '.' +  birthday[1] + '.' + birthday[0];

    return correctBirthday;
};

function getAge(correctBirthday) {
    return ` (${((new Date() - new Date(correctBirthday)) / (24 * 3600 * 365.25 * 1000)) | 0 } лет)`;
};


// Создание Tr одного пользователя
function createUserTr(oneUser) {
const $userTr = document.createElement('tr'),
    $userFIO = document.createElement('th'),
    $userbirthday = document.createElement('th'),
    $userstartlearn = document.createElement('th'),
    $userFaculty = document.createElement('th');

$userFIO.textContent = oneUser.fio
$userbirthday.textContent = oneUser.birthday
$userstartlearn.textContent = oneUser.startlearn
$userFaculty.textContent = oneUser.faculty

$userTr.append($userFIO)
$userTr.append($userbirthday)
$userTr.append($userstartlearn)
$userTr.append($userFaculty)

return $userTr
}


// Фильтрация 
function filter(arr, prop, value) {
return arr.filter(function(oneUser) {
    if (oneUser[prop].includes(value.trim())) return true
});
}

// Рендер
function render(arrData) {
$tableBody.innerHTML = '';
let copyListData = [...arrData]

// Подготовка
for (const oneUser of copyListData) {
    oneUser.fio = oneUser.name + ' ' + oneUser.surename + ' ' + oneUser.lastname
    oneUser.birthYear = 2023 - oneUser.birthday
/*
Добавить подготовку для фильтрации по году начала / окончания обучения
*/
}

// Сортировка
copyListData = copyListData.sort(function(a, b) {
    let sort = a[sortColumnFlag] < b[sortColumnFlag]
    if (sortDirFlag == false) sort = a[sortColumnFlag] > b[sortColumnFlag]
    if (sort) return -1
})

// Фильтрация
if ($fioFilterInp.value.trim() !== "") {
    copyListData = filter(copyListData, 'fio', $fioFilterInp.value)
}

if ($facultyFilterInp.value.trim() !== "") {
    copyListData = filter(copyListData, 'faculty', $facultyFilterInp.value)
}
/*

if ($birthdayFilterInp.value.trim() !== "") {
    copyListData = filter(copyListData, 'birthday', $birthdayFilterInp.value)
}

if ($endlearnFilterInp.value.trim() !== "") {
    copyListData = filter(copyListData, 'endlearn', $endlearnFilterInp.value)
}
*/
// Отрисовка
for (const oneUser of copyListData) {
    const $newTr = createUserTr(oneUser)
    $tableBody.append($newTr)
}
}

render(listData)

// Добавление
$addForm.addEventListener('submit', function(event) {
event.preventDefault()

// Валидация
if ($nameInp.value.trim() == "") {
    alert('Введите имя!')
    return
}

if ($surenameInp.value.trim() == "") {
    alert('Введите отчество!')
    return
}

if ($lastnameInp.value.trim() == "") {
    alert('Введите фамилию!')
    return
}

if ($birthdayInp.value.trim() == "") {
    alert('Введите дату рождения!')
    return
}

if ($startlearnInp.value.trim() == "") {
    alert('Введите год начала обучения!')
    return
}

if ($facultyInp.value.trim() == "") {
    alert('Введите факультет!')
    return
}

listData.push({
    name: $nameInp.value.trim(),
    surename: $surenameInp.value.trim(),
    lastname: $lastnameInp.value.trim(),
    birthday: $birthdayInp.value.trim(),
    startlearn: $startlearnInp.value.trim(),
    faculty: $facultyInp.value.trim()
})

render(listData)
})

// Клики сортировки
$sortFIOBtn.addEventListener('click', function() {
sortColumnFlag = 'fio'
sortDirFlag = !sortDirFlag
render(listData)
})

$sortbirthdayBtn.addEventListener('click', function() {
sortColumnFlag = 'birthday'
sortDirFlag = !sortDirFlag
render(listData)
})

/*
$sorttartlearnBtn.addEventListener('click', function() {
sortColumnFlag = 'tartlearn'
sortDirFlag = !sortDirFlag
render(listData)
})

$sortfacultyBtn.addEventListener('click', function() {
sortColumnFlag = 'faculty'
sortDirFlag = !sortDirFlag
render(listData)
})
*/

// Фильтр
$filterForm.addEventListener('submit', function(event) {
event.preventDefault()
})

$fioFilterInp.addEventListener('input', function() {
render(listData)
})
$facultyFilterInp.addEventListener('input', function() {
render(listData)
})

/*
$startlearnFilterInp.addEventListener('input', function() {
render(listData)
})
$endlearnFilterInp.addEventListener('input', function() {
render(listData)
})
*/