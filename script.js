let navbar = document.getElementById("navbar");
window.onscroll = function(){
    if(window.scrollY>20){
        navbar.classList.add("scrolled");

    } else{
        navbar.classList.remove("scrolled");
    }
}
document.getElementById("git1Button").addEventListener("click",function(){
    window.open("https://github.com/anirudha2097/common-tank-1254", "_blank");
})
document.getElementById("deploy1Button").addEventListener("click",function(){
    window.open("https://resonant-malabi-d9ce8b.netlify.app/", "_blank");
})

document.getElementById("git2Button").addEventListener("click",function(){
    window.open("https://github.com/anirudha2097/fun-note-365", "_blank");
})
document.getElementById("deploy2Button").addEventListener("click",function(){
    window.open("https://marvelous-wisp-ebed52.netlify.app/", "_blank");
})

document.getElementById("instagram").addEventListener("click",function(){
    window.open("https://www.instagram.com/__anya_38/")
})

document.getElementById("linkedin").addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/anirudhadesai/");
})

document.getElementById("github").addEventListener("click",function(){
    window.open("https://github.com/anirudha2097");
})

function SendMail(){
    let params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_ekj990b", "template_976hc43", params).then(function(res){
        if(res.status=200){
            alert("Message has been send successfully.");
            document.getElementById("fullName").value="";
            document.getElementById("email_id").value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
        }
    })
}


function navbtn(id){
    if(id=="1"){
        document.getElementById("1").style.color="rgb(6, 177, 162)";
        document.getElementById("2").style.color="black";
        document.getElementById("3").style.color="black";
        document.getElementById("4").style.color="black";
        document.getElementById("5").style.color="black";
    } else if(id=="2"){
        document.getElementById("2").style.color="rgb(6, 177, 162)";
        document.getElementById("1").style.color="black";
        document.getElementById("3").style.color="black";
        document.getElementById("4").style.color="black";
        document.getElementById("5").style.color="black";
    } else if(id=="3"){
        document.getElementById("3").style.color="rgb(6, 177, 162)";
        document.getElementById("2").style.color="black";
        document.getElementById("1").style.color="black";
        document.getElementById("4").style.color="black";
        document.getElementById("5").style.color="black";
    } else if(id=="4"){
        document.getElementById("4").style.color="rgb(6, 177, 162)";
        document.getElementById("2").style.color="black";
        document.getElementById("3").style.color="black";
        document.getElementById("1").style.color="black";
        document.getElementById("5").style.color="black";
    } else if(id=="5"){
        document.getElementById("5").style.color="rgb(6, 177, 162)";
        document.getElementById("2").style.color="black";
        document.getElementById("3").style.color="black";
        document.getElementById("4").style.color="black";
        document.getElementById("1").style.color="black";
    }
} 


