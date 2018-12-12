

var b=2; //scope global
function a() {
    console.log("a");
    var e=5; //scope a
    console.log(b);
    console.log(c);
    console.log(e);
    console.log(d);
}
function f() {
    console.log("f");
    var d=6; //scope f
    console.log(d);
}
f();
a();
var c=3; //scope global

