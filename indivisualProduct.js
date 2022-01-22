var arr = JSON.parse(localStorage.getItem("lindivisualProduct"));
let {delreturn,description,hoverimg,img,name,price,quantity,rate} = arr
document.querySelector("#lproName").textContent=name;
document.querySelector("title").textContent=name;
var image = document.createElement("img");
image.setAttribute("src",img);
image.setAttribute("width","100%");
image.setAttribute("height","100%");
document.querySelector("#limgContainer").appendChild(image);
document.querySelector("#lname").textContent=name;
document.querySelector("#lin").textContent=description;
document.querySelector("#lprice").textContent=`Rs: ${price}`;

document.getElementById("lcart").addEventListener("click",addItemToCart);
// let carr= []
function addItemToCart(){
    localStorage.setItem("cartData",JSON.stringify(arr))
    // var cart = JSON.parse(localStorage.getItem("cartData"));
    // carr.push(cart)
    // if(localStorage.getItem("cartData")==null){
    //     localStorage.setItem("cartData",JSON.stringify(arr))
    // }
    // else{
    //     var imgL = !!cart.find((item)=>item.img==img)
    //     if(!imgL){
    //         cart.push(arr[0]);
    //         localStorage.setItem("cartData",JSON.stringify(cart))
    //     }
    // }
}
document.getElementById("lbuy").addEventListener("click",buyNow);
function buyNow(){
    localStorage.setItem("cartData",JSON.stringify(arr))
    window.location.href="ogcart.html";
    // var cart = JSON.parse(localStorage.getItem("cartData"));
    // if(localStorage.getItem("cartData")==null){
    //     localStorage.setItem("cartData",JSON.stringify(arr))
    // }
    // else{
    //     var imgL = !!cart.find((item)=>item.imgLink==img)
    //     if(!imgL){
    //         cart.push(arr[0]);
    //         localStorage.setItem("cartData",JSON.stringify(cart))
    //     }
    // }
}
document.querySelector(".s24").addEventListener("click",myFunc1);
function myFunc1(){
    var value = document.querySelector(".s24").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 24;
}
document.querySelector(".s26").addEventListener("click",myFunc2);
function myFunc2(){
    var value = document.querySelector(".s26").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 26;
}
document.querySelector(".s28").addEventListener("click",myFunc3);
function myFunc3(){
    var value = document.querySelector(".s28").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 28;
}
document.querySelector(".s30").addEventListener("click",myFunc4);
function myFunc4(){
    var value = document.querySelector(".s30").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 30;
}
document.querySelector(".s32").addEventListener("click",myFunc5);
function myFunc5(){
    var value = document.querySelector(".s32").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 32;
}
document.querySelector(".s34").addEventListener("click",myFunc6);
function myFunc6(){
    var value = document.querySelector(".s34").value;
    document.querySelector("#lno_size").textContent=value;
    arr[0].size = 34;
}
document.querySelector("#lno_col").textContent=arr[0].color;
var colo = document.querySelector("#lcol");
colo.style.background=arr[0].color;

document.querySelector("#laddFav").addEventListener("click",addFunction);
function addFunction(){
    var wlist = document.querySelector("#laddFav");
    wlist.style.color="red"
}