"use strict";

const users = { // 각 사용자의 id와 pw를 리스트로 만들어서 같은 번지에 부여
    id: ["사용자1", "사용자2", "사용자3"],
    pw: ["1234", "3456", "5678"]
};

const output = {
    // ejs파일이 이 파일 내에 들어왔을 때 이동할 곳 지정
    // app.set에서 views 파일은 지정해놓았으므로 views 폴더 내의 경로만 지정하면 됨
    hello: (req, res) => {
        res.render('home/index');
    },
    login: (req,res) => {
        res.render('home/login');
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
              pw = req.body.pw
        if (users.id.includes(id)) {            // id가 users의 id 리스트 내에 존재한다면
            const idx = users.id.indexOf(id);   // users의 id 리스트에 있는 해당 id의 인덱스를 idx 변수로 받기
            if (users.pw[idx] === pw){          // users의 pw 리스트에서 idx로 받은 인덱스와 같은 위치에 있는 pw와 입력된 pw 비교하여 같으면
                return res.json({               // success: true를 json 형태로 돌려주며 응답하기
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

// index.js에서 사용할 수 있도록 오브젝트로 빼주기
// 오브젝트는 원래 key와 value로 되어있는 구조인데 아래와 같이 key 하나만 입력해주면 자체적으로 key와 같은 value를 넣어둠
module.exports = {
    output,
    process,
}