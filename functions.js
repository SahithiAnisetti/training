// without parameters and arguments//
// function demo(){
//     console.log("Function Example");
// }
// demo();

// with parameters and arguments//
// function add1(a,b){
//     console.log(a+b);
// }
// add1(5,6);
// add1(5,7);
// add1(5,8); // can call multiole times


// function addToCart(){
//     document.body.style.background="teal";
//     alert("product added to cart");
// }
////////////////////
// function onemoretime(){
//     console.log("Hellow");
// }
// onemoretime()
////////////
//anonymus function
// function(){
//     console.log("Anonymus function")
// }
//////
//function expression
// let x =function(){
//        console.log("function expression")
//      };
//      //console.log(x);
//      x();

//iife immediate invoke expression//////////////
// (
//     function(){
//         console.log("IIFE")
//     }
// )();
// //2ND LOGIC
// (
//     function(){
//         console.log("IIFE")
//     }
// )()();
///////////////////////////////////////////
//ARROW FUNCTION//
// function demo{
//     console.log("Hello");
// }
// demo();

///1//
// let x = ()=>{console.log("Hellow")};
// x();

//2//
// let x = _ =>{console.log("Hello")};
// x();


// let x = (a,b)=>console.log(a+b);
// x(10,5);
///////////
// let x =_ =>{console.log("HI");
//             console.log("byee");}
//             x();
////////////////////////////////////////
// function add(a,b){
//     return a+b;//explicit return (return is end of the statement)
// }
// let x = add(5,5);
// console.log(x);

//arrow function

// let x = (a,b) => a+b;//implicit return
// console.log(x(10,30));
///////////////
// function hof(a){
//     return a;

// };
// let x = hof(function(){return "This is callback function"});
// console.log(x);

// let b =function(){
//     console.log("Anonymus");
// };

// console.log(b);

/////////////////////
// function add(callback){
//     return callback(5,3);
// };
// let x =add(function(a,b){return a+b});
// console.log(x);

///////////
// let users = ["sahithi","shan","vishnu"]
//let x users.map((user)=>){
//return user;
//});
// console.log(x);

//  let x = users.forEach((user)=>{
//     return (user);
//  });
// console.log(x);
///////////////////////
// var a = 10;
// let b = 30;
// function x(){
//     var user = "sahithi";
//     let company = "Amazon";
//     const sal = 1235667;
//     console.log(user);
//     console.log(company);
//     console.log(sal);

// console.log(a,b);
// }
// x();



//function x(){
    //     var a = 10;
    //     let b = 20;
    //     console.log(a , b);
    //     function y(){
    //         let p = "js";
    //         let q = "React";
    //         console.log(p ,q);
    //         }
    // }
    
    
    // function x(){
    //     let a = 10;
    //     const b = 20;
    //     console.log(a,b);
    //     function y(){
    //         let p ="Js";
    //         var q = "React";
    //         console.log(p,q);
    //         function z(){
    //             const username ="sahithi";
    //             console.log(username);
    //         }
    //     }
    // }
    ////////////////////////
    function x(){
            let a = 10;
            const b = 20;
            console.log(a,b);
            function y(){
                let p ="Js";
                var q = "React";
                console.log(p,q);
                function z(){
                    const username ="sahithi";
                    console.log(username);
                    console.log(a);
                    console.log(q);
                }
                z();
            }
            y();
        }
        x();

         
    

