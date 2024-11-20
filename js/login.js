document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();

    login_account(); 
});

const digest = async ({ algorithm = "SHA-256", message }) => Array.prototype.map
    .call(
        new Uint8Array(
            await crypto.subtle.digest(algorithm, new TextEncoder().encode(message))
        ),
        (x) => ("0" + x.toString(16)).slice(-2)
    )
    .join("");


let isLogin = localStorage.getItem("token")? true : false

async function login_account(){
    var email = document.getElementById("login-email").value;
    var password = await digest({algorithm: "SHA-256", message: document.getElementById("password").value});
    fetch(`http://localhost:3000/login?email=${email}&password=${password}`)
        .then(data => {
            var Noti = document.getElementById("error-box");
            
            if(data.id === 0){
                Noti.style.display = "block";
                Noti.innerHTML = '<div id="error">Email chưa được đăng ký! <a href="../account/register.html">Đăng ký?</a></div>';
            }
            if(data.id === 1){
                localStorage.setItem("token", email);
                console.log("Đăng nhập thành công!");
                isLogin = true;
                checkLogin();
            }
            if(data.id === 10){
                Noti.style.display = "block";
                Noti.innerHTML = '<div id="error">Sai mật khẩu</div>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function checkLogin(){
    if(isLogin){
        window.location.href = "../home.html"
    }
}