"use strict";

// elements



const Email = document.getElementById("email");
const Password = document.getElementById("psw");
const PasswordRepeat = document.getElementById("psw-repeat");
const Radio = document.getElementById("toggleRadio");
const RegButton = document.querySelector(".btnR");
const mailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
Email.focus();

// Registor Button Functionality
RegButton.addEventListener("click", function (e) {
  e.preventDefault();
  let EmaiInput = Email.value.trim();
  let PassInput = Password.value.trim();
  let PassRInput = PasswordRepeat.value.trim();
  const passChar = ['a','b','c','d','e','f','g','h'];
  console.log(passChar.length);

  if (EmaiInput === "" || PassInput === "" || PassRInput === "") {
    return alert("Please fill out all fields");
  }

  if (!mailFormat.test(EmaiInput)) {
    return alert("Enter a valid email");
  }

  if (PassInput !== PassRInput) {
    return alert("Password Doesn't Match");
  }

  if (PassInput.length && PassRInput.length < passChar.length) {
    
    return alert("Password must 8 characters or more!");
  }

  if (!Radio.checked) {
    return alert("please check the Terms and Conditions");
  }
  
  else {
    alert("Sucessfully Registered");
    window.location.href = "register.html";
  }
 
  
});




