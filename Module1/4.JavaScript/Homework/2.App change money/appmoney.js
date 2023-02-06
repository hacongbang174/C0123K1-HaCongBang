function Covert() {
    let Amount = document.getElementById("Amount").value;
    let FormC = document.getElementById("FromCurrency").value;
    let To = document.getElementById("ToCurrency").value;
    if (FormC == "VietNam" && To == "USD"){
        document.getElementById("Result").innerHTML ="Result: " +Number(Amount)/23000 + "$";
    }    else if (FormC == "VietNam" && To == "VietNam"){
                document.getElementById("Result").innerHTML ="Result: " + Number(Amount) + "Đ";
            }    else if (FormC == "USD" && To == "VietNam") {
                    document.getElementById("Result").innerHTML ="Result: "+ Number(Amount)*23000 + "Đ";
                    }    else {
                            document.getElementById("Result").innerHTML ="Result: " + Number(Amount) + "$" ;}
                    
                
           
}