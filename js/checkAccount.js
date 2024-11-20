let isLogin = localStorage.getItem("token")? true : false

function checkLogin(){
    if(isLogin){
        window.location.href = "../account/profile.html"
    }
    else {
        window.location.href = "../account/login.html"
    }
}