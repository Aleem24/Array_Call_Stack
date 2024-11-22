let num = [ 9 , 8 , 7 , 6];
// document.getElementsById("join").innerHTML = num.pop();

console.log(num);
// num.pop();
// console.log(num);
function add (x,y){
    return x+y;
};
function average (a,b){
    return add (a,b)/2;
};
let result = average(num[0],num[num.length -1] );
document.getElementById("join").innerHTML = result;
