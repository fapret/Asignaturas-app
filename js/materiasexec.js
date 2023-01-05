const allMateriasSelect = document.getElementById("allMaterias");
const availableMateriasSelect = document.getElementById("availableMaterias");
const courseObtainedSelect = document.getElementById("courseObtained");
const examObtainedSelect = document.getElementById("examObtained");
const markCourse1 = document.getElementById("markCourse1");
const markCourse2 = document.getElementById("markCourse2");
const markExam1 = document.getElementById("markExam1");
const markExam2 = document.getElementById("markExam2");

var totalCreditos = document.getElementById("totalCreditos");
var superCat0 = document.getElementById("superCat0");
var superCat1 = document.getElementById("superCat1");
var superCat2 = document.getElementById("superCat2");
var cat0 = document.getElementById("cat0");
var cat1 = document.getElementById("cat1");
var cat2 = document.getElementById("cat2");
var cat3 = document.getElementById("cat3");
var cat4 = document.getElementById("cat4");
var cat5 = document.getElementById("cat5");
var cat6 = document.getElementById("cat6");
var cat7 = document.getElementById("cat7");
var cat8 = document.getElementById("cat8");
var cat9 = document.getElementById("cat9");
var cat10 = document.getElementById("cat10");
var cat11 = document.getElementById("cat11");

for (let i = 0; i < materias.length; i++) {
  let materia = materias[i];
  addToSelect(allMateriasSelect, materia.name, materia.id);
}

function addCreditos(category, creditos){
  if(category == undefined){
    let totalCreditosAmount = parseInt(totalCreditos.innerHTML) + creditos;
    totalCreditos.innerHTML = totalCreditosAmount;
    return;
  }
  if(category < 2){
    //Add to SuperCat 0
    let superCat0Amount = parseInt(superCat0.innerHTML) + creditos;
    superCat0.innerHTML = superCat0Amount;
  }
  else if(category < 11){
    //Add to SuperCat 1
    let superCat1Amount = parseInt(superCat1.innerHTML) + creditos;
    superCat1.innerHTML = superCat1Amount;
  }
  else if(category == 11){
    //Add to SuperCat 2
    let superCat2Amount = parseInt(superCat2.innerHTML) + creditos;
    superCat2.innerHTML = superCat2Amount;
  }
  let categoryElement;
  switch (category) {
    case 0:
      categoryElement = cat0;
      break;
    case 1:
      categoryElement = cat1;
      break;
    case 2:
      categoryElement = cat2;
      break;
    case 3:
      categoryElement = cat3;
      break;
    case 4:
      categoryElement = cat4;
      break;
    case 5:
      categoryElement = cat5;
      break;
    case 6:
      categoryElement = cat6;
      break;
    case 7:
      categoryElement = cat7;
      break;
    case 8:
      categoryElement = cat8;
      break;
    case 9:
      categoryElement = cat9;
      break;
    case 10:
      categoryElement = cat10;
      break;
    case 11:
      categoryElement = cat11;
      break;
    default:
      break;
  }
  let categoryElementAmount = parseInt(categoryElement.innerHTML) + creditos;
  categoryElement.innerHTML = categoryElementAmount;
  let totalCreditosAmount = parseInt(totalCreditos.innerHTML) + creditos;
  totalCreditos.innerHTML = totalCreditosAmount;
}

updateAvailableMaterias(availableMateriasSelect, courseObtainedSelect, examObtainedSelect);

markCourse1.addEventListener("click", () => {
  let collection = allMateriasSelect.selectedOptions;
  for (let i = 0; i < collection.length; i++) {
    addToSelect(courseObtainedSelect,  collection[i].innerHTML, collection[i].value);
  }
  updateAvailableMaterias(availableMateriasSelect, courseObtainedSelect, examObtainedSelect);
});

markCourse2.addEventListener("click", () => {
  let collection = availableMateriasSelect.selectedOptions;
  for (let i = 0; i < collection.length; i++) {
    addToSelect(courseObtainedSelect,  collection[i].innerHTML, collection[i].value);
  }
  updateAvailableMaterias(availableMateriasSelect, courseObtainedSelect, examObtainedSelect);
});

markExam1.addEventListener("click", () => {
  let collection = allMateriasSelect.selectedOptions;
  for (let i = 0; i < collection.length; i++) {
    disableOption(allMateriasSelect, collection[i].value);
    addToSelect(examObtainedSelect,  collection[i].innerHTML, collection[i].value);
    removeFromSelect(courseObtainedSelect, collection[i].value);
    removeFromSelect(availableMateriasSelect, collection[i].value);
  }
  updateAvailableMaterias(availableMateriasSelect, courseObtainedSelect, examObtainedSelect);
});

markExam2.addEventListener("click", () => {
  let collection = availableMateriasSelect.selectedOptions;
  for (let i = 0; i < collection.length; i++) {
    let materia = getMateria(collection[i].value);
    disableOption(allMateriasSelect, materia.id);
    addToSelect(examObtainedSelect,  collection[i].innerHTML, materia.id);
    removeFromSelect(courseObtainedSelect, materia.id);
    removeFromSelect(availableMateriasSelect, materia.id);
    addCreditos(materia.Cat, materia.creditos);
  }
  updateAvailableMaterias(availableMateriasSelect, courseObtainedSelect, examObtainedSelect);
});
