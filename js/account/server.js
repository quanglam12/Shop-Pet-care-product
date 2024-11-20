var mysql = require('mysql');
const express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var con = mysql.createConnection({
  host: "localhost",
  port:3306,
  user: "root",
  password: "Mtp@@12TT4G5",
  database: "web_tmdt"
});

con.connect(function(err) {
    if (err) throw err;

    app.get('/register', (req, res) => {
      let email = req.query.email;
      let password = req.query.password; 

      let sqlCheck = 'SELECT email FROM web_tmdt.account WHERE email = ?';
      con.query(sqlCheck, email, (err, result) => {
          if (err) throw err;
  
          if (result.length > 0) {
              var noti = {id : 0 ,Notification:"Email đã được sử dụng"}
              res.send(JSON.stringify(noti));
          } else {
              
              let sqlInsert = 'INSERT INTO web_tmdt.account (email, password) VALUES (?, ?)';
              con.query(sqlInsert, [email, password], (err, result) => {
                if (err) throw err;
                var noti = {id : 1 ,Notification:"Đăng ký thành công"}
                res.send(JSON.stringify(noti));
              });
          }
      });
  });

  app.get('/login', (req, res) => {
    let email = req.query.email;
    let password = req.query.password; 

    let sqlCheck = 'SELECT email FROM web_tmdt.account WHERE email = ?';
    con.query(sqlCheck, email, (err, result) => {
        if (err) throw err;

        if (result.length <= 0) {
            var noti = {id : 0 ,Notification:"Email chưa được đăng ký"}
            res.send(JSON.stringify(noti));
        } else {
            
            let sqlCheckpass = 'SELECT password FROM web_tmdt.account WHERE email = ?';
            con.query(sqlCheckpass, email, (err, result) => {
              if (err) throw err;
              if(result && result.length > 0 && result[0].password === password){
                
                var noti = {id : 1 ,Notification:"Đăng nhập thành công"}
                res.send(JSON.stringify(noti));
              } else {
                var noti = {id : 10 ,Notification:"Sai mật khẩu"}
                res.send(JSON.stringify(noti));
              }
            });
        }
    });
});

app.get('/loadinfo', function(req, res) {
  let email = req.query.email;

  var sql = 'SELECT * FROM web_tmdt.account WHERE email= ?';
  con.query(sql, [email], function(err, result) {
    if (err) throw err;

    if (result.length > 0) {
      var data = {name:result[0].name, phone: result[0].phone, gender:result[0].gender, birthday:result[0].birthday, cmnd_cccd:result[0].cmnd_cccd} 
      res.send(JSON.stringify(data));
    }
  });
});


app.get('/updateinfo', function(req, res) {
  let email = req.query.email;
  let password = req.query.password;
  let name = req.query.name;
  let phone = req.query.phone;
  let gender =req.query.gender;
  let birthday = req.query.birthday;
  let idnumber = req.query.idnumber;

  let sqlCheck = 'SELECT email FROM web_tmdt.account WHERE email = ? AND password = ?';
  con.query(sqlCheck, [email, password], function(err, result) {
    if (err) throw err;
    if (result.length <= 0) {
      var noti = {id : 0 ,Notification:"Sai mật khẩu"}
      res.send(JSON.stringify(noti));
    }
    if (result.length > 0) {
      let update = "UPDATE web_tmdt.account SET name = ?, phone = ?, gender = ?, birthday = ?, cmnd_cccd = ? WHERE email = ?";
      con.query(update, [name, phone, gender, birthday, idnumber, email], function(err, result) {
        if (err) throw err;
        if(result.affectedRows > 0){
          var noti = {id : 1 ,Notification:"Cập nhật thành công"}
          res.send(JSON.stringify(noti));
        }
      });          
    }
  });
});

  

});

app.listen(3000, () => console.log('Server is running on port 3000'));
