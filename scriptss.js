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

function showData(obj) {
  let ptEle = document.getElementById("browData");
  ptEle.innerHTML =
    ptEle.innerHTML + `<li>${obj.name} - ${obj.mail}--${obj.phone}</li>`;
  //   let childEle = document.createElement("li");
  //   childEle.textContent = obj.name +" - " +obj.mail +" - " +obj.phone;
  //   ptEle.appendChild(childEle);
}
