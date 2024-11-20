
let isLogin = !!localStorage.getItem("token")

function loadInfo(){
    if(isLogin){
        let email = localStorage.getItem("token");
        fetch(`http://localhost:3000/loadinfo?email=${email}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let genderMapping = {
                'male': 'Nam',
                'female': 'Nữ',
                'other': 'Khác'
            };
            let genderInVietnamese = genderMapping[data.gender]
            var Semail = document.getElementById("email")
            Semail.innerText = email
            var Sname = document.getElementById("name")
            Sname.innerText = data.name
            var Sphone = document.getElementById("phone")
            Sphone.innerText = data.phone
            var Sgender = document.getElementById("gender")
            Sgender.innerText = genderInVietnamese
            var Sbirthday = document.getElementById("birthday")
            var birthday = new Date(data.birthday);
            Sbirthday.innerText = birthday.toLocaleDateString();
            var Scccd = document.getElementById("idnumber")
            Scccd.innerText = data.cmnd_cccd
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

function editProfile(){
    var showInfo = document.getElementById("showInfo")
    showInfo.style.display = "none"
    var editInfo = document.getElementById("editInfo")
    editInfo.style.display = "block"
}

function cancel(){
    var showInfo = document.getElementById("showInfo")
    showInfo.style.display = "block"
    var editInfo = document.getElementById("editInfo")
    editInfo.style.display = "none"
}

async function updateProfile(){

    var email = localStorage.getItem("token")
    var password= await digest({algorithm: "SHA-256", message: document.getElementById("password").value})
    var name= document.getElementById("newname").value 
    var phone= document.getElementById("newphone").value 
    var gender= document.querySelector('input[name="gender"]:checked').value
    var birthday = document.getElementById("newbirthday").value
    var idnumber= document.getElementById("newidnumber").value

    if (document.getElementById("password").value === ""){
        alert("Nhập mật khẩu")
    }
    else {
        fetch(`http://localhost:3000/updateinfo?email=${email}&password=${password}&name=${name}&phone=${phone}&gender=${gender}&birthday=${birthday}&idnumber=${idnumber}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.id === 0){
                alert("Sai mật khẩu")
            }
            if(data.id === 1){
                console.log("Cập nhật thành công");
                alert("Cập nhật thành công")
                window.location.reload()
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
}

const digest = async ({ algorithm = "SHA-256", message }) => Array.prototype.map
    .call(
        new Uint8Array(
            await crypto.subtle.digest(algorithm, new TextEncoder().encode(message))
        ),
        (x) => ("0" + x.toString(16)).slice(-2)
    )
    .join("");
