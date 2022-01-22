let x=document.getElementById("rightlowerdiv")
let y=document.getElementById("containermiddle")

getData(`https://fakestoreapi.com/products`,x)
getData(`https://fakestoreapi.com/products`,y)
async function getData(url,x){
    let res = await fetch(url)
    let data = await res.json()
    console.log('data:', data)
    showData(data,x)
  
}
function getStar(rating){
    let output = []
    let ceil = Math.ceil(rating)
    for(let i = 1;i<=5;i++){
        if(i<=rating){
            output.push('<i class="fas fa-star" style="color:gold"></i>&nbsp;')
        }
        else if(ceil>rating){
            output.push('<i class="fas fa-star-half-alt" style="color:gold"></i>&nbsp;')
            ceil=rating
        }
        else{
            output.push('<i class="fas fa-star" style="color:rgb(214, 212, 212)"></i>&nbsp;')
        }
    }
    // console.log(output)
    return output.join("")
}

function showData(data,body){
        body.innerHTML = null
        // console.log(data)
        data.forEach((ele)=>{
            let {image,price,rating:{rate,count},title} = ele
           let div = document.createElement("div")
            let wishList = document.createElement("div")
            let imgDiv = document.createElement("div")
            let infoDiv = document.createElement("div")
            let im = document.createElement("img")
            let p = document.createElement("p")
            let orprice = document.createElement("span")
            let pri = document.createElement("span")
            let starDiv = document.createElement("div")
            let priDiv = document.createElement("div")
            let pricon = document.createElement("div")
            let disc = document.createElement("span")


pricon.setAttribute("id","vpricon")

            starDiv.setAttribute("id","vstar")
            starDiv.innerHTML = getStar(rate)+` (${count})`
            pri.innerText = `Rs. ${Math.floor(price)}`


   let offprice =Math.floor(Math.random() * (price*7 - price) + price);
// console.log(offprice)
let d=Math.round(100*((offprice-price)/offprice))
// console.log(d)
disc.innerText=`${d} %OFF`

orprice.innerText=  "Rs." +(offprice)
          imgDiv.setAttribute("id","vimgDiv")
            infoDiv.setAttribute("id","vinfoDiv")
            im.src = image
             wishList.innerHTML = `<i class="far fa-heart"></i>`
            wishList.setAttribute("id","vwishList")
            pri.setAttribute("id","vinprice")
            // im.setAttribute("width","100%")
          



            div.setAttribute("id","vinProduct")
            p.innerText = title


            imgDiv.append(wishList,im)

priDiv.append(orprice,pri)

pricon.append(priDiv,disc)
           infoDiv.append(p,starDiv,pricon)


            div.append(imgDiv,infoDiv)



            body.append(div)
            wishList.onclick=function(){
                if(wishList.style.color !== "red"){
                    wishList.style.color = "red"
                }
                else{
                    wishList.style.color = "black"
                }
            }
        })
    }
   





