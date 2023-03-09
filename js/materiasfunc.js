"use strict";

var coursebitField = "";
var examsbitField = "";
for(let i = 0; i < materias.length; i++){
  coursebitField += "0";
  examsbitField += "0";
}

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
        let creds = materia.Req[k]?.credReq;
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
        let credsBool = true;
        if(creds != undefined && creds > parseInt(totalCreditos.innerHTML))
          credsBool = false;

        if(examsReq && coursesReq && credsBool){
          addToSelect(selectAvailable, materia.name, materia.id);
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
        return;
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

function getUpdatedBitField(bitField, materia, value = true){
  let found = false;
  let i;
  for(i = 0; !found && i < materias.length; i++){
    let materiaAux = materias[i];
    if(materiaAux.id == materia){
      found = true;
    }
  }
  if(!found)
    return;
  if(value){
    return bitField.substring(0, i) + "1" + bitField.substring(i+1);
  }
  else
    return bitField.substring(0, i) + "0" + bitField.substring(i+1);
}

function getBitFieldShrinked(bitField){
  let out = "";
  for(let i = 0; i < bitField.length; i++){
    let localChar = 0;
    let j;
    for(j = i; j < 32 && j < bitField.length; j++){
      let pos = j - i;
      let value = bitField.charAt(j);
      if(value)
        localChar |= Math.pow(2, pos);
      else
        localChar ^= Math.pow(2, pos);
    }
    i = j;
    out += String.fromCharCode(';'.charCodeAt(0) + localChar);
  }
  return out;
}

function loadShrinkedBitfield(shrinkedBitfield, bitField){
  //TODO
}
