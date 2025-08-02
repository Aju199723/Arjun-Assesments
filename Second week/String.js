let comp="new company is here"
let splitcompAsArray=comp.split(" ");
console.log(splitcompAsArray); // [ 'new', 'company', 'is', 'here' ]

let course="plsywright";
let sliceCourse=course.slice(0, 4);
console.log(sliceCourse); // playwright

let slicecourse=course.slice(3,9);
console.log(slicecourse); // company

let slicecourse1=course.slice(-6,-3)
console.log(slicecourse1); // company

 let reverseCourse=course.split("").reverse();
    console.log(reverseCourse); // t, h, g, i, r, w,

for(i=course.length-1;i>=0;i--) {
    console.log(course[i]); // t, h, g, i, r, w, y, l, a, p

   
}