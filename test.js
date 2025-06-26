function getProduct(){
    let product = localStorage.getItem('products')
       if (products == null) {
        products = [];
    } else {
        products = JSON.parse(products);
    }
        return products;
}
function setProducts(products) {
}
