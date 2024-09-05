let listData = [{
    lastname: 'Нестеренко',    
    name: 'Петр',
    surename: 'Петрович',
    
    BirthDay: new Date(2001, 11, 11),
    StartYear: 2019,
    Facultet: 'Экономика'
},
{
    lastname: 'Агафонов',
    name: 'Михаил',
    surename: 'Андреевич',
    
    BirthDay: new Date(2000, 11, 18),
    StartYear: 2018,
    Facultet: 'Туризм'
},
{
    lastname: 'Романов',
    name: 'Игорь',
    surename: 'Федорович',
    
    BirthDay: new Date(2004, 09, 11),
    StartYear: 2021,
    Facultet: 'Менеджмент'
},
{
    lastname: 'Орликов',
    name: 'Константин',
    surename: 'Олегович',
    
    BirthDay: new Date(1990, 12, 12),
    StartYear: 2008,
    Facultet: 'Психология'
},
{
    lastname: 'Немов',
    name: 'Игорь',
    surename: 'Андреевич',
    
    BirthDay: new Date(1997, 12, 11),
    StartYear: 2014,
    Facultet: 'Право'
},]

let today = new Date;

function ages(student) {
        let howOld = today.getFullYear() - new Date(student.BirthDay).getFullYear();   
     return howOld
}


const $container = document.getElementById('container'),
$form = document.getElementById('form'),
$inputName = document.createElement('input'),
$inputSurname = document.createElement('input'),
$inputLastname = document.createElement('input'),
$inputAge = document.createElement('input'),
$inputStartYear = document.createElement('input'),
$inputFacultet = document.createElement('input'),
$error = document.createElement('div'),
$button = document.createElement('button'),

$app = document.getElementById('app'),
$table = document.createElement('table'),
$tableHead = document.createElement('thead'),
$tableBody = document.createElement('tbody'),
$tableHeadTr = document.createElement('tr'),
$tableHeadThFIO = document.createElement('th'),
$tableHeadThDateBirth = document.createElement('th'),
$tableHeadThStartYear = document.createElement('th'),
$tableHeadThFacultet = document.createElement('th'),

$filter = document.getElementById('filter'),
$filterH2 = document.createElement('h2'), 
$inputFilterFIO = document.createElement('input'),
$inputFilterFinishYear = document.createElement('input'),
$inputFilterStartYear = document.createElement('input'),
$inputFilterFacultet = document.createElement('input'),
$inputBtnFilter = document.createElement('button');

$table.classList.add('table',  'table-bordered', 'border-primary');
$inputName.classList.add('form-control', 'mb-3');
$inputSurname.classList.add('form-control', 'mb-3');
$inputLastname.classList.add('form-control', 'mb-3');
$inputAge.classList.add('form-control', 'mb-3');
$inputStartYear.classList.add('form-control', 'mb-3');
$inputFacultet.classList.add('form-control', 'mb-5');
$error.classList.add('invisible', 'text-danger');
$button.classList.add('btn', 'btn-outline-success', 'mb-3');
$filter.classList.add('mb-3', 'd-flex', 'flex-column')
$inputFilterFinishYear.classList.add('form-control', 'mb-1');
$inputFilterFIO.classList.add('form-control', 'mb-1');
$inputFilterStartYear.classList.add('form-control', 'mb-1');
$inputFilterFacultet.classList.add('form-control', 'mb-1')
$inputBtnFilter.classList.add('btn', 'btn-primary');

$tableHeadThFIO.textContent = 'ФИО';
$tableHeadThDateBirth.textContent = 'Дата рождения и возраст';
$tableHeadThStartYear.textContent = 'Годы обучения и номер курса';
$tableHeadThFacultet.textContent = 'Факультет';
$button.textContent = 'Добавить пользователя';
$inputBtnFilter.textContent = 'Фильтровать';
$filterH2.textContent = 'Фильтрация';

$inputAge.setAttribute('type', 'text'); 
$inputAge.setAttribute('min', '1900-01-01');
$inputAge.setAttribute('max', today.getDate()); 
$inputSurname.setAttribute('placeholder', 'Отчество');
$inputName.setAttribute('placeholder', 'Имя');
$inputLastname.setAttribute('placeholder', 'Фамилия');
$inputAge.setAttribute('placeholder', 'Дата рождения');
$inputStartYear.setAttribute('placeholder', 'Год начала обучения');
$inputStartYear.setAttribute('type', 'number');
$inputStartYear.setAttribute('min', '2000');
$inputStartYear.setAttribute('max', today.getFullYear());
$inputFacultet.setAttribute('placeholder', 'Факультет');
$tableHeadThStartYear.setAttribute('role', 'button');
$tableHeadThDateBirth.setAttribute('role', 'button');
$tableHeadThFIO.setAttribute('role', 'button');
$tableHeadThFacultet.setAttribute('role', 'button');
$inputFilterFIO.setAttribute('placeholder', 'ФИО');
$inputFilterFinishYear.setAttribute('placeholder', 'Год окончания обучения');
$inputFilterFinishYear.setAttribute('type', 'number');
$inputFilterStartYear.setAttribute('placeholder', 'Год начала обучения');
$inputFilterStartYear.setAttribute('type', 'number');
$inputFilterFacultet.setAttribute('placeholder', 'Факультет')



$inputAge.addEventListener('focus', function(){
$inputAge.setAttribute('type', 'date');    
});
$inputAge.addEventListener('blur', function(){
$inputAge.setAttribute('type', 'text');    
});

$form.append($inputName);
$form.append($inputSurname);
$form.append($inputLastname);
$form.append($inputAge);
$form.append($inputStartYear);
$form.append($inputFacultet);
$form.append($error);
$form.append($button);

$filter.append($filterH2);
$filter.append($inputFilterFIO);
$filter.append($inputFilterFinishYear);
$filter.append($inputFilterStartYear);
$filter.append($inputFilterFacultet);
$filter.append($inputBtnFilter);

$tableHeadTr.append($tableHeadThFIO);
$tableHeadTr.append($tableHeadThDateBirth);
$tableHeadTr.append($tableHeadThStartYear);
$tableHeadTr.append($tableHeadThFacultet);
$tableHead.append($tableHeadTr)
$table.append($tableHead);
$table.append($tableBody);
$app.append($table);



function returnDate(student) {
const yyyy = new Date(student.BirthDay).getFullYear();
let mm = new Date(student.BirthDay).getMonth() + 1;
let dd = new Date(student.BirthDay).getDate();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
return dd + '.' + mm + '.' + yyyy + ' (' + ages(student) + ' лет)';
}

function createUserTr(user) {
let finishDate = +user.StartYear + 4;

const $userTr = document.createElement('tr'),
$userFIO = document.createElement('th'),
$userDateBirth = document.createElement('th'),
$userStartYear = document.createElement('th'),
$userFacultet = document.createElement('th');
$userFIO.textContent = user.fio;
$userDateBirth.textContent = returnDate(user);
$userStartYear.textContent = user.StartYear + "-" + finishDate + " " + "(" + (today.getFullYear() - user.StartYear) + " " + "курс)";
$userFacultet.textContent = user.Facultet;

if (finishDate == today.getFullYear()) {
    if (8 < today.getMonth()) {
        $userStartYear.textContent = user.StartYear + "-" + finishDate + " " + "(Закончил)";
    }
}

if (finishDate < today.getFullYear()) {
    $userStartYear.textContent = user.StartYear + "-" + finishDate + " " + "(Закончил)";
}

$tableBody.append($userTr)
$userTr.append($userFIO);
$userTr.append($userDateBirth);
$userTr.append($userStartYear); 
$userTr.append($userFacultet); 

return $userTr
}

// рендер 
function addUser(arrData) {
$tableBody.innerHTML = '';
const copyListData = [...arrData];
for (const user of copyListData) {
    user.fio = user.lastname + ' ' + user.name + ' ' + user.surename;
}


// Отрисовка
for (const user of copyListData) {
  const newTr = createUserTr(user);
  $tableBody.append(newTr)
}
}

addUser(listData);

// Добавление
$form.addEventListener('submit', function(e) {
e.preventDefault();

if ($inputName.value.trim() == "") {
    $error.classList.remove('invisible')
    $error.textContent = 'Введите Имя'
    return
};

if ($inputSurname.value.trim() == "") {
    $error.classList.remove('invisible')
    $error.textContent = 'Введите Отчество'
    return
};

if ($inputLastname.value.trim() == "") {
    $error.classList.remove('invisible')
    $error.textContent = 'Введите Фамилию'
    return
};

if ($inputAge.value.trim() == "") {
    $error.classList.remove('invisible')
    $error.textContent = 'Введите возраст от 01.01.1900'
    return
};

if ($inputStartYear.value.trim() == "") {
    $error.classList.remove('invisible')
    $error.textContent = 'Введите год начала обучения от 2000 года'
    return
};

if ($inputFacultet.value.trim() == "") {
    $error.classList.remove('invisible')
    $error.textContent = 'Введите факультет'
    return
};

$error.classList.add('invisible')

let correctName = $inputName.value[0].toUpperCase() + $inputName.value.slice(1),
    correctSurname = $inputSurname.value[0].toUpperCase() + $inputSurname.value.slice(1),
    correctLastname = $inputLastname.value[0].toUpperCase() + $inputLastname.value.slice(1),
    correctFacultet = $inputFacultet.value[0].toUpperCase() + $inputFacultet.value.slice(1);

listData.push({
    name: correctName.trim(),
    surename: correctSurname.trim(),
    lastname: correctLastname.trim(),
    BirthDay: $inputAge.value.trim(),
    StartYear: $inputStartYear.value.trim(),
    Facultet: correctFacultet.trim()
});

addUser(listData)
$inputName.value = '';
$inputSurname.value = '';
$inputLastname.value = '';
$inputAge.value = '';
$inputStartYear.value = '';
$inputFacultet.value = '';
})

// Сортировка
$tableHeadThStartYear.addEventListener('click', function() {
let sortListData = listData.sort(function(a, b) {  
    if (a.StartYear > b.StartYear) {
       return -1
    }
})
addUser(sortListData);
filter();
})

$tableHeadThFIO.addEventListener('click', function() {
let sortListData = listData.sort(function(a, b) {  
    if (a.lastname == b.lastname) {
        if (a.name < b.name) return -1
        if (a.name == b.name) {
            if (a.surename < b.surename) return -1
        } 
    } 
    if (a.lastname < b.lastname) return -1;
});
addUser(sortListData);
filter();
})

$tableHeadThFacultet.addEventListener('click', function() {
let sortListData = listData.sort(function(a, b) {  
    if (a.Facultet < b.Facultet) {
       return -1
    }
})
addUser(sortListData);
filter();
})

$tableHeadThDateBirth.addEventListener('click', function() {
let sortListData = listData.sort(function(a, b) {  
     first = new Date(a.BirthDay).getFullYear();
     second = new Date(b.BirthDay).getFullYear();
    if (first < second) {
       return -1
    }
})
addUser(sortListData);
$inputFilterFinishYear.value = '';
$inputFilterStartYear.value = '';
})

// Фильтрация 

function filter() {
let newList = [...listData];
let filterFacultet = ($inputFilterFacultet.value)[0].toUpperCase() + $inputFilterFacultet.value.slice(1);
let filterFio = $inputFilterFIO.value,
    filterFinishYear = $inputFilterFinishYear.value,
    filterStartYear = $inputFilterStartYear.value;
    
for (const user of newList) {
    user.fio = user.lastname + ' ' + user.name + ' ' + user.surename;
}
let newArr = newList.filter(function(item) {
    if (!String(item.Facultet).includes(filterFacultet.trim()) && filterFacultet.trim() !== '') {
        return false
    } 
    if (!String(item.fio).includes(filterFio) && filterFio !== '') {
        return false
    }
    if (!String(+item.StartYear + 4).includes(filterFinishYear) && filterFinishYear !== '') {
        return false
    }
    if (!String(item.StartYear).includes(filterStartYear) && filterStartYear !== '') {
        return false
    }
    return true
})
addUser(newArr);
$inputFilterFacultet.value = '';
$inputFilterFIO.value = '';
$inputFilterFinishYear.value = '';
$inputFilterStartYear.value = '';
};

$inputBtnFilter.addEventListener('click', function(e) {
e.preventDefault;
filter();
})