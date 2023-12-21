


function renderUser(user){
    console.log(user);
    console.log(user["type"]);
    document.getElementById("flo").textContent=user["followers"];
    document.getElementById("flw").textContent=user["following"];
    document.getElementById("rep").textContent=user["public_repos"];
    if(user["bio"]){document.getElementById("bio").textContent=user["bio"];}
    if(user["name"]){document.getElementById("ism").textContent=user["name"]; document.getElementById("ism").style.fontSize="26px"}
    else{document.getElementById("ism").textContent="This profile has no name"; document.getElementById("ism").style.fontSize="15px"}
    let arr=[];
    arr=user["created_at"];
    document.getElementById("paydo").textContent=arr.split("T")[0];
    document.getElementById("log").textContent=user["login"];
    document.getElementById("rasm").setAttribute("src",textContent=user["avatar_url"]);
    document.getElementById("manzil").href=user["html_url"];
    document.getElementById("gt").href=user["repos_url"];
    if(user["twitter_username"]){document.getElementById("qush").textContent=user["twitter_username"];}
    else{document.getElementById("qush").textContent="Not Available"}
    if(user["location"]){document.getElementById("manz").textContent=user["location"];}
    else{document.getElementById("manz").textContent="Unable to determine"}
    
}
const sorov=document.getElementById("btn");
sorov.addEventListener("click", function(event){
    event.preventDefault();
    let usem=document.getElementById("inp");
    fetch("https://api.github.com/users/"+usem.value).then(res=>res.json()).then((data)=>renderUser(data));
    usem.value="";
})


const tn=document.getElementById("tun");
const kn=document.getElementById("kun");
const ran=document.querySelector(".rang");

tn.addEventListener("click", function(){
    tn.style.display="none"
    kn.style.display="block"
    document.body.style.backgroundColor="#141D2F"
    ran.style.color="white"
})

kn.addEventListener("click", function(){
    tn.style.display="block"
    kn.style.display="none"
    document.body.style.backgroundColor="#F6F8FF"
    ran.style.color="black"
})