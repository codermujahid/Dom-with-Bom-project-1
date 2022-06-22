 

 const product_form = document.getElementById('product_form');
 const product_list = document.getElementById('product_list');
 const masg = document.querySelector('.masg'); 


//get all product
const getAllProduct = () =>{
   
    //get all Ls data

   const data = readLSData('product');

   //check LSData
   if (!data) {

    product_list.innerHTML = `
        <tr >
             <td class="text-center" colspan="7" >No product found</td>
        </tr>

    `;

   }
   // sho all data list
   if (data) {

    //init list
    let list = '';

    //lop for data
    data.map((item, index) => {

        list +=`
            <tr>
                <td>${ index + 1 }</td>
                <td><img style="width: 100px;" src="${ item.photo }" alt=""></td>
                <td>${ item.name }</td>
                <td>${ item.price }</td>
                <td>${ item.quantity }</td>
                <td>${ item.price * item.quantity } BDT</td>
                 
                <td>
                    <a class="btn btn-info btn-sm" href=""><i class="fas fa-eye"></i></a>
                    <a class="btn btn-warning btn-sm" href=""><i class="fas fa-edit"></i></a>
                    <a class="btn btn-danger btn-sm" href=""><i class="fas fa-trash"></i></a>
                </td>
            </tr>
        `;

    })

    product_list.innerHTML = list;
   }


}


//submit product form
 product_form.onsubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData(e.target);
    let productData = Object.fromEntries(form_data.entries());
    let {name, price, quantity, photo} = Object.fromEntries(form_data.entries());
     
    

    // form valide
    if (!name || !price || !quantity || !photo ) {
        masg.innerHTML = setAlert('All fild requarid')
    } else {


        createLSData('product', productData);

        masg.innerHTML = setAlert('Data stabl','success');
        e.target.reset();
        getAllProduct();
        
    }
    
 }

