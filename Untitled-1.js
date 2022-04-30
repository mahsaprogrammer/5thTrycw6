// var library = [ 
//     {
//         author1: 'Bill Gates',
//         title1: 'The Road Ahead',
//         readingStatus1: true
//     },
//     {
//         author2: 'Steve Jobs',
//         title2: 'Walter Isaacson',
//         readingStatus2: true
//     },
//     {
//         author3: 'Suzanne Collins',
//         title3:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus3: false
//     }];
//     for( let i =0 ; i<library.length; i++){
//        let result = Object.keys(library[i]); 
//        console.log(result);
//     }

// let seconds;
// seconds.getTime();
// function after5Seconds() {
//     console.log(seconds.getTime());
//     after5S = seconds + 5;
//     if (after5S - 5 == seconds) {
//         console.log(" maktab");
//     }
//}


// let seconds;
// seconds.getTime();
// function after5Seconds() {
//     console.log(seconds.getTime());
//     after5S = seconds + 5;
//     if (after5S - 5 == seconds) {
//         if (after5S % 5 === 0) {
//             console.log(" maktab");
//         }
//     }

// }

//1
// let obj ={ num: 5};
// function add ( a, b){
//     return this.num+ a+b;
// }  
// add(3,2);

// //2
// let obj2={ num: 5};
// function add ( a, b){
//     return obj2.num +a+b;
// }
// add(3,2);

// //3
// function add ( a, b){
//     let obj3={ num: 5};
//     return obj3.num+ a+b;
// }


function join(array1, array2){
    let newarray=[]
    array1.array.forEach(element => {
        new array =[...newarray , ...array1,array2];
    });

}


