const products = [
    { pcode: 1, pname: '이름1', pprice: 1000, pcontent: '제품설명1' , pimg : 'https://placehold.co/100' },
    { pcode: 2, pname: '이름2', pprice: 2000, pcontent: '제품설명2' , pimg : 'https://placehold.co/100' },
    { pcode: 3, pname: '이름3', pprice: 3000, pcontent: '제품설명3' , pimg : 'https://placehold.co/100' },
]
let pcode = 3;
function productAdd() { console.log(`1번 실행`);
    const pnameInput = document.querySelector('#pnameInput'); console.log(pnameInput);
    const ppriceInput = document.querySelector('#ppriceInput'); console.log(ppriceInput);
    const pimgInput = document.querySelector('#pimgInput'); console.log(pimgInput);
    const pcontentInput = document.querySelector('#pcontentInput'); console.log( pcontentInput );

    const pname = pnameInput.value; console.log(pname);
    const pprice = ppriceInput.value; console.log(pprice);
    const pcontent = pcontentInput.value; console.log( pcontent );
    const pimg = pimgInput.files[0]; console.log(pimg);

    const obj = {
        pcode: ++pcode,
        pname: pname,
        pprice: Number(pprice),
        pcontent : pcontent ,
        pimg: pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100',
    }; console.log(obj);

    products.push(obj); console.log(obj);

    pnameInput.value = '';
    ppriceInput.value = '';
    pcontentInput.value = '';
    alert(' 제품 등록 ');
    productPrint()
}




productPrint(); 
function productPrint() { console.log(productPrint);
    console.log(`productPrint in`);
    const productBody = document.querySelector('#productBody'); 
    let html = '';
    for (let i = 0; i <= products.length - 1; i++) {
        const product = products[i];
        html += `<tr>
                    <td> <img src="${product.pimg}" /> </td>
                    <td> ${product.pname} </td>
                    <td> ${product.pprice.toLocaleString()} </td>
                    <td> ${product.pcontent} </td>
                    <td> <button class="btnDelete" onclick="productDelete( ${product.pcode} )"> 삭제 </button>  </td>       
                </tr>`;
    } 
    productBody.innerHTML = html; console.log(html);
}



function productDelete(pcode) {
    console.log('삭제');
    console.log(pcode);
    for (let i = 0; i <= products.length - 1; i++) {
        if (products[i].pcode == pcode) {
            products.splice(i, 1);
            alert('[성공] 제품 삭제')
            productPrint();
            return;
        }
    } 
   
    alert('[오류] 제품번호 불일치')
}  