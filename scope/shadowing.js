function shadowing_exmaple(){
    console.log("F", val);
    val++;
}

vat val = 0;
shadowing_exmaple();
console.log("O", val);