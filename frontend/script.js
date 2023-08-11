const form = document.getElementById('add-user-form');
const jituEmail = document.getElementById('email');
const cohortNum = document.getElementById('cohortNumber');
const emailError = document.getElementById('email-error');

window.onload=function(){
form.addEventListener('submit', function(event) {
   emailError.textContent = '';

    if (!validEmail(jituEmail.value)) {
      event.preventDefault();
      emailError.textContent = 'Invalid email format. Please use fname.lname@thejitu.com.';
      return;
    }

       if (!validCohort(cohortNum.value)) {
      event.preventDefault();
      emailError.textContent = 'Invalid cohort number format. Please use a valid number.'
      return;
    }
});

const formData = new FormData(form);
const email = formData.get('email');
const cohortNum = formData.get('cohortNum');


// revisit this ............................................

fetch('/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email, cohortNum })
})
.then(response => response.json())
.then(data => {
  // Handle success response here
  console.log(data.message);
})
.catch(error => {
  // Handle error here
  console.error('Error:', error);
});


function validEmail(email) {
  const emailPattern = /^[a-zA-Z]+\.[a-zA-Z]+@thejitu\.com$/;
  return emailPattern.test(email);
}

function validCohort(cohortNumber) {
  const cohortPattern = /^\d+$/;
  return cohortPattern.test(cohortNumber);
}
}