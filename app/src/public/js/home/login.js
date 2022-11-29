"use strict";

const id = document.querySelector("#id"),
      pw = document.querySelector("#pw"),
      loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };
    console.log(req);
}