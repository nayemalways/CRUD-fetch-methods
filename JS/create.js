 async function createData(){
    let productName = document.getElementById('ProductName').value;
    let Img = document.getElementById('Img').value ;
    let productCode = document.getElementById('ProductCode').value;
    let unitPrice = document.getElementById('UnitPrice').value;
    let quantity = document.getElementById('Qty').value;
    let totalPrice = document.getElementById('TotalPrice').value;

    let createCard= {
        ProductName: productName,
        ProductCode: productCode,
        Img: Img,
        UnitPrice: unitPrice,
        Qty: quantity,
        TotalPrice: totalPrice
    }
    let loading = document.getElementById('loadingAnim');
    loading.classList.add('loader');

    let URL = " http://164.68.107.70:6060/api/v1/CreateProduct/";
    let METHOD = 'POST';
    let req = await fetch(URL,
        {
            method: METHOD,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(createCard)
        }
    )
    let res = await req.json();

    loading.classList.add('loader');

    if(res.status === 'success'){
        window.location = 'index.html';
    }else{
        alert("Operation Failed");
    }
 }