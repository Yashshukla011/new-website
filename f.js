   const email = document.getElementById('email');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');

    function checkInputs() {
      if(email.value.trim() !== "" && password.value.trim() !== "") {
        loginBtn.disabled = false;
      } else {
        loginBtn.disabled = true;
      }
    }

    email.addEventListener('input', checkInputs);
    password.addEventListener('input', checkInputs);