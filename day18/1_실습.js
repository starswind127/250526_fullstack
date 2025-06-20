// ========================== [1] 데이터 모델링 샘플 ======================= //
// 1. 카테고리 목록 
const categoryList = [ { cno : 1 , cname : '음료류' } , { cno : 2 , cname : '과자류' } ];
let currentCno = 2; // * 코드를 자동대입 하기 위한 현재 코드번호 , 샘플의 마지막 코드의번호 로 초기화
// 2. 제품 목록 , 제품이미지가 없을경우 : https://placehold.co/100x100 경로 샘플
const productList = [
    { pno : 1 , cno : 1 , pname : '코카콜라' , pprice : 1000 , pimg : 'https://placehold.co/100x100' , pdate : '2025-06-17' } ,
    { pno : 2 , cno : 2 , pname : '새우깡'   , pprice : 1200 , pimg : 'https://placehold.co/100x100' , pdate : '2025-06-18' } ,
    { pno : 3 , cno : 1 , pname : '칠성사이다',pprice : 900 ,  pimg : 'https://placehold.co/100x100' , pdate : '2025-06-19' } ,
];
let currentPno = 3; // * 
// * 확인차 
console.log( categoryList );
console.log( productList ); 
// ========================== [2] 기능 로직 ======================= //
// 1. 카테고리 출력함수 : 실행조건 : 페이지(HTML/JS) 가 열렸을때 함수실행
categoryPint();
function categoryPint(){                                                                console.log( ' >> categoryPint exe' );
    // (1). 어디에 , <select id="categoryInput">
    const categoryInput = document.querySelector('#categoryInput');                     console.log( categoryInput);
    // (2). 무엇을 , 카테고리목록(배열)내 객체정보를 하나씩 HTML 형식으로 
    let html = `<option value="" disabled selected > 카테고리 선택하세요. </option>`;
        for( let index = 0 ; index <= categoryList.length - 1 ; index++ ){  // index번째 카테고리(1개)객체 꺼내기 
            const category = categoryList[index];                                       console.log( category );
            html += `<option value="${ category.cno }"> ${ category.cname } </option>`; 
            // 주의할점 : `백틱 주의
        } // for end 
    // (3). (html) 출력 
    categoryInput.innerHTML = html;                                                     console.log( html );
} // func end 

// 2. 제품 등록함수 : 실행조건 : <등록버튼> onclick 클릭했을때
// HTML : <button onclick="productAdd()" class="btnAdd"> 등록 </button>
function productAdd(){ console.log('>> productAdd exe');
    // (1) 입력 마크업객체 가져오기 
    const categoryInput = document.querySelector('#categoryInput'); console.log( categoryInput );
    const pnameInput = document.querySelector('#pnameInput');       console.log( pnameInput );
    const ppriceInput = document.querySelector('#ppriceInput');     console.log( ppriceInput );
    const pimgInput = document.querySelector('#pimgInput');         console.log( pimgInput );
    // (2) 입력 마크업객체 에서 입력값 가져오기 
    const cno = categoryInput.value;                                console.log( cno );
    const pname = pnameInput.value;                                 console.log( pname );
    const pprice = ppriceInput.value;                               console.log( pprice );
     // 첨부파일은 value 대신에 files[0] : 선택된 첨부파일의 첫번째 파일객체 가져오기
    const pimg = pimgInput.files[0];                                console.log( pimg );

    // * 현재 날짜/시간 구하기 == new Date() 객체
    let year = new Date().getFullYear(); // 현재 연도 반환 함수.
    let month = new Date().getMonth()+1; // 현재 월 반환 함수 * 1월달이 0부터 시작이므로 +1 
        month = month < 9 ? `0${month}` : month ; // 만약에 월이 한자리수 이면 앞에 '0' 붙인다.
    let day = new Date().getDate();      // 현재 일 반환 함수 
        day = day < 9 ? `0${day}` : day;    // 만약에 일 이 한자리수 이면 앞에 '0' 붙인다.
    let pdate = `${year}-${month}-${day}`;                          console.log( pdate );
    // (*) 유효성검사// * 입력한 값이 없으면 등록 실패 
        if( cno == '' || pname == '' || pprice == '' ){
            alert('[실패] 비어있는 항목이 있습니다.');
            return; // 반환값 없는 함수종료 : 아래코드는 실행되지 않는다.
        }
    // (3) 여러 데이터 객체로 구성 하기.
    const obj = { 
        pno : ++currentPno, // 현재제품코드에 1 증가 후 구성 
        cno : Number( cno ),
        pname : pname ,
        pprice : Number(pprice) , // 제품가격은 숫자형 타입변환 
        pimg : pimg ? URL.createObjectURL( pimg ) : 'https://placehold.co/100x100' ,  // URL.createObjectURL() : 선택한 파일객체의 url 주소 생성함수.
        pdate : pdate
    };                                                              console.log( obj );
    // (4) 구성한 객체를 배열에 저장
    productList.push( obj );                                        console.log( productList ); 
    // (*) 기타등등 
    categoryInput.value = '';
    pnameInput.value = '';
    ppriceInput.value = '';
    alert('[성공] 제품 등록');

    productPrint(); // [다시 제품 출력함으로써 새로고침 ] / 렌더링

} // func end  // 등록함수 끝 

// 3. 제품목록 출력함수 , 실행조건 : (1) 페이지(HTML/JS) 가 열렸을때 함수실행, (2) 등록/삭제/수정 처리 했을때
productPrint();
function productPrint(){ console.log('>>productPrint exe');
    // (1) 어디에 , <tbody>
    const tbody = document.querySelector('#main > table > tbody ');     console.log( tbody );
    // (2) 무엇을 
    let html = '';
        for( let index = 0 ; index <= productList.length-1 ; index++ ){
            const product = productList[index];                         console.log( product );
            html += `<tr>    
                        <td> <img src="${ product.pimg }" /> </td>   
                        <th> ${ product.cno } </td>   
                        <td> ${ product.pname } </td> 
                        <td> ${ product.pprice.toLocaleString() } </td>             
                        <td> ${ product.pdate } </td>       
                        <td> 
                            <button onclick="productDelete( ${ product.pno } )"   class="btnDelete"> 삭제 </button> 
                            <button onclick="productEdit( ${ product.pno } )"     class="btnEdit"> 수정 </button> 
                        </td> 
                    </tr>`; //백틱 주의 , 샘플로 작성한 HTML의 <tr> 복붙
        } // for end 
    // (3) 출력 
    tbody.innerHTML = html;                                              console.log( html );
} // func end // 출력함수 끝 

// 4. 제품 삭제함수 : 배열내 삭제할 객체를 찾아서 .splice 한다.   < 매개변수 : 제품코드 >             
// 실행조건 : [삭제버튼] onclick 했을때
function productDelete( pno ){ console.log( '>>productDelete exe ' ); console.log( pno );

} // func end // 삭제함수 끝 

// 5. 제품 수정함수 : 새로운 정보를 받아 배열내 수정할 객체를 찾아서 대입한다. < 매개변수 : 제품코드 >  , 
// 실행조건 : [수정버튼] onclick 했을때
function productEdit( pno ){ console.log( '>>productEdit exe'); console.log( pno );

} // func end // 수정함수 끝 