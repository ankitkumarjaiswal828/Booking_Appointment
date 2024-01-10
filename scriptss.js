function register_User(event) {
  event.preventDefault();
  let name = event.target.username.value;
  let mail = event.target.mail.value;
  let phone = event.target.phone.value;

  let obj = {
    name,
    mail,
    phone,
  };
  localStorage.setItem(obj.mail, JSON.stringify(obj));
  showData(obj);
}
window.addEventListener("DOMContentLoaded",()=>{
    axios
    .get("https://crudcrud.com/api/459e917cdcd24314bf2fea0062d61f5f")
    .then((res) =>{ showData(res)
        for(let i=0;<res.data.lenght;i+){
          showData(res.data[i])
        }})
    .catch((err) => console.error(err));
      console.log(data)
})

axios.post("https://crudcrud.com/api/459e917cdcd24314bf2fea0062d61f5f", {
      title: "New Todo",
      complete: false,
    })
    .then((res) => showData(res.data))
    .catch((err) => console.error(err)
    );


function editUserDetails(name,emailId,phone){
  document.getElementById("name").value = name
  document.getElementById("email").value = emailId;
  document.getElementById("phone").value = phone;
  deleteUser(UserId);

}


  function deleteUser(UserId){
  axios.delete(`https://crudcrud.com/api/459e917cdcd24314bf2fea0062d61f5f/appointment/${UserId}`)
  .then((res)=>{
    removeEventListener(UserId)
  })
  .catch((err)=>{
    console.log(err)
  })
  console.log(emailId)
  localStorage.removeItem(emailId)
  removeEventListener(emailId)
}
function showData(obj) {
  let ptEle = document.getElementById("browData");
  //ptEle.innerHTML =ptEle.innerHTML + `<li>${obj.name} - ${obj.mail}--${obj.phone}</li>`;
  let childEle = document.createElement("li");
  childEle.textContent = obj.name + " - " + obj.mail + " - " + obj.phone;

  //delete btn
  let delbtn = document.createElement("input");
  delbtn.type = "button";
  delbtn.className = "delbtn";
  delbtn.value = "Delete";
  delbtn.onclick = () => {
    localStorage.removeItem(obj.mail);
    ptEle.removeChild(childEle);
  };

  //edit btn
  let edtbtn = document.createElement("input");
  edtbtn.type = "button";
  edtbtn.className = "delbtn";
  edtbtn.value = "Edit";
  edtbtn.style.backgroundColor = "green";
  edtbtn.style.color = "white";
  edtbtn.onclick = ()=>{
    localStorage.removeItem(obj.mail)
    ptEle.removeChild(childEle)
    document.getElementById("naam").value  = obj.name
    document.getElementById("email").value = obj.mail
    document.getElementById("cell").value = obj.phone
  }

  childEle.appendChild(delbtn);
  childEle.appendChild(edtbtn);
  ptEle.appendChild(childEle);
}
