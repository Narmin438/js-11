// function arrLoop(arr) {
//         if (arr<0) {
//             console.log(arr);
//         } 
// }
// let arr = [-1,3,-4,-8]
// arr.forEach(arrLoop)


// function arrLoop(arr) {
//         if (arr>0) {
//             console.log(arr);
//         } 
// }
// let arr = [-1,3,4,-8]
// arr.forEach(arrLoop)

// let arr = [-1,3,4,-8]
// arr.forEach(a => {
//     if (a>0) {
//         console.log(a);
//     }
// });


// let arr = [-1,3,4,-8]
// let r = arr.map(b =>{
//     if (b>0) {
//         return b*2
//     }else{
//         b=Math.abs(b)
//         return b
//     }
// })
// console.log(r);


// let arr =["green","red","blue"]

// let c = arr.find(b=>{
//     if (b.length===3) {
//         return b
//     }
// })
// console.log(c);


// let arr = ["Akif","Amin","Kamil","Asim","Kamal"]

// let r = arr.filter(a=>{
//     if (a[0]==="A") {
//         return a
//     }
// })
// console.log(r);


//Task-1 1ci usul

let countEvensAndOdds = [1,2,3,4,5,6,7]
evens = 0
odds = 0
let r = countEvensAndOdds.filter(a=>{
    if (a%2===0) {
        evens++
    } else {
        odds++
    }
    return evens,odds
})
console.log(`Cut ededlerin sayi:${evens} Tek ededlerin sayi:${odds}`);

console.log("------------------");

//Task-2

let arr = ["Anar, 2000", "Celil, 1990", "Sona, 1995"]

function sortByBirth(dates) {
    return dates.sort((a,b) =>{
        let year1 = +(a.split(", ")[1]);
        let year2 = +(b.split(", ")[1]);
        return year1-year2;
    })
    
}
console.log(sortByBirth(arr));

console.log("------------------");

//Task-3

let names = ["Hofstadter", "Cooper", "WoloWitz", "Koothrappali"]
names.sort();
console.log(...[names.reverse()]);
