"use strict";

class UserStorage{
    static #users = {                // 각 사용자의 id와 pw를 리스트로 만들어서 같은 번지에 부여, static을 통해 정적 변수로 선언하면 home.ctrl.js파일에서 클래스 자체에서 users 변수에 접근 가능
                                     // 이 변수는 원래 외부 파일에서 불러올 수 없도록 해줘야 하므로 #을 붙여서 public 변수에서 private 변수로 선언
        id: ["사용자1", "사용자2", "사용자3"],
        pw: ["1234", "3456", "5678"],
        name: ["이름1", "이름2", "이름3"]
    };

    static getUsers(...fields) {              // users변수를 #으로 private변수로 만들었으므로 로그인을 위해 id와 pw를 비교하려고 이 변수를 불러오려고 해도 불러올 수가 없게됨
                                             // 이때 getUsers함수를 선언하여 #users를 불러올 수 있게 만듦
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }
}

module.exports = UserStorage;