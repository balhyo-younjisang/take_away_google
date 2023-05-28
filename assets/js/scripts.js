
const nextBtn = document.querySelector(".next");
const form = document.querySelector("form");
const email = document.querySelector(".email");
const emailContainer = document.querySelector(".container")
const passwordContainer = document.querySelector(".joinContainer");
const showPw = document.querySelector(".show_pw");
const password = document.querySelector(".password");
const label_email = document.querySelector(".focusemail");
const label_password = document.querySelector(".focuspw");
const submit = document.querySelector(".submit");
const accountData = new Object;

const inputFocus = () => {
    if (email.value !== "")
        label_email.style.display = "none";
    if (password.value !== "")
        label_password.style.display = "none";
}

const showPassword = () => {
    emailContainer.classList.add("hide");
    form.classList.remove("on");
    passwordContainer.classList.remove("hide");
}

document.querySelector("body").addEventListener("click", () => {
    inputFocus();
})

showPw.addEventListener("click", () => {
    password.setAttribute('type', 'text');
})

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    accountData["email"] = email.value;
    form.classList.add("on");

    setTimeout(showPassword, 810);
})

submit.addEventListener("click", () => {
    accountData['password'] = password.value;
})