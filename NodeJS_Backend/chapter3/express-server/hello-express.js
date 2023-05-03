//기존에는 http 인스턴스의 createServer() 함수 내에서 라우팅과 결과 처리를 했지만, 익스프레스를 사용해
//좀 더 쉽게 더 좋은 라우팅 기능 사용 가능
const url = require("url");
const express = require("express");//express 모듈 불러오기
const app = express(); //express를 초기화 후 app에 할당
const port = 3000;

app.listen(port, () => {
    console.log("익스프레스로 라우터 리펙토링하기");
});

// GET 메서드의 라우팅 설정
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
    const user = url.parse(req.url, true).query;

    //결과값으로 유저명과 나이 제공
    res.json(`[user] name : ${user.name}, age: ${user.age}`);
}

function feed(_, res) {// _ : 사용하지 않는 변수이지만, 인터페이스 구조상 넣을 수 밖에 없을 때 사용.
    //json()를 사용하면, 응답 타입을 JSON으로 보여주기도 하고, charset=utf-8을 자동으로 설정해주므로 한글을 간단히 처리 가능
    res.json(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
}

