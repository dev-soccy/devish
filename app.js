const header01 = document.querySelector(".header1");
const vProfile = document.querySelector(".profile-sec");
const profilePic = document.querySelector(".profile-pic");
const details = document.querySelector(".details");
const skillContainer = document.querySelector(".skillcontainer");
const hundered = document.querySelector(".hundered");
const fifty = document.querySelector(".fifty");
const twentyFive = document.querySelector(".t5");
const reactT5 = document.querySelector(".react-t5");
const mongoT5 = document.querySelector(".mongo-t5");
const About = document.querySelector(".About");
const aboutBtn = document.querySelector(".about-btn");
const header02 = document.querySelector(".header2");
const serviceHead = document.querySelector(".service-head");
const serviceSec = document.querySelector(".service-sec");
const serviceBtn = document.querySelector(".service-btn");
const skillh2= document.querySelector(".skill-h2");
const header03= document.querySelector(".header3");
const langLogo= document.querySelector(".lang-logo");
const header04= document.querySelector(".header4");
const resumehead = document.querySelector(".resume-head");
const degDetais = document.querySelector(".deg-details0");
const resumeBtn = document.querySelector(".resume-btn");
const freelance= document.querySelector(".freelance-sec");
const header05= document.querySelector(".header5");
const navbar= document.querySelector(".nvbr");
const contactBtn= document.querySelector(".contact-btn");
const header06= document.querySelector(".header6");
const socialButtons= document.querySelector(".social-buttons");
const Switch= document.querySelector("#checkbox");
const aboutSecDark= document.querySelector(".about-sec");
const servicesSecDark= document.querySelector(".services-section");
const resumeSecDark= document.querySelector(".resume");
const contactSecDark= document.querySelector(".contact");
const videoSecDark= document.querySelector(".myVideo");
const navSecDark= document.querySelector("nav");
const textDark= document.querySelector(".mode-text");
const loader =  document.querySelector(".loader")
const input =  document.querySelector(".input")






profilePic.style.opacity = 0;
details.style.opacity = 0;
skillContainer.style.opacity = 0;
hundered.style.opacity = 0;
fifty.style.opacity = 0;
twentyFive.style.opacity = 0;
reactT5.style.opacity = 0;
mongoT5.style.opacity = 0;
About.style.opacity = 0;
serviceHead.style.opacity = 0;
serviceSec.style.opacity = 0;
skillh2.style.opacity = 0;
langLogo.style.opacity = 0;
resumehead.style.opacity = 0;
degDetais.style.opacity = 0;
freelance.style.opacity = 0;


 if(window.innerWidth<= 375){
  profilePic.style.opacity = 1;
  details.style.opacity = 1;
  skillContainer.style.opacity = 1;
  hundered.style.opacity = 1;
  fifty.style.opacity = 1;
  twentyFive.style.opacity = 1;
  reactT5.style.opacity = 1;
  mongoT5.style.opacity = 1;
  About.style.opacity = 1;
  serviceHead.style.opacity = 1;
  serviceSec.style.opacity = 1;
  skillh2.style.opacity = 1;
  langLogo.style.opacity = 1;
  resumehead.style.opacity = 1;
  degDetais.style.opacity = 1;
  freelance.style.opacity = 1
 }

let inner = window.innerWidth;
console.log(inner)
window.addEventListener('scroll',()=>{
  if(window.scrollY>850 ){
    navbar.style.justifyContent = "start"
    navbar.classList.add('slideOutLeft')
    socialButtons.style.display = "flex"
    socialButtons.classList.add('slideInRight')
    
    
  }else{
    navbar.style.justifyContent = "end"
    socialButtons.style.display = "none"
    

  }
})


Switch.addEventListener('click',()=>{
 aboutSecDark.classList.toggle("sec-dark")
 servicesSecDark.classList.toggle('sec-dark')
 resumeSecDark.classList.toggle('sec-dark')
 contactSecDark.classList.toggle('sec-dark')
 videoSecDark.classList.toggle('video')
 header01.classList.toggle('back-dark')
 header02.classList.toggle('back-dark')
 header03.classList.toggle('back-dark')
 header04.classList.toggle('back-dark')
 header05.classList.toggle('back-dark')
 navSecDark.classList.toggle('nav-dark')
 input.style.color ="white"
  if(textDark.innerHTML === "Turn On Dark Mode"){
    textDark.innerHTML = "Turn Off Dark Mode"
  }else{
    textDark.innerHTML = "Turn On Dark Mode"
  }
 

})





header01.addEventListener("mouseover", () => {
   if(window.innerWidth > 375){
    vProfile.classList.add("zoomIn");
    About.classList.add("zoomIn");
    skillContainer.classList.add("fadeInLeft");
    profilePic.style.opacity = 1;
    details.style.opacity = 1;
    skillContainer.style.opacity = 1;
    About.style.opacity = 1;
    aboutBtn.style.color = "yellow";
    aboutBtn.style.fontSize = "25px";
  
   }
 
  setTimeout(() => {
    hundered.style.opacity = 1;
    hundered.classList.add("fadeInLeft");
  }, 1000);
  setTimeout(() => {
    fifty.style.opacity = 1;
    fifty.classList.add("fadeInLeft");
  }, 1500);
  setTimeout(() => {
    twentyFive.style.opacity = 1;
    twentyFive.classList.add("fadeInLeft");
  }, 2000);
  setTimeout(() => {
    reactT5.style.opacity = 1;
    reactT5.classList.add("fadeInLeft");
  }, 2500);
  setTimeout(() => {
    mongoT5.style.opacity = 1;
    mongoT5.classList.add("fadeInLeft");
  }, 3000);
});

header01.addEventListener("mouseleave", () => {
  aboutBtn.style.color = "white";
  aboutBtn.style.fontSize = "20px";
});


header02.addEventListener('mouseover',()=>{
serviceHead.classList.add('fadeInUp')
serviceSec.classList.add('fadeInUp')
serviceSec.style.opacity = 1;
serviceBtn.style.color = "yellow";
serviceBtn.style.fontSize = "25px";
})

header02.addEventListener('mouseleave', ()=>{
    serviceBtn.style.color = "white";
  serviceBtn.style.fontSize = "20px";
})

header03.addEventListener('mouseover',()=>{
    skillh2.classList.add('fadeInUp')
    langLogo.style.opacity = 1;
    skillh2.style.opacity = 1;
    langLogo.classList.add('fadeInUp')

})

header04.addEventListener('mouseover',()=>{
resumehead.classList.add('fadeInUp')

resumehead.style.opacity =1;

resumeBtn.style.color = 'yellow'
resumeBtn.style.fontSize = '25px'
setTimeout(()=>{
  degDetais.classList.add('zoomIn')
  degDetais.style.opacity =1;
},100)
})

header04.addEventListener('mouseleave',()=>{
  resumeBtn.style.color = 'white'
resumeBtn.style.fontSize = '20px'
})

header05.addEventListener('mouseover',()=>{
  freelance.style.opacity = 1;
  freelance.classList.add('fadeInUp')
 

})

header06.addEventListener('mouseover', ()=>{
  contactBtn.style.color ='yellow'
  contactBtn.style.fontSize ='25px'
})
header06.addEventListener('mouseleave', ()=>{
  contactBtn.style.color ='white'
  contactBtn.style.fontSize ='20px'
})



//============================================================-----------------EMAIL FUNCTION===========----------===========================================================

function sendEmail(){
  let name =  document.getElementById('name').value;
  let email =  document.getElementById('email').value;
  let subject =  document.getElementById('subject').value;
  let message =  document.getElementById('message').value;
  let body = "Name:" + name + "<br/> Email:" + email + "<br/> Message:" + message;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mauryazayn@gmail.com",
    Password : "01B3B1CD346D88DE7A8338038C6366633191",
    To : 'vishallmaurya@gmail.com',
    From : "mauryazayn@gmail.com",
    Subject: subject,
    Body : body,
}).then(
  message => alert("Successfully Send")
);
}
