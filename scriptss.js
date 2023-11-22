function register_User(){
    
    let name = document.getElementById("username").value
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    // localStorage.setItem("Username",name)
    // localStorage.setItem("Email",mail)
    // localStorage.setItem("Phone_no",phone)
    // localStorage.setItem("Time",time)
    // localStorage.setItem("Date",date)
    let obj = {
        name,
        mail,
        phone,
        date,
        time
    }
   let a =  localStorage.setItem("Userdetails",JSON.stringify(obj))
   console.log(a)
}
