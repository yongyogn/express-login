"use strict";

const id = document.querySelector("#id"), // #은 태그가 id로 담겨 있는 객체 찾기
      pw = document.querySelector("#pw"),
loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login); //click이라는 이벤트가 발생하면 login이라는 함수 작동

function login(){
    const req = {
        id: id.value,
        pw: pw.value
    };
    console.log(req)
}