
function signup(){  console.log('--> signup exe');
    const signId = document.querySelector('.signId');   console.log( signId );
    const signPw = document.querySelector('.signPw');   console.log( signPw );
    const id = signId.value;                            console.log( id );
    const pw = signPw.value;                            console.log( pw );

    let no = 1;
        let memberList = sessionStorage.getItem('memberList'); 
        if( memberList == null ){ 
            memberList = [];
        }else{ 
            memberList = JSON.parse( memberList );
            no = memberList[ memberList.length-1 ].no + 1; 
        }
    const obj = { no : no , id : id , pw : pw };        console.log( obj );

    
    memberList.push( obj );                             console.log( memberList );
    alert('회원 등록 성공 '); 
        let jsonData = JSON.stringify( memberList );
        sessionStorage.setItem( 'memberList' , jsonData ); 
} 

function login(){ console.log( '--> login exe ');
    const loginId = document.querySelector('.loginId');
    const loginPw = document.querySelector('.loginPw');
    const id = loginId.value;
    const pw = loginPw.value;

        let memberList = sessionStorage.getItem('memberList'); 
        if( memberList == null ){
            memberList = [];
        }else{
            memberList = JSON.parse( memberList );
        }
        
    for( let index = 0 ; index <= memberList.length-1 ; index++ ){
        const member = memberList[index]; 
        if( member.id == id && member.pw == pw ){
           
            alert('로그인 성공');   
            return;
        } 
    } 
    alert('로그인 실패');
}