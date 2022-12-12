"use strict";

const User = require("../../models/User");

const output = {
    // ejs파일이 이 파일 내에 들어왔을 때 이동할 곳 지정
    // app.set에서 views 파일은 지정해놓았으므로 views 폴더 내의 경로만 지정하면 됨
    hello: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
    register: (req, res) => {
        res.render("home/register");
    }
};


const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

// index.js에서 사용할 수 있도록 오브젝트로 빼주기
// 오브젝트는 원래 key와 value로 되어있는 구조인데 아래와 같이 key 하나만 입력해주면 자체적으로 key와 같은 value를 넣어둠
module.exports = {
    output,
    process,
}