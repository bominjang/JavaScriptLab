const http = require("http");
const url = require("url"); //url 모듈을 로드
http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname; //url 모듈을 사용해 패스명 할당
    res.setHeader("Content-Type", "text/html");

    if (path in urlMap) {
        urlMap[path](req, res);
    } else {
        notFound(req, res);
    }
        
})
    .listen("3000", () => console.log("라우터를 만들어보자!"));

const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query; //쿼리스트림 데이터를 userInfo에 할당
    res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);//결과값으로 이름과 나이 설정
};

const feed = (req, res) => {
    res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
        `);
}

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
}

const urlMap = {
    "/": (req, res) => res.end("HOME"),
    "/user": user,
    "/feed": feed,
};