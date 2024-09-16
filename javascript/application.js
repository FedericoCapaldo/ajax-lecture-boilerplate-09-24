import Swal from 'sweetalert2'

const form = document.getElementById("form")

const signUp = (event) => {
  event.preventDefault() // prevent form from being submitted automatically to the url expressed in action on the form

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const requestBody = JSON.stringify({ "email": email, "password": password });

  const url = "https://reqres.in/api/register"
  const requestData = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: requestBody
  }

  fetch(url, requestData)
    .then((response) => {
      if (response.status === 200) {
        Swal.fire({ title: 'Success', text: 'You are registered!', icon: 'success' })
      } else {
        Swal.fire({ title: 'Error!', text: 'Oups! Something went wrong', icon: 'error' })
      }
    })
}


form.addEventListener("submit", signUp)
