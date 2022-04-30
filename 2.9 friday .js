// function time(from, to) {
//     setInterval(function () {
//         for (let i = from; i <= to; i++) {
//             console.log(i);
//         }
//     }, 1000, from, to);
// }




// function showNumber(from, to) {
//     let counter = from
//     let id = setInterval(
//     function () {
//     console.log(counter);
//     counter++
//     if (counter == to){
//     clearInterval(id)
//     }
//     },
//     1000,
//     );
//     }
//     showNumber(1, 7)

// function invetObj(obj) {
//    
//     result = Object.entries(obj);
//     console.log(result);
// }
// invetObj({ a: 1, b: 2 });
// //>>[["a", 1], ["b", 2]]

// function invetObj(obj) {
//     let arr = [];
//     arr = Object.keys(obj).map(x => [x, obj[x]]);
    
//     return arr;

// }

// console.log(invetObj({ a: 1, b: 2 }));



// // //>>[["a", 1], ["b", 2]]
// function invetObj(obj) {
//     let arr = [];
//     arr = Object.keys(obj).map(function( keys){
//         return [keys, obj[keys]]; 
//     })
    
//     return arr;

// }

// console.log(invetObj({ a: 1, b: 2 }));
// // //>>[["a", 1], ["b", 2]]


// /
// function detectWord(str){
//     str = str.split("");
//     let res = [];
//     res = str.filter(char =>{
//         if (char != char.toUpperCase()){
//             res.push(char);
//             return res;
//         }
        

            
//     })
//     res = res.join("");
//     console.log(res);
// }
// detectWord("UcUNFYGaFYFYGtNUH");



// function detectWord(str){
//     // str = str.split("");
//     str = [...str];
//     let res = [];
//     res = str.filter(char =>{
//         if (char != char.toUpperCase()){
//             res.push(char);
//             return res;
//         }
        

            
//     })
//     res = res.join("");
//     console.log(res);
// }
// detectWord("UcUNFYGaFYFYGtNUH");


// /
// function equal(obj1 , obj2){
//     let test = true;
//     for( let item in obj1){
//         if(obj1[item] !== obj2[item]){
//             test = false;

//         }
//     }
//     return test;
// }
// console.log(equal(a,b));


// function equal(obj1 , obj2){
//     return JSON.stringify(obj1) === JSON.stringify(obj2);
// }
// console.log( equal(a,b));





// let getStudentTopNotes1 = [
//     {
//     id: 1,
//     name: "Jacek",
//     notes: [5, 3, 4, 2, 5, 5]
//     },
//     {
//     id: 2,
//     name: "Ewa",
//     notes: [2, 3, 3, 3, 2, 5]
//     },
//     {
//     id: 3,
//     name: "Zygmunt",
//           notes: []
//     }
//     ] 

// function getStudentTopNotes(array){
//     let arr = array.map(function(item){
//         // if (item.notes.length == 0){
//         //     return 0;
//         // }
//       return Math.max(...item.notes,0);
//     })
//     return arr;
// }
// console.log(getStudentTopNotes(getStudentTopNotes1));





function getvalue(arr){

    for(n of arr){
    while(true){
        
        if(Array.isArray(n)){

            console.log(arr);
            arr.flat();
        } else {
            break;
        }
    }
}

console.log(arr);

}
getvalue([1,0,[2,[[3]],null,14],[null],[15],'hi','']);