async function getData(url){
    let res = await fetch(url)
    let data = await res.json()
    // console.log('data:', data)
    return data;
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
export {getData,getStar}