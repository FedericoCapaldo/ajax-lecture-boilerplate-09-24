const form = document.getElementById("form")

const signUp = (event) => {
  event.preventDefault() // prevent form from being submitted automatically to the url expressed in action on the form
  console.log('submitted!')
}


form.addEventListener("submit", signUp)
