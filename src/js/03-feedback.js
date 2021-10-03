'use strict';

import throttle from "lodash.throttle";


const inputNode = document.querySelector('.feedback-form')
const inputEmail = document.querySelector('.feedback-form input')
const inputTextarea = document.querySelector('.feedback-form textarea')
const inputBtn = document.querySelector('.feedback-form button')

let obj = {};
const STORAGE_KEY = "feedback-form-state";

inputNode.addEventListener('input', throttle(inputText, 500));

inputBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(obj);
  localStorage.removeItem(STORAGE_KEY);
  inputNode.reset();
  
} )
  


function inputText({ email, password }) {
  email = inputEmail.value;
  password = inputTextarea.value;

  obj.email = email;
  obj.password = password;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
}





if (localStorage.getItem(STORAGE_KEY)) {
  const parseObj  = JSON.parse(localStorage.getItem(STORAGE_KEY))
  inputEmail.value = parseObj.email 
  inputTextarea.value = parseObj.password 
}

