const emailAddress = document.forms["email-address"];
const email = emailAddress["email"];
console.log(email);

const alertEmail = document.getElementById("alert");
const back = document.getElementById("dismiss");
let added = false;

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
function emailCheck() {
  if (email.value.trim() === "") {
    // alert("test");
    alertEmail.innerHTML = "Email cannot be empty!";
    added = false;
  } else {
    alertEmail.innerHTML = "succses";
    alertEmail.classList.add("hidden");
    added = true;
  }
}

back.addEventListener("click", () => {
  location.reload();
});

function submit() {
  if (added) {
    slide1.classList.add("hidden");
    slide2.classList.remove("hidden");
  }
}

emailAddress.onsubmit = (event) => {
  event.preventDefault();
  emailCheck();
  submit();
};
