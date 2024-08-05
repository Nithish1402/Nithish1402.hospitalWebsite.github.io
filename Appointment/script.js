let personInfo = [];
let i = 0;
function sumbits() {
  let Fname = document.querySelector(`.name`).value;
  let dob = document.querySelector(`#dob`).value;
  let gender = document.querySelector(`#gender`).value;
  let contact = document.querySelector(`#contact`).value;
  let email = document.querySelector(`#email`).value;
  let address = document.querySelector(`#address`).innerText;
  let date = document.querySelector(`#date`).value;
  personInfo[i] = {
    Fname,
    dob,
    gender,
    contact,
    email,
    address,
    date,
  };
  console.log(personInfo[i]);
  alert(`NAME : ${Fname}
  DOB:${dob}
  GENDER:${gender}
  ADDRESS:${address}
  DATE:${date}
  YOUR APPOINTMENT IS SUCCESSFULLY BOOKED
  E WILL CONTACT YOU BY ${email} AND ${contact}`);
  i++;

  setTimeout(() => {
    history.go(-1);
  }, 2000);
}
