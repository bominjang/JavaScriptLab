const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was clicked!");
}

// user가 title을 클릭할 경우, Javascript가 대신 handleTitleClick을 실행
title.addEventListener("click", handleTitleClick);