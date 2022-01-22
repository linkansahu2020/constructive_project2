var lc = []
var l = JSON.parse(localStorage.getItem("cartData"));
let {delreturn,description,hoverimg,img,name,price,quantity,rate} = l
lc.push(l)
console.log('lc:', lc)
var total = 0;
var count;
display();    
function display(){
    var totalArr = [];
    document.querySelector("tbody").textContent="";
    
    lc.map(function(elem,index){

        var row = document.createElement("tr")
        var col1 = document.createElement("td")
        var col2 = document.createElement("td")
        var col3 = document.createElement("td")
        var col4 = document.createElement("td")
        var img = document.createElement("img");
        var name = document.createElement("p");
        var div = document.createElement("div");
        var info = document.createElement("p");
        var size = document.createElement("p");
        var color = document.createElement("p");
        var sizeSpan = document.createElement("span");
        var colorSpan = document.createElement("span");

        img.setAttribute("src",elem.img)
        img.style.marginTop="7px";
        img.setAttribute("height","130px")
        img.setAttribute("width","100px")
        col1.style.display="flex"
        col1.style.lineHeight="0px"
        div.style.marginLeft="2%"
        div.style.marginTop="10%"
        div.style.lineHeight="35px"
        info.setAttribute("id","lin")
        size.setAttribute("id","lsc")
        color.setAttribute("id","lsc")
        col2.setAttribute("id","lcol2")
        col4.setAttribute("id","lcol4")

        col2.textContent = "₹"+elem.price 
        col4.style.textAlign="center"
        name.textContent = elem.name
        info.textContent = elem.info

        var col5=document.createElement("button");
        col5.textContent="Remove";
        col5.addEventListener("click",function(){
            deleteRow(index);
        })
        col5.style.color="black";
        col5.style.backgroundColor="white";
        col5.style.borderRadius="5px";
        col5.style.padding="0px";
        col5.style.fontWeight="bold";
        col5.style.fontSize="10px"
        col5.style.borderRight="none";
        col5.style.borderLeft="none";
        col5.style.marginBottom="5px";


        div.append(name,info,size,color,col5)
        col1.append(img,div);
        color.append(colorSpan)
        size.append(sizeSpan)

        var qntDiv = document.createElement("div");
        var pDiv = document.createElement("div");
        pDiv.textContent="+";
        pDiv.style.fontWeight="bold";
        var mDiv = document.createElement("div");
        mDiv.textContent="-";
        mDiv.style.fontWeight="bold";
        var cDiv = document.createElement("div");
        cDiv.textContent=1;


        qntDiv.setAttribute("id","lqntDiv");
        qntDiv.append(mDiv,cDiv,pDiv)
        col3.append(qntDiv);

        row.append(col1,col2,col3,col4)
        document.querySelector("tbody").append(row)

        mDiv.addEventListener("click",myminusFunc);
        pDiv.addEventListener("click",myplusFunc);

        count = 1;
        var p = elem.price
        col4.textContent="₹"+p*count;
        total += p*count;
        totalArr.push(p*count);
        localStorage.setItem("tp",JSON.stringify(totalArr))
        function myplusFunc(){
            count++;
            cDiv.innerHTML=count;
            total += +p;
            col4.textContent="₹"+p*count;
            totalPrice()
        }
        function myminusFunc(){
            if(cDiv.textContent==0){
                mDiv.removeEventListener("click",myminusFunc)
            }
            else{
                count--;
                cDiv.innerHTML=count;
                total -= +p;
                col4.textContent="₹"+p[1]*count;
                totalPrice()
            }
        }
    })
}
    function deleteRow(ele,index){
        lc.splice(index,1);
        var tota = JSON.parse(localStorage.getItem("tp"))
        console.log(tota)
        total = total- +tota[index];
        localStorage.setItem("cartData",JSON.stringify(l));
        display();
        totalPrice();
    }

    totalPrice()
    function totalPrice(){
        
        document.querySelector("#lbag").textContent=total;
        localStorage.setItem("bagPrice",JSON.stringify(total))
        localStorage.setItem("quntity",JSON.stringify(count))
        
    }
