
let CartData = localStorage.getItem("cartdata")


if(CartData === null){
    CartData =[]
}
else{
    CartData = JSON.parse(CartData)
}

let search = document.getElementById("search")

search.addEventListener("input", function () {
    let filtered = CartData.filter(function (element) {
        if (element.name.toUpperCase().includes(search.value.toUpperCase()) === true) {
            return true;
        }
        else if (element.id.toUpperCase().includes(search.value.toUpperCase()) === true) {
            return true;
        }  
        else  if (element.brand.toUpperCase().includes(search.value.toUpperCase()) === true) {
            return true;
        } 
        else  if (element.catagory.toUpperCase().includes(search.value.toUpperCase()) === true) {
            return true;
        } 
        
        else {
            return false;
        }
    })
    Display(filtered);
})



let sum=0;

let cartdiv = document.getElementById("cart_div")
let pricediv = document.getElementById("Price_detail")
Display(CartData);
function Display(data){
cartdiv.innerHTML=""
data.forEach((element,i) => {
    let pro = document.createElement("div")
    let imgdiv = document.createElement("div")
    let detdiv = document.createElement("div")
    let img = document.createElement("img");
    let name = document.createElement("h4");
    let price = document.createElement("h5");
    let qnt = document.createElement("h5");
    let inc = document.createElement("button")
    let dec =document.createElement("button");
    let rem = document.createElement("button")

    img.src = element.img;
    name.innerText=element.name;
    price.innerText = ` ₹${element.price}`;
    qnt.innerText = element.qnt;
    inc.innerText = "+";
    dec.innerText = "-";
    rem.innerText = "Remove";

    inc.addEventListener("click",function(){
        element.qnt++;
        localStorage.setItem("cartdata",JSON.stringify(CartData));
        Display(CartData);
    })

    dec.addEventListener("click", function () {
        if (element.qnt > 1) {
          element.qnt--;
          localStorage.setItem("cartdata", JSON.stringify(CartData));
          Display(CartData);
        }
      });

        rem.addEventListener("click", function () {
        CartData = CartData.filter(function (ele) {
            return ele.id !== element.id
           
        })
        localStorage.setItem("cartdata", JSON.stringify(CartData));
        Display(CartData);
    })



    imgdiv.append(img)
    detdiv.append(name,price,inc,qnt,dec,rem);

    pro.append(imgdiv,detdiv)

    cartdiv.append(pro)

    // sum+= +element.price

    let orderprice = document.getElementsByClassName("total")
let productprice = document.getElementsByClassName("productprice")
let discount = document.getElementsByClassName("discount")

let sum = 0;
for(let i=0;i<CartData.length;i++){
    sum+= Number(CartData[i].qnt) * Number(CartData[i].price) ;
    
}
productprice.innerText = sum;
   
});


}


