
    var time= new Date().getHours();
    if(time >= 6 && time<=13){
        alert("sabahin xeyir manis")
        document.body.style.background="yellow";
    }
    else if(time>13 && time<16){
        alert("gunortan xeyir manis")
        document.body.style.background="red";
    }
    else{
        alert("axwamin xeyir")
        document.body.style.background="dark";
    }

