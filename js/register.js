function validateForm() {
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("re-password").value;
    var terms = document.getElementById("privacy-policy").checked;
    var Rbutton = document.getElementById("register-submit");
  
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
  
    var messageDiv = document.getElementById("error-box");
    messageDiv.style.display = "none";
    
    if (!emailRegex.test(email)) {
        messageDiv.innerHTML = '<div id="error">Vui lòng nhập email hợp lệ.</div>';
        messageDiv.style.display = "block";
        
        return false;
    }
    else {
        messageDiv.style.display = "none";
    }
    if (password === ""){
        return false;
    }
    if (!passwordRegex.test(password)) {
        var messPassword = [];
        if (!password.match(lowerCaseLetters)) {
            messPassword.push("chứa ít nhất một chữ cái thường");
          }
        if (!password.match(upperCaseLetters)) {
            messPassword.push("chứa ít nhất một chữ cái hoa");
        }
    
        if (!password.match(numbers)) {
            messPassword.push ("chứa ít nhất một số");
        }
    
        if (password.length < 8) {
            messPassword.push ("chứa ít nhất 8 ký tự");
        }
        messageDiv.innerHTML = '<div id="error">' + "Mật khẩu phải " + messPassword.join(", ") +'</div>';
        messageDiv.style.display = "block";
        return false;
    }
    else {
        messageDiv.style.display = "none";
    }

    if(confirmPassword === ""){
        return false;
    }
    if (password !== confirmPassword) {
      messageDiv.innerHTML = '<div id="error">Mật khẩu nhập lại không khớp.</div>';
      messageDiv.style.display = "block";
      return false;
    }
    else {
        messageDiv.style.display = "none";
    }
  
    if (!terms) {
        Rbutton.disabled = true;
        Rbutton.style.backgroundColor = "#9e9e9e";
        Rbutton.style.cursor = "not-allowed";
        Rbutton.title = "Bạn phải đồng ý với chính sách bảo mật"
      return false;
    }
    else {
        messageDiv.style.display = "none";
        Rbutton.style.cursor = "pointer";
        Rbutton.style.backgroundColor = "darkgreen";
        Rbutton.disabled = false;
    }
    
    return true;
  }

document.getElementById("register-form").addEventListener("submit", function(event){
    event.preventDefault();

    register_account(); 
});

const digest = async ({ algorithm = "SHA-256", message }) => Array.prototype.map
    .call(
        new Uint8Array(
            await crypto.subtle.digest(algorithm, new TextEncoder().encode(message))
        ),
        (x) => ("0" + x.toString(16)).slice(-2)
    )
    .join("");


async function register_account(){
    var email = document.getElementById("register-email").value;
    var password = await digest({algorithm: "SHA-256", message: document.getElementById("password").value});
    fetch(`http://localhost:3000/register?email=${email}&password=${password}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var Noti = document.getElementById("error-box");
            Noti.style.display = "block";
            if(data.id === 0){
                Noti.innerHTML = '<div id="error">Email đã được đăng ký!</div>';
            }
            if(data.id === 1){
                Noti.style.color = "#034e24";
                Noti.style.backgroundColor = "#32dc82";
                Noti.innerHTML = '<div id="error">Đăng ký thành công <a href="../account/login.html">Đăng nhập?</a></div>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}