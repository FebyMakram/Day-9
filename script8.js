///// use for loop and other types///////////

var products=["samsung","LG","HP","Dell"];
var result="";


for ( var i=0 ; i<products.length ; i++) {
  result +=products[i] +"<br>"

}

console.log(result);

document.getElementById("forloop1").innerHTML=result

        /////////////////////////

var products=["samsung","LG","HP","Dell"];
var result="";

for(var a in products)
{
    result += products[a] +"<br>"   
}
console.log(result);

document.getElementById("forloop2").innerHTML=result

        ////////////////////////////////////

var products=["samsung","LG","HP","Dell"]; 
var result="";

products.forEach( i=> {
    result += i +"<br>"   
})
console.log(result);

document.getElementById("forloop3").innerHTML=result


        //////////////////////////////////////////////
var result="";

for( var i=0 ; i< 6 ; i++)
    {
        result += i +"<br>"
    }
    console.log(result);

    document.getElementById("forloop4").innerHTML=result

////////////////////////////////////////////////////////////////////////  