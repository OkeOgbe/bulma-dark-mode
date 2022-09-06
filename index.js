const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

toggle.addEventListener("click", () => {
    let bodyCheck = body.classList.contains('dark');

    if (bodyCheck) {
      body.className = ''
    } else {
        body.className = "dark"
  }
})