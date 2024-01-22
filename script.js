const getId = document.getElementById("age-table");
console.log(getId);

const getLabel = document.querySelectorAll("#age-table label");
console.log(getLabel);

const getTd = document.querySelectorAll("#age-table td")[0]; //если убдрать код ниже, то отображается <td>Age</td>
console.log(getTd);

const getForm = document.querySelectorAll("form")[0];
console.log(getForm);

const getFirstInput = document.querySelectorAll("input")[0];
console.log(getFirstInput);

const getLastInput = document.querySelectorAll("input")[8]; //вручную посчитала сколько инпутов
console.log(getLastInput);

// const getInput = document.querySelectorAll("input");
// getInput[getInput.length - 1];
// console.log(getInput);

//2

let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert(body.firstChild.data); // выведет "BODY"
// написала тут и вывела в браузер, показал alert BODY
