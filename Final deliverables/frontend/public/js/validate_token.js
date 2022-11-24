import { endpoint } from "./modules/endpoint.js";

const msgCnt = document.querySelector(".confirm-msg");

const successTemplate = "<p>E-Mail verfied</p><a href='./index.html'>Home</a>"
const verify_email = async (token) => {
    const res = await fetch(endpoint.confirm_token, {
        method: "POST",
        credentials: "include",
        mode:"cors",
        headers:{
            "Access-Control-Allow-Origin":"*",
            "content-type":"application/json",
        },
        body: JSON.stringify({
            "token": token
        })
    })
    if(res.status == 200){
        msgCnt.innerHTML = successTemplate;
        return;
    }
    msgCnt.innerHTML = "Verification Failed Resend Email";
}

window.addEventListener("load", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    verify_email(token);
})