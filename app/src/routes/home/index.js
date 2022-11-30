"use strict"

const express = require('express');
const router = express.Router();

// home.ctrl.js에서 넘겨준 오브젝트 받기
const ctrl = require("./home.ctrl");

router.get('/', ctrl.hello);
router.get('/login', ctrl.login);

module.exports = router; // 외부 파일(메인 파일인 app.js)에서 사용할 수 있도록 내보내기