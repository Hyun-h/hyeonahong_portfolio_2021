#리액트로 포트폴리오 만들기
<br>
혼자 공부한 리액트가 너무 아쉬워서 포트폴리오로 만들어보는 도전을 해봅니다.
어떤 오류와 만날지 너무 걱정되고 궁금하지만, 한 번 해보죠!
<br>

<ul>
    <span>배포시 주의사항!</span>
    <li>404 에러 : build의 index.html 복사 후 붙여넣고 이름을 404.html로 바꾸기 -> package.json의 "scrip" 부분에 "postbuild": "cp build/index.html build/404.html" 추가.</li>
    <li>router 사용 시 주의사항 : package.json에서 homepage 부분에 맨 끝의 / 제거 -> BrowserRouter를 쓰는 부분에 basename={process.env.PUBLIC_URL} 꼭꼭꼭 추가. Router든 BrowserRouter든 라우터를 감싸고 있는 부모에게 꼭 주기.</li>
    <li>그래도 이미지가 깨진다면..! img 깨짐 : 경로 확인 잘하기. ./ 를 붙이지 않았다면 꼭 붙여주자 img/img.jpg(X) ./img/img.jpg(O)</li>
</ul>
<br>
https://hyun-h.github.io/hyeonahong_portfolio_2021/
