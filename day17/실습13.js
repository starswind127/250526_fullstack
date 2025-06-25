const 가계부목록 = [ 
    { 코드 : 1 , 날짜 : '2025-06-19' , 항목명 : '점심 식사' , 금액 : 9000 } ,
    { 코드 : 2 , 날짜 : '2025-06-19' , 항목명 : '교통비'    , 금액 : 1500 } 
]

// [3] 기능(함수단위) 구현
// 1. 등록함수 정의 , 실행 : 등록버튼 onclick 했을때 -> <button onclick="등록함수()"> 등록버튼 </button>
function 등록함수(){ console.log( '--- 등록함수 exe ---'); // 2. 함수 onclick 확인 
    // 3. input에 마크업 객체 3개를 각각 가져오기
    const dateInput = document.querySelector('#dateInput');      console.log( dateInput );      // 3. <input id="dateInput" type="date" />
    const contentInput = document.querySelector('#contentInput');console.log( contentInput );   // 3. <input id="contentInput" type="text" />
    const moneyInput = document.querySelector('#moneyInput');    console.log( moneyInput );     // 3. <input id="moneyInput" type="number" />
    // 4. 각 마크업 객체에서 입력값 가져오기 
    const date = dateInput.value;           console.log( date );
    const content = contentInput.value;     console.log( content );
    const money = moneyInput.value;         console.log( money );
    // 5. 원하는 속성구성으로 객체 만들기, 설계: { 코드 : , 날짜 : , 항목명 : , 금액 : }
    const obj = { 코드 : 3 , 날짜 : date , 항목명 : content , 금액 : money };   console.log( obj );
    // 6. 구성한 객체를 전역(배열)변수에 저장한다.
    가계부목록.push( obj );                 console.log( 가계부목록 );

 
}