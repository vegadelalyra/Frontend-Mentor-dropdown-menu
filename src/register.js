import { playConfetti } from "./logoConfeti.js"

const registerButton = document.querySelector('.outlined-btn')
registerButton.onclick = showRegistrationAlert

// Function to show the SweetAlert modal for user registration
function showRegistrationAlert() {
  Swal.fire({
    title: 'Register a New User',
    html:
      '<input id="swal-name" class="swal2-input" placeholder="Name">' +
      '<input id="swal-email" class="swal2-input" placeholder="Email">' +
      '<input id="swal-password" type="password" class="swal2-input" placeholder="Password"><br><br>' +
      '<a id="existing-account-link" href="#">I have an account already!</a><br>' +
      '<a id="register-github-link" href="#">' +
      '<i class="fab fa-github"></i> Register with GitHub</a>',
    focusConfirm: false,
    preConfirm: () => {
      const name = document.getElementById('swal-name').value
      const email = document.getElementById('swal-email').value
      const password = document.getElementById('swal-password').value
  
      if (!name || !email || !password) {
        Swal.showValidationMessage('All fields are required')
      }
  
      return { name, email, password }
    }
  }).then(result => {
    if (result.isConfirmed) {
      // Here you would normally send the registration data to your server
      // For the sake of this example, we'll just show a success message
      playConfetti()
      Swal.fire('REGISTERED!', 'User registered successfully', 'success')
    }
  })
  
  // Adding click event listeners for the links
  document.getElementById('existing-account-link').addEventListener('click', () => {
    document.querySelector('.transparent-btn').click()
  })
  
  document.getElementById('register-github-link').addEventListener('click', () => {
    Swal.fire({
      title: 'Register with GitHub',
      html:
        '<p>Do you want to register with your GitHub account?</p>' +
        '<i class="fab fa-github fa-3x"></i>', // Adjust the size using "fa-3x"
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Register',
      focusCancel: true,
    }).then(result => {
      if (result.isConfirmed) {
        // Here you can add the logic to handle registration with GitHub
        playConfetti(true)
        Swal.fire('GitHub Registration', 'You are now registered with your GitHub account', 'success')
      }
    })
  })  
}
  