// p.513 자료형

// [숫자형] : 정수와 실수로 나누어 구분합니다.
// 1.정수 : 소수점 없는 숫자
console.log( 100 )
console.log( typeof 100 )           // typeof 자료 : 자료의 자료형(종류) 반환 , number
// 2.실수 : 소수점 있는 숫자 , (부동소수점)실수는 정밀하게 계산이 불가능하다. -> 별도의 정밀한 함수 필요하다
console.log( 0.1 + 0.2 )

// [문자열] : '' 또는 "" 묶음 자료
console.log( typeof "100" )         // 숫자도 ""묶이면 문자열 이다.
console.log( typeof "안녕하세요" )
// 1. 이스케이프문자 : 기능이 포함된 특수문자 , \백슬래시 : 키보드 엔터 위에 원화기호\
console.log("\\안녕1")  //  \\ : 백슬래시 출력 
console.log("\'안녕2")  //  \' : '작은따옴표 출력 
console.log("\"안녕3")  //  \" : "큰따옴표 출력 
console.log("\n안녕4")  //  \n : 줄 바꿈 처리 
console.log("\t안녕5")  //  \t : 탭(들여쓰기) 처리
// 2. 템플릿 리터럴 : `(백틱) 키보드 왼쪽[tab]키 위에 , 변수나 식을 넣을때는 ${ }
1 + 3           // 4 , 연산은 결과/반환 는 항상 하나 이다.
"안녕" + "자바" // "안녕자바" , 문자열이 포함된 +더하기는 연결 연산자로 사용된다.
console.log( "안녕" + "자바" )          // +연결연산자 이용한 자료 합치기
console.log( `${"안녕"}${"자바"}` )     // ``묶음 으로 자료 합치기 
    // * 변수와 활용 
let name = 'Kim';
let classRoom = 204;
// (방법1)
// 변수명 + "문자열" + 변수명 + "문자열"
console.log( name + "님 , " + classRoom + "호 강의실로 입장하세요."); 
// (방법2) , (1) 백틱으로 전체를 묶는다. (2) ${} 안에 변수나 식을 넣는다.
// `${변수명} 문자열 ${변수명} 문자열`
console.log( `${name}님, ${classRoom}호 강의실로 입장하세요.` ) 

// [논리형] : true(참) 이나 false(거짓) 의 값을 표현 , 조건식에서 주로 사용된다.
console.log( true )
console.log( false )

// [ undefined 와 null ]
// 1.undefined : 자료형이 정의되지 않았을때 데이터 상태 
let 과일상자;            // 변수를 선언하고 자료를 대입/저장 하지 않았다.
console.log( 과일상자 ); // 자료가 없는 변수를 호출하면 undefined
// 2. null : 데이터의 값이 유효하지 않은 상태
let 채소상자 = null;    // 변수에 null 이 대입/저장 된 상태 , 라이브러리(미리만들어진) 함수들이 null 반환하는 경우가 많다. 
console.log( 채소상자 ) // 변수에 null 일 경우에는 null ( 자료가 존재 또는 유효 하지 않다.)

let season = [" 봄 " , " 여름 " , " 가을 ", " 겨울 "]   

console.log ( season )

console.log ( season[0] )
console.log ( season[1] )
console.log ( season[2] )
console.log ( season[3] )
console.log ( season[4] ) 

season = ["유재석" , "신동엽"]
console.log(season)
season[1] = "강호동"
console.log(season)
season.push("서장훈")
console.log(season)
season.splice(0 , 1)
console.log(season)

console.log(season.indexOf("유재석"))
console.log(season.indexOf("강호동"))
let result = season.indexOf("서장훈")
console.log(result)