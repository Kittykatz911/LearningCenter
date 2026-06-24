/**
 * Main entry point for the Learning Center website
 */

const app = document.getElementById('app');

if (app) {
    app.innerHTML += `
        <h1>Welcome to the Learning Center Mummy</h1>
        <p>A modern TypeScript website by me, TIFFANY!</p>
        <p>
            Let's get started bruh
        </p>
    `;
    
    const button = document.createElement('button');
    button.textContent = 'Let\'s Go!';
    app.appendChild(button);
    button.addEventListener('click', () => {
        location.href = 'home.html';
    });
}

console.log('Learning Center loaded successfully!');
