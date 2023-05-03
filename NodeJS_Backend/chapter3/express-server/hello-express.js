const express = require("express");//express 모듈 불러오기
const app = express(); //express를 초기화 후 app에 할당
let posts = []; // 1. 게시글 리스트로 사용할 posts에 빈 리스트 할당. 글 삭제 시, 삭제된 목록으로 재할당하기 때문에 let으로 지정

// 2. req.body를 사용하려면 JSON 미들웨어를 사용해야 함.
// 사용하지 않으면 undefined로 반환
app.use(express.json());

//POST 요청 시 컨텐트 타입이 application/x-www-form-urlencoded인 경우 파싱
//application/x-www-form-urlencoded 타입 : body에 키=값&키2=값2같은 키=값 조합 형태의 데이터
// app.use() : 미들웨어 사용 시
app.use(express.urlencoded({ extended: true }));//3. json 미들웨어와 함께 사용

app.get("/", (req, res) => { // 4. /로 요청이 오면 실행
    res.json(posts); //5. 게시글 리스트를 JSON 형식으로 보여줌
    //list, json 데이터를 처리할 수 있는 json()함수 사용
});

app.post("/posts", (req, res) => {
    const { title, name, text } = req.body; //7. HTTP 요청의 body 데이터를 변수에 할당

    // 8. 게시글 리스트에 새로운 게시글 정보 추가
    posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
    res.json({ title, name, text});
});

app.delete("/posts/:id", (req, res) => {
    const id = req.params.id; //9.
    //10.삭제 로직
    //id 이외의 글들만 뽑아서 filteredPosts에 다시 할당
    //+id : 문자열인 id를 integer형으로 변경한다는 뜻. == parseInt
    const filteredPosts = posts.filter((post) => post.id !== +id); 
    const isLengthChanged = posts.length !== filteredPosts.length; //11.삭제 확인
    posts = filteredPosts;
    if (isLengthChanged) { //12. posts의 데이터 개수가 변경되었으면 삭제 성공
        res.json("OK");
        return;
    }
    res.json("NOT CHANGED"); //13. 변경되지 않음
});

app.listen(3000, () => {
    console.log("Welcome posts START!");
});