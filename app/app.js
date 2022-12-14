"use stirct"

// 모듈
const express = require('express'); // require를 사용하여 express라는 모듈 다운
const bodyParser = require("body-parser"); // home.ctrl.js 파일에서 login.js의 fetch함수에서 body로 넘겨준 것을 잘 받기 위한 모듈 설치
const app = express(); // app이라는 변수에 express를 실행시켜서 넣어주기
const PORT = 3000;

// 라우팅
const home = require('./src/routes/home'); // 괄호 안의 경로에 있는 파일(index.js)을 읽어달라는 요청


// View 분리
app.set('views', './src/views'); // 화면 뷰를 저장하고 관리해줄 파일을 ./views로 지정
app.set('view engine', 'ejs'); // views 폴더 안에 생성될 html코드들을 어떤 엔진으로 해석할지 결정('ejs', 그냥 html이랑 비슷)
app.use(express.static(`${__dirname}/src/public`)) // js폴더로 접근할 수 있도록 해주는 미들웨어, __dirname은 현재 파일이 있는 디렉토리 이름
                                                   // 해당 경로(public폴더)를 정적 경로로 추가해주겠다는 의미
app.use(bodyParser.json()); // bodyParser 미들웨어 등록
app.use(bodyParser.urlencoded({extended: true})); // url을 통해 전달되는 한글, 공백 등의 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use('/', home); // use는 미들웨어를 등록해주는 메소드, index.js의 라우터를 받아옴


module.exports = app; // 모듈화를 위해 내보낸 app.listen 함수가 www.js 파일에서도 app이라는 객체를 인식할 수 있도록 내보내기