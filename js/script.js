let containerDown=document.querySelector(".item"),containerUp=document.querySelector(".item2"),blocksDown=Array.from(containerDown.querySelectorAll(".block")),blocksUp=Array.from(containerUp.querySelectorAll(".block")),text=document.querySelector(".text"),startBtn=document.querySelector(".start_btn"),dogs=document.querySelector(".bottom_dogs");function animateBlocks(){let e=document.querySelector(".modal"),t=document.querySelector(".modal a");t.style.display="none",e.classList.add("active");let o=[],r=[];for(let e=0;e<5;e++){var n=blocksDown.slice(5*e,5*(e+1));o.push(n);n=blocksUp.slice(5*e,5*(e+1));r.push(n)}o.reverse(),r.reverse(),o.forEach(((e,t)=>{setTimeout((()=>{e.forEach(((e,t)=>{setTimeout((()=>{e.style.transform="translateY("+containerUp.offsetHeight+"px)"}),80*t)}))}),80*t)})),setTimeout((()=>{r.forEach(((o,r)=>{setTimeout((()=>{o.forEach(((o,r)=>{setTimeout((()=>{o.style.transform="translateY("+containerUp.offsetHeight+"px)",o.style.transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"}),80*r),setTimeout((()=>{e.classList.add("opacity"),t.style.display="block"}),80*r+3e3)}))}),80*r)}))}),80*o.length),text.classList.add("active"),startBtn.classList.add("active")}let frame=document.querySelector(".frame"),wrapper=document.querySelector(".wrapper");function removeText(){window.innerWidth>=500||window.innerWidth>=925&&window.innerHeight>=425?wrapper.appendChild(text):frame.appendChild(text)}function shuffleImages(e){let t=[1,2,3,4,5,6,7,8,9,10];for(let e=t.length-1;e>0;e--){let o=Math.floor(Math.random()*(e+1));[t[e],t[o]]=[t[o],t[e]]}e.forEach(((o,r)=>{let n,s=o.querySelector("img");e===blocksUp&&r>=5&&r<=9?(n=10,o.classList.add("bonus")):n=t[r%t.length],s.src="images/elem/"+n+".webp"}))}removeText(),window.addEventListener("resize",removeText),shuffleImages(blocksUp),shuffleImages(blocksDown);let logo=document.querySelector(".logo"),logoMedia=document.querySelector(".logo img"),casinoLogo=document.querySelector(".casino_logo");document.addEventListener("DOMContentLoaded",(()=>{function e(){const e=document.querySelector('img[src="images/house.webp"]');if(e){e.getBoundingClientRect().top+window.scrollY>100?(logo.classList.add("big"),logoMedia.src="images/logo_media.webp"):(logo.classList.remove("big"),logoMedia.src="images/logo.webp")}}function t(){e()}window.addEventListener("load",(()=>{e(),window.addEventListener("resize",t)}))}));