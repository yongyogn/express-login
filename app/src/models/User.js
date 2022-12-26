"use strict";

const UserStorage = require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        try {
            const { id, psword } = await UserStorage.getUserInfo(client.id);
            if (id){
                if (id === client.id && psword === client.psword) {
                    return {success: true};
                }
                return {success: false, msg: "비밀번호가 틀렸습니다."};
            }
            return {success: false, msg: "존재하지 않은 아이디입니다."}
        } catch(err) {
            return { success: false, msg: err };
        }
    }

    async register() {
        const client = this.body;
        try {
        const response =await UserStorage.save(client); // constructor에서 넘겨준 body를 그대로 저장
        return response;
        } catch (err) {
            const a = {success: false, msg: err };
            console.log(a.msg);
            return a;
        }
    }
}

module.exports = User;