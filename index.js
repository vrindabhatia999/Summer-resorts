<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Add to vacay cart</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
</head>
<body>
  <script type="text/javascript" src="app.js">
  </script>
   <div class="container-fluid">
     <div class="row">
       <div class="col-md-10 col-11 mx-auto">
         <div class="row mt-5 gx-3">
           <!--left side div-->  
           <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
             <div class="card p-5">
               <h2 class="py-4 font-weight-bold">Cart (2 items)</h2>
               <div class="row">
                 <!--For images card-->
                 <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img ">
                   <img src="room1.jpg" class="img-fluid" alt="room1">
                 </div>

                 <div class="col-md-7 col-11 mx-auto px-4 mt-4">
                   <div class="row">

                    <div class="col-6 card-title">
                      <h1 class="mb-4 product_name">ASPERA Room</h1>
                      <p class="mb-2">ROOM  NO: 9</p>
                      <p class="mb-2">ROOM  Name: bliss</p>
                      <p class="mb-3">ROOM  key: 901</p>
                      
                    </div>
                    <!--quantity-->
                    <div class="col-6" >
                      <ul class="pagination justify-content-end set_quantity">
                        <li class="page-item"><button class="page-link"  onclick="decreaseNumber('textbox','itemval')"> <i class="fa fa-minus" aria-hidden="true"></i>
                        </button></li>
                        <li class="page-item"><input type="text" class="page-link" value="0" id="textbox" style="width: 50px;"></li>
                        <li class="page-item"> <button class="page-link" href="#" onclick="increaseNumber('textbox','itemval')"> <i class="fa fa-plus" aria-hidden="true"></i>
                        </button></button></li>
                         
                      </ul>
                    </div>
                   </div>
                   <!--remover move and price-->
                   <div class="row">
                     <div class="col-8 d-flex justify-content-between remove_wish">
                       <p> <i class="fa fa-trash"></i>Remove Item</p>
                       <p> <i class="fa fa-heart"></i>Move to wishlist</p>
                     </div>
                     <div class="col-4 d-flex justify-content-end price_money">
                       <h5>$<span id="itemval">0.00</span></h5>
                     </div>
                   </div>

                 </div>
               </div>
             </div>


             <div class="card p-5">
             
              <div class="row">
                <!--For images card-->
                <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img ">
                  <img src="room2.jpg" class="img-fluid" alt="room1">
                </div>

                <div class="col-md-7 col-11 mx-auto px-4 mt-4">
                  <div class="row">

                   <div class="col-6 card-title">
                     <h1 class="mb-4 product_name">Merriar Room</h1>
                     <p class="mb-2">ROOM  NO: 5</p>
                     <p class="mb-2">ROOM  Name: master-lux</p>
                     <p class="mb-3">ROOM  key: 502</p>
                     
                   </div>
                   <!--quantity-->
                   <div class="col-6" >
                     <ul class="pagination justify-content-end set_quantity">
                       <li class="page-item"><button class="page-link"  onclick="decreaseNumber('textbox1','itemval1')"> <i class="fa fa-minus" aria-hidden="true"></i>
                       </button></li>
                       <li class="page-item"><input type="text" class="page-link" value="0" id="textbox1" style="width: 50px;"></li>
                       <li class="page-item"> <button class="page-link" href="#" onclick="increaseNumber('textbox1','itemval1')"> <i class="fa fa-plus" aria-hidden="true"></i>
                       </button></button></li>
                        
                     </ul>
                   </div>
                  </div>
                  <!--remover move and price-->
                  <div class="row">
                    <div class="col-8 d-flex justify-content-between remove_wish">
                      <p> <i class="fa fa-trash"></i>Remove Item</p>
                      <p> <i class="fa fa-heart"></i>Move to wishlist</p>
                    </div>
                    <div class="col-4 d-flex justify-content-end price_money">
                      <h5>$<span id="itemval1">0.00</span></h5>
                    </div>
                  </div>

                </div>
              </div>
            </div>

           </div>
           
             <!--right side div-->
             <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">

                 <div class="right-side p-3 shadow bg-white">
                   <h2 class="product_name mb-5">Total Amount Of</h2>
                   <div class="price_indiv d-flex justify-content-between">
                     <p>Product Amount</p>
                     <p>$<span id="product_total_amt">0.00</span></p>
                   </div>
                   <div class="price_indiv d-flex justify-content-between">
                    <p>Taxes</p>
                    <p>$<span id="shipping_charge">7</span></p>
                  </div>
                  <hr/>
                  <div class="total-amt d-flex justify-content-between font-weight-bold">
                    <p>The total amount is:</p>
                    <p>$<span id="total_cart_amt">0.00</span></p>

                  </div>
                  <button class="btn btn-primary text-uppercase" onclick="checkout()"><a href="checkout.html" style="color: white;">Checkout</a></button>
                 </div>
                 <!--Discount coipon-->

                 <div class="discount_code mt-3 shadow">
                   <div class="card">
                     <div class="card-body">
                     <a class="d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="#collapseExample">
                       Add Discount Code:
                       <span><i class="fa fa-chevron-down pt-1"></i></span>
                     </a>

                     <div class="collapse" id="collapseExample">
                       <div class="mt-3">
                         <input type="text" name="" id="discount_code1" class="form-control font-weight-bold" placeholder="Enter discount code">
                         <h6 id="error_trw" class="text-dark mt-3">Code is axn </h6>
                       </div>
                       <button class="btn btn-primary btn-sm mt-3 " onclick="d()">Apply</button>
                     </div>
                     

                     </div>

                   </div>
                 </div>
                </div>  
               
            

             </div><br> 
             <div>
               <button type="button" class="btn btn-info"><a href="main.html" style="color: white;">Go Back</a></button>
            </div>
         </div>
       </div>
     </div>

   </div>
</body>
</html>
