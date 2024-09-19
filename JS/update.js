 async function fillExistingData() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
     
    let loading = document.getElementById('loadingAnim');
    loading.classList.add('loader');

    let URL = `http://164.68.107.70:6060/api/v1/ReadProductByID/${id}`;
    let req = await fetch(URL);
    let res = await req.json();

    loading.classList.remove('loader');

    if(res.status === "success"){
        let item = res['data'][0];

        document.getElementById('ProductId').value = item['_id'];
        document.getElementById('ProductName').value = item['ProductName'];
        document.getElementById('Img').value = item['Img'];
        document.getElementById('ProductCode').value = item['ProductCode'];
        document.getElementById('UnitPrice').value = item['UnitPrice'];
        document.getElementById('Qty').value = item['Qty'];
        document.getElementById('TotalPrice').value = item['TotalPrice'];
    }
 }
 fillExistingData();



//  Update data 
 async function updateData() {
    let productId = document.getElementById('ProductId').value ;
    let productName = document.getElementById('ProductName').value  ;
    let Img = document.getElementById('Img').value ;
    let productCode = document.getElementById('ProductCode').value;
    let unitPrice = document.getElementById('UnitPrice').value;
    let quantity = document.getElementById('Qty').value ;
    let totalPrice = document.getElementById('TotalPrice').value;

    let cardUpdatedData = {
        ProductName: productName,
        ProductCode: productCode,
        Img: Img,
        UnitPrice: unitPrice,
        Qty: quantity,
        TotalPrice: totalPrice
    }

    let URL = `http://164.68.107.70:6060/api/v1/UpdateProduct/${productId}`;
    let METHOD = 'POST';
    let req = await fetch(URL,
        {
            method: METHOD,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cardUpdatedData)
        }
    )
    let res = await req.json();

    if(res.status === 'success'){
        window.location = 'index.html';
    }else{
        alert("Operation Faild");
    }
 }