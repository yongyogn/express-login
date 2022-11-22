"use strict";

const app = require("../app.js") // 상위폴더('../')로 가서 app.js 불러오기

app.listen(3000, ()=>{  // listen 명령어로 서버 띄우기(3000번 포트로 열어달라는 뜻)
    console.log('서버 가동');   // 서버 콘솔에 간단하게 '서버 가동'이라고만 띄우기
});