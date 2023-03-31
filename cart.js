
let CartData = localStorage.getItem("cartdata")


if(CartData === null){
    CartData =[]
}
else{
    CartData = JSON.parse(CartData)
}

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
    let qnt = document.createElement("h6");
    let inc = document.createElement("button")
    let dec =document.createElement("button");
    let rem = document.createElement("button")

    img.src = element.img;
    name.innerText=element.name;
    price.innerText = `Price : ₹${element.price}`;
    qnt.innerText = 1;
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
});

}