/**
 * Main entry point for the Learning Center website
 */

const app = document.getElementById('app');

if (app) {
    app.innerHTML = `
        <h1>Welcome to Learning Center Mummy</h1>
        <p>A modern TypeScript website by me, TIFFANY!</p>
        <p style="color: #666; margin-top: 1rem; font-size: 0.9rem;">
            Get started by editing src/index.ts
        </p>
    `;
}

console.log('Learning Center loaded successfully!');
