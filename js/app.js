const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

const displayEnteredData = (event) => {
  event.preventDefault()


  const emailInput = document.getElementById("email-address")
  const enteredData = document.getElementById("entered-data")

  // get the data from the input field
  const data = emailInput.value

  // validate the data
  if (!data || !RegExp(EMAIL_REGEX).test(data))  {
    alert("Please enter a valid email address")
    emailInput.value = ""
    emailInput.focus()

    return
  }

  // TODO add to db

  // clear the input field
  emailInput.value = ""

  // display the data
  enteredData.innerHTML = data
  enteredData.classList.remove("visually-hidden")
  document.getElementById("entered-data-container").classList.remove("invisible")
}
