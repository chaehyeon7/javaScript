function f(){
    console.log("f is ccalled");
}

var o = {name:"object", method:f};

f();
o.method();