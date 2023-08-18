import { playConfetti } from "./logoConfeti.js"

const loginButton = document.querySelector('.transparent-btn')
loginButton.onclick = showAuthenticationAlert

function showAuthenticationAlert() {
    Swal.fire({
        title: 'Log In',
        html:
          '<input id="swal-username" class="swal2-input" placeholder="Username">' +
          '<input id="swal-password" type="password" class="swal2-input" placeholder="Password">' +
          '<a id="forgot-password-link" href="#"><br><br>' +
          '<i class="fas fa-question-circle"></i> Forgot your password?</a><br>' +
          '<a id="login-link" href="#">' +
          '<i class="fab fa-github"></i> Log In with GitHub</a><br>' +
          '<a id="no-account-link" href="#">I don\'t have an account</a>',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Log In',
        focusConfirm: false,
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: () => {
          const username = document.getElementById('swal-username').value
          const password = document.getElementById('swal-password').value
      
          if (!username || !password) {
            Swal.showValidationMessage('Username and password are required')
          }
      
          return { username, password }
        }
      }).then(result => {
        if (result.isConfirmed) {
          playConfetti()
          Swal.fire({
            title: 'Logged In!',
            icon: 'success'
          })
        }
      })
      
      // Adding click event listeners for the links
      document.getElementById('forgot-password-link').addEventListener('click', () => {
        Swal.fire({
          title: 'Forgot Your Password?',
          html:
            '<input id="swal-email" class="swal2-input" placeholder="Email">',
          showCancelButton: true,
          cancelButtonText: 'Cancel',
          confirmButtonText: 'Recover Password',
          focusConfirm: false,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            const email = document.getElementById('swal-email').value
      
            if (!email) {
              Swal.showValidationMessage('Email is required')
            }
      
            return { email }
          }
        }).then(result => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Password Recovery',
              text: 'Mail to recover your password sent!',
              icon: 'success'
            })
          }
        })
      })
      
      document.getElementById('login-link').addEventListener('click', () => {
        playConfetti(true)
        Swal.fire({
          title: 'Authenticated Through OAuth2',
          text: 'AUTHENTICATED THROUGH OAUTH2 WITH YOUR GITHUB ACCOUNT',
          icon: 'success'
        })
      })
      
      document.getElementById('no-account-link').addEventListener('click', () => {
        document.querySelector('.outlined-btn').click()
      })
      
}