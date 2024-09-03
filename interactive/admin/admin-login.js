// admin-login.js

import { db } from './database.js';

document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const admin = document.querySelector('input[name="admin"]').value;
    const password = document.querySelector('input[name="password"]').value;

    try {
        // Retrieve admin document
        const docRef = db.collection('admins').doc(admin);
        const doc = await docRef.get();

        if (doc.exists) {
            // Compare the hashed password stored in Firestore
            const storedPassword = doc.data().password;

            if (storedPassword === password) { // Note: Implement hashing and comparison for security
                // Redirect to the admin panel
                window.location.href = 'https://xyr3ll.github.io/ABCODA-Admin-Page/';
            } else {
                alert('Invalid password!');
            }
        } else {
            alert('Admin not found!');
        }
    } catch (error) {
        console.error("Error logging in:", error);
        alert('Login failed!');
    }
});
