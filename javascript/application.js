console.log("Hello from JavaScript!");
const url = "https://api.github.com/users/dhh"

/* THE FOLLOWING REQUESTS ARE SYNTACTICALLY DIFFERENT BUT THEY ALL DO EXACTLY THE SAME THING */

// 1. fetch with an arrow function with the standard parameter name response directly in the then with short syntax (no return word)
fetch(url)
  .then((response) => response.json())
  .then((res) => console.log(res))


// 2. fetch with an arrow function with the standard parameter name response directly in the then
fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((res) => console.log(res))


// 3. fetch with a classic function in the then directly
fetch(url)
  .then(function fn(response) {
    return response.json()
  })
  .then((res) => console.log(res))



// 4. fetch with anonymous classic function in the then directly
fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then((res) => console.log(res))

// 5. fetch with classic vanilla function declared  and then used in the then
function functionClassic(response) {
  return response.json()
}
fetch(url)
  .then(functionClassic)
  .then((res) => console.log(res))



// 6. fetch with arrow function declared as a const variable and then used in the then
const myFunc = (response) => {
  return response.json()
}
fetch(url)
  .then(myFunc)
  .then((res) => console.log(res))


// 7. fetch with arrow function with random parameter name directly in the then
fetch(url)
  .then((somethingElse) => {
    return somethingElse.json()
  })
  .then((res) => console.log(res))
