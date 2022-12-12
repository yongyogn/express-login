"use strict";

const fs = require("fs").promises;  // users.json(데이터 파일)에 접근하기 위해 file system 불러오기

class UserStorage{


    static getUsers(...fields) {              // users변수를 #으로 private변수로 만들었으므로 로그인을 위해 id와 pw를 비교하려고 이 변수를 불러오려고 해도 불러올 수가 없게됨
                                             // 이때 getUsers함수를 선언하여 #users를 불러올 수 있게 만듦
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => { // 해당 로직이 성공했을 때 실행
                return this.#getUserInfo(data, id);
            })
            .catch(console.error); // 해당 로직이 실패했을 때 실행
    }
    // promise: {<pending>}이 뜨면 데이터를 전부 읽어오지 못했다는 뜻

    static #getUserInfo(data, id) { // #을 사용해 은닉화된 함수로 정의
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return { success: true };
    }
}

module.exports = UserStorage;