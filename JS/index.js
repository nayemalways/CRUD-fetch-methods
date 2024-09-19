 async function card() {
    let loading = document.getElementById('loadingAnim');
    loading.classList.add('loader');

    let URL = "http://164.68.107.70:6060/api/v1/ReadProduct";
    let res = await fetch(URL);
    let data = await res.json();
    loading.classList.remove('loader');

if(data.status === 'success'){
    let dataList = data['data'];
    
    dataList.forEach(items => {
        document.getElementById('product__card').innerHTML += `
            <div class="card" style="max-width:350px">
                <img src="${items['Img']}" class="card-img-top" alt="...">
                <div class="position-absolute end-0">
                   <ul>
                        <li id="menu" >
                            <a class="pe-auto btn menu__link">
                                <i id="menu__bar" class="fa-solid fa-ellipsis-vertical text-secondary me-3 mt-3 fw-bolder"></i>
                             </a>

                             <!-- dropdown-->
                            <div id="menu__item" class="position-absolute end-0">
                                 <button class="text-center" onclick="editItem('${items['_id']}')">Edit</button>
                                 <button class="text-center" onclick="deleteItem('${items['_id']}')">Delete</button>
                            </div> 
                        </li>
                   </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title fw-bolder">${items['ProductName']}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="d-flex justify-content-between">
                        <a href="#" class="btn btn-warning fw-bolder ps-5 pe-5">Buy</a>
                        <p class="h6 pt-3 text-secondary">Price: ${items['UnitPrice']}TK</p>
                    </div>
                </div>    
            </div>
            `
    });
}
 }

 card();

//  Delete card
async function deleteItem(id) {
    let confirm =  window.confirm("Do you want to delete?");
    if(confirm === true){
        let URL = `http://164.68.107.70:6060/api/v1/DeleteProduct/${id}`;
        let req = await fetch(URL);
        let res = await req.json();
        if(res.status === 'success'){
            document.getElementById("product__card").innerHTML = "";
            await card();
        }else{
            alert("Something went wrong");
        }
    }else{
        console.log("Ok");
    }
    
    
}

// Edit card 
function editItem(id){
    window.location = `update.html?id=${id}`;
}
 