"use strict";

const UserStorage = require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const client = this.body
        const { id, pw } = UserStorage.getUserInfo(client.id);
        if (id){
            if (id === client.id && pw === client.pw) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg: "존재하지 않은 아이디입니다."}
    }

    register(){
        const client = this.body;
        const response = UserStorage.save(client); // constructor에서 넘겨준 body를 그대로 저장
        return response;
    }
}

module.exports = User;