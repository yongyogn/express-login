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

    fetch("/login", {   // login 경로에서
        method: "POST", // POST라는 메소드로
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req) // JSON 객체는 문자열로 감싸져서 출력됨
                                  // 그냥 req는 {id: "id", pw: "pw"}형태, JSON.stringify(req)는 {"id": "id", "pw": "pw"} 형태
    })
}