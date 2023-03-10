

const password = document.getElementById('password')
const textHTML = document.getElementById("text")

function check() {
    console.log("works");
    let input = password

    input.value.length >= 8 ? text.innerHTML = "Welcome to your account" : text.innerHTML = "Your Password is to short"

}
