let x=10 // anonymous function

let y=function()
 {
console.log("sample add")
x=x+10
console.log("x is: " + x);
};

y();

 
let fun=()=> {   // arrow function
    console.log("sample add");
    x=x+10;

    setTimeout(()=> {
        console.log("x is: " + x);
    }, 1000);
}
fun();


/// callback function
function add(movie, playmovie) {    
    console.log("Movie is: " + movie);
    playmovie();
}   
function movie() {
    console.log("Playing movie");
}   
console.log(add("Avengers", movie)); // Movie is: Avengers
