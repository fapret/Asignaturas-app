"use strict";

function emptySelect(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}

function updateAvailableMaterias(selectAvailable, selectCourses, selectExams){
  emptySelect(selectAvailable);
  for (let i = 0; i < materias.length; i++) {
    let materia = materias[i];
    if(!isInSelect(selectExams, materia.id) && materia.Req != undefined){
      let available = false;
      for(let k = 0; k < materia.Req?.length && !available; k++){
        let examsCopy = materia.Req[k]?.examReq;
        let coursesCopy = materia.Req[k]?.courseReq;
        let examsReq = false;
        let coursesReq = false;
        if(examsCopy){
          let orExams = materia.Req[k].examReq.split(/\|\||\&\&/);
          for(let j = 0; j < orExams.length; j++){
            if(isInSelect(selectExams, orExams[j])){
              examsCopy = examsCopy.replace(orExams[j], "true");
              coursesCopy = coursesCopy?.replace(orExams[j], "true");
            } else {
              examsCopy = examsCopy.replace(orExams[j], "false");
            }
          }
          //console.log(examsCopy);
          examsReq = eval(examsCopy);
        } else {
          examsReq = true;
        }
        if(coursesCopy){
          let orCourses = materia.Req[k].courseReq.split(new RegExp(/\|\||\&\&/));
          for(let j = 0; j < orCourses.length; j++){
            if(isInSelect(selectCourses, orCourses[j]) || isInSelect(selectExams, orCourses[j])){
              coursesCopy = coursesCopy.replace(orCourses[j], "true");
            } else {
              coursesCopy = coursesCopy.replace(orCourses[j], "false");
            }
          }
          coursesReq = eval(coursesCopy);
        } else {
          coursesReq = true;
        }
        //TODO check creditos
        if(examsReq && coursesReq){
          addToSelect(selectAvailable, materia.name, materia.id);
          materia.ExamObtained = true;
          available = true;
        }
      }
    }
    else if(!isInSelect(selectExams, materia.id)){
      addToSelect(selectAvailable, materia.name, materia.id);
    }
  }
}

function isInSelect(select, idmateria){
  for (let i = 0; i < select.options.length; i++) {
    let value = select.options[i].value;
    if(value == idmateria) {
      return true;
    }
  }
  return false;
}

function addToSelect(select, materia, idmateria){
  let option = document.createElement('option');
  option.setAttribute('value', idmateria);
  option.appendChild(document.createTextNode(materia));
  select.appendChild(option);
}

function removeFromSelect(select, idmateria){
  for (let i = 0; i < select.options.length; i++) {
    let value = select.options[i].value;
    if(value == idmateria) {
        select.remove(i);
        i--;
    }
  }
}

function disableOption(select, idmateria){
  for (let i = 0; i < select.getElementsByTagName("option").length; i++) {
    let option = select.getElementsByTagName("option")[i];
    let value = option.value;
    if(value == idmateria) {
        option.disabled = true;
        break;
    }
  }
}

function setCourseObtained(select, materia, idmateria){
  addToSelect(select, materia, idmateria);
  updateAvailableMaterias();
}

function getMateria(idmateria){
  for (let i = 0; i < materias.length; i++) {
    let materia = materias[i];
    if(materia.id == idmateria)
      return materia;
  }
  return undefined;
}