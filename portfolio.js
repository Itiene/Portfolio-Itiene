const btn=document.getElementById("btn");
const form=document.querySelector(".formulario");
const progresso=document.querySelectorAll(".progresso");


form.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    const fnome=document.getElementById("fnome");
    const femail=document.getElementById("femail");
    const fmessage=document.getElementById("fmensagem");
    
    const nome=fnome.value.trim();
    const email=femail.value.trim();
    const message=fmessage.value.trim();

    if(nome === "" || email === "" || message === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if(message.length < 10){
        alert("A mensagem deve conter pelo menos 10 caracteres.");
        return;
    }

    alert("Formulário enviado com sucesso!");

    fnome.value = "";
    femail.value = "";
    fmessage.value = "";

});