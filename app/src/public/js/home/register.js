"use strict";

const id = document.querySelector("#id"),
      name = document.querySelector("#name"),
      pw = document.querySelector("#pw"),
      confirmPw = document.querySelector("#cofirm-pw"),
      registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
        confirmPw: confirmPw.value,
    };

    fetch("/register", {   // register 경로에서
        method: "POST",    // http 메소드 중 POST라는 메소드로 데이터 전달
        headers: {         // 전달하는 데이터가 json 형식이라는 것을 명시
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req) // JSON 객체는 문자열로 감싸져서 출력됨
                                  // 그냥 req는 {id: "id", pw: "pw"}형태, JSON.stringify(req)는 {"id": "id", "pw": "pw"} 형태
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {          // res.success가 true이면
                location.href = "/"     // "/" 경로로 이동
            } else{
                alert(res.msg);         // res.success가 false이면 res에 있는 msg를 경고창으로 띄움
            }
        })
        .catch((err) => {   // 로그인 중 에러 발생 시 console에 에러 표시
            console.error(new Error("로그인 중 에러 발생")); // 
        });
}