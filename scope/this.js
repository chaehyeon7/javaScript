function f(){
    console.log(this);
    console.log("f is ccalled");
}

var o = {name:"object", method:f};

f();
o.method();