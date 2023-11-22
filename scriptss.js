function register_User(){
    
    let name = document.getElementById("username").value
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    
    localStorage.setItem("Username",name)
    localStorage.setItem("Email",mail)
    localStorage.setItem("Phone_no",phone)
    localStorage.setItem("Time",time)
    localStorage.setItem("Date",date)

    let user = localStorage.getItem("Username",name)
    console.log(user)
    let email = localStorage.getItem("Email",mail)
    let cell = localStorage.getItem("Phone_no",phone);
    let tm = localStorage.getItem("Time",time);
    let dt = localStorage.getItem("Date",date);
}