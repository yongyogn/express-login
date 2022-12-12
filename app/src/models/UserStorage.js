"use strict";

const fs = require("fs").promises;  // users.json(데이터 파일)에 접근하기 위해 file system 불러오기

class UserStorage{


    static getUsers(isAll, ...fields) {              // users변수를 #으로 private변수로 만들었으므로 로그인을 위해 id와 pw를 비교하려고 이 변수를 불러오려고 해도 불러올 수가 없게됨
                                              // 이때 getUsers함수를 선언하여 #users를 불러올 수 있게 만듦
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => { // 해당 로직이 성공했을 때 실행
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error); // 해당 로직이 실패했을 때 실행
    }

    static #getUsers(data, isAll,  fields) {
        const users = JSON.parse(data);
        if (isAll) return users;

        const userUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return userUsers;
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

    static async save(userInfo) {
        // 데이터를 그냥 추가하면 원래의 데이터가 사라지고 덮어씌워지므로,
        // 원래의 데이터를 불러와서 새로운 데이터를 추가하고,
        // 새로운 데이터를 추가한 데이터 전체를 파일에 저장해야됨
        // users 데이터를 모두 불러오는 메서드(위에 있는 getUsers) 사용하여 getUsers가 반환한 모든 파라미터 다 받아오기
        const users = await this.getUsers(true); // ""id", "pw", "name" 대신 true를 입력하고 getUsers함수의 isAll 파라미터를 true로 주면 자동으로 모든 파라미터 받아옴
        // 데이터 추가
        if (users.id.includes(userInfo.id)) { // userInfo의 id에 해당 id가 없다면 아래의 과정을 거쳐 파일에 저장
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users)); // JSON파일에 넣기 위해 JSON.stringify를 통해 문자열로 변경
        return { success: true };
    }
}


module.exports = UserStorage;