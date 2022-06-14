function validateInputs() {
  const fullName = document.getElementById("fullName");
  const badgeNumber = document.getElementById("badgeNumber");
  const errorMessage = document.getElementById("errorMessage");
  if (fullName.value.length > 20 || badgeNumber.value.length != 3) {
    errorMessage.innerText = "Hey hey stop there, Check your name and badge number!!! badge  should be 3 digits"
  } else {
    errorMessage.innerText = ""
    alert("Now you are a valid user, you can go ahead!!!")
    const audio = new Audio("Floating Home - Brian Bolger.mp3")
    audio.play()
  }
}