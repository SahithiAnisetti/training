//Document.getElementId("");
// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

/// let element = document.getElementById("demo");
// element.innnerText="DOM";
// console.log(element);

// let div=document.getElementById("test");
// div.innerHTML="<h1>Header</h1>";
// console.log(div);

// let ele=document.getElementsByClassName("test");
// // console.log(ele);
// // console.log(Array.isArray(ele));
// ele[0].style.backgroundColor="yellow";

// //spread operator
// let x=[...ele];
// console.log(x, Array.isArray(x));
// x.map((element)=>{
//     // console.log(element);
//     element.style.backgroundColor="teal";
// })

// let ele=document.getElementsByTagName("div");
// console.log(ele);

// let ele=document.querySelector("#demo");
// console.log(ele);

// let ele=document.querySelectorAll(".test");
// // console.log(ele);
// [...ele].map((element)=>{
//     console.log(element.innerText);
// })

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//////EVENT/////
// let btn = document.getElementById("btn");
// //btn.addEventListener("events", callback)


let bgColor = document.querySelectorAll(".bgColor");
[...bgColor].map((element)=>{
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor=element.innerText;
    });
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor="transparent";

    })
})