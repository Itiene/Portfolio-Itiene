import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const fnome=document.getElementById("fnome");
const femail=document.getElementById("femail");
const fmessage=document.getElementById("fmessage");
const btn=document.getElementById("btn");



btn.addEventListener("click", function(event){
    event.preventDefault(); 
    const nome = fnome.value;
    const email = femail.value;
    const message = fmessage.value;
    if(nome && email && message != ""){
        alert("Mensagem enviada com sucesso!");
        fnome.value = nome;
        femail.value = email;
        fmessage.value = message;
    } else {
        alert("Por favor, preencha todos os campos.");
    }

})   