const form = document.getElementById("form")

const signUp = (event) => {
  event.preventDefault() // prevent form from being submitted automatically to the url expressed in action on the form

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  console.log(email)
  console.log(password)
}


form.addEventListener("submit", signUp)
