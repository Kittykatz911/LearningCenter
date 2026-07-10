const signupForm = document.getElementById('signupForm') as HTMLFormElement;

async function handleSignup(formData: {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
}) {
    const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (!response.ok) {
        console.error('Error signing up:', data.error);
        return;
    }
    console.log('Signup successful:', data.user);

    // clear the form fields after successful signup:
    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('lastName') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('username') as HTMLInputElement).value = '';
    (document.getElementById('password') as HTMLInputElement).value = '';

    //rerdirect to the login page:
    window.location.href = '/login.html';
}

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // stops the button from submitting/reloading the page if it's inside a <form>
    console.log('Signup submitting');

    const firstNameInput = document.getElementById('name') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const formData = {
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        email: emailInput.value,
        username: usernameInput.value,
        password: passwordInput.value
    };

    handleSignup(formData);
});