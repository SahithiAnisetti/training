// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// // x.id ="demo"
// x.setAttribute("id" , "demo");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image);


// let form = document.querySelector("form");
// let name = document.getElementById("uName");
// let mail = document.getElementById("uEmail");
// let psw = document.getElementById("uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // console.log("form submitted");
//     // console.log(name.value);

//     let username = name.value;
//     let email = mail.value;
//     let password = psw.value;
//     let userDetails={
//         username:username,
//         email:email,
//         password:password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })

// // localStorage.clear()

// dynamic elements
let mainEle=document.createElement("div");
mainEle.setAttribute("class", "mainBlock");
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class", "topBlock");
//console.log(topEle);

let image=document.createElement("img");
image.src="https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_640.jpg";
image.width="300"
image.hight="300"

let bottomEle= document.createElement("div");
bottomEle.setAttribute("class","bottomBlock");
//console.log(bottomEle);
let h1=document.createElement("h1");
h1.innerHTML="Heading";

let btn=document.createElement("button");
btn.innerHTML="View More";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image)
mainEle.appendChild(topEle)
mainEle.appendChild(bottomEle)
document.body.appendChild(mainEle);