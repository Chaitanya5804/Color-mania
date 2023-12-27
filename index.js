function random(){
    var n = Math.floor(Math.random()*16777215);  
    console.log(n); 
    return ("#"+n); 
}
function colorchanger(){
    document.querySelector('body').style.backgroundColor = random();
}
