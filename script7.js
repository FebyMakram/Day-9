////////use while and do while//////////////

var a = 0 ;
var result="" ;

while(a<10)
    {
    result += "the number :" + a +"<br>" ;
    a++ ;
}
console.log(result);

document.getElementById("while").innerHTML=result

/////////////////////////////////

var i = 10;
var result ="" ;

do {
    result += "the Number is " + i + "<br>"
    i++
} while (i<11);

console.log(result);

document.getElementById("dowhile").innerHTML=result

////////////////////////////////////////////////////////