console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccion");
console.log("4. Tea");

var count =0;
while(true){

    var ans;
    ans = parseInt(prompt("1+1=?"));
    if( ans != 2){
        console.log( (++count) + "번 틀렸습니다.")
        continue;
    }

    ans = parseInt(prompt("7-3=?"));
    if( ans != 4){
        console.log( (++count) + "번 틀렸습니다.")
        continue;
    }

    ans = parseInt(prompt("9*7=?"));
    if( ans != 63){
        console.log( (++count) + "번 틀렸습니다.")
        continue;
    }
    break;

    // countinue를 만나면 여기로 이동.
}
