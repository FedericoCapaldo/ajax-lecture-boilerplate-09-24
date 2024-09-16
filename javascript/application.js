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
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

}


form.addEventListener("submit", signUp)
