/* MOBILE MENU */
document.getElementById("menu").onclick=function(){
document.getElementById("navlinks").classList.toggle("active")
}

/* TYPING ANIMATION */
const words=["Web Developer","Programmer","CSE Student","Tech Enthusiast"]

let i=0
let j=0
let current=""
let isDeleting=false

function type(){
current=words[i]

if(!isDeleting){
document.getElementById("typing").textContent=current.slice(0,++j)
}else{
document.getElementById("typing").textContent=current.slice(0,--j)
}

if(j==current.length){
isDeleting=true
setTimeout(type,1000)
return
}

if(j==0){
isDeleting=false
i=(i+1)%words.length
}

setTimeout(type,isDeleting?60:120)
}

type()

/* SCROLL REVEAL */
const sections=document.querySelectorAll(".section")

window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
const top=sec.getBoundingClientRect().top
if(top<window.innerHeight-100){
sec.classList.add("show")
}
})
})

/* SKILL ANIMATION */
const skills=document.querySelectorAll(".skill-bar span")

window.addEventListener("scroll",()=>{
skills.forEach(skill=>{
const width=skill.getAttribute("data-width")
if(skill.getBoundingClientRect().top<window.innerHeight){
skill.style.width=width
}
})
})
