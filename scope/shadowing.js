function shadowing_exmaple(){
    var val = 0;
    console.log("F", val);
    val++;
}

vat val = 0;
shadowing_exmaple();
console.log("O", val);