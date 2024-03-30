// Create a new input and button element on the page using JavaScript only. Set the



// text of button to "Click me'


//  let input= document.createElement("input")
//  let btn=document.createElement("button")
// btn.innerText="Click me";

//  document.querySelector("body").append(input)
// / document.querySelector("body").append(btn)
// btn.setAttribute("id" , "btn")
// input.setAttribute("placeholder","username")
// let bttn= document.querySelector("#btn");
// btn.classList.add("box")
// let h1=document.createElement("h1")
// h1.innerHTML="<u>DOM Practice<u/>"ss
// h1.classList.add("purple")
// document.querySelector("body").append(h1)
// let p=document.createElement("p")
// p.innerHTML="<p>APna College <b>Delta<b/> Pratice<p/>"
// document.querySelector("body").append(p)


let ul=document.querySelector("ul")
ul.addEventListener(
    "mouseleave",
    (event) => {
      // highlight the mouseleave target
      event.target.style.color = "purple";
  
      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 1000);
    },
    false,
  );
ul.addEventListener("mouseout",event=>{
event.target.style.color="orange"
setTimeout(()=>{
    event.target.style.color=""

}, 500)
},
false,
);
// ul.scroll(0, 1000);
// ul.scroll({
//     top: 100,
//     left: 100,
//     behavior: "smooth",
//   });


//   let button=document.createElement("button")
//   button.innerText="Click me";
//   document.querySelector("body").append(button)
//   button.addEventListener("click",event=>{
//    button.style.backgroundColor="green"
//   })
//   Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]
let h2=document.createElement("h2")
h2.innerText="Name Form"
document.querySelector("body").append(h2)
let input=document.createElement("input")
input.setAttribute("placeholder","enter your name");
document.querySelector("body").append(input);
input.addEventListener("input", function(event) {
    let input = event.target.value;
    let sanitizedInput = input.replace(/[^a-zA-Z\s]/g, ''); // Replace non-alphabetic characters with empty string
    h2.innerText = sanitizedInput;
});