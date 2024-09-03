import { db } from '../firebase/database.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';

document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const admin = document.querySelector('input[name="admin"]').value;
    const password = document.querySelector('input[name="password"]').value;

    try {
        // Retrieve admin document
        const docRef = doc(db, 'admins', admin);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // Compare the hashed password stored in Firestore
            const storedPassword = docSnap.data().password;

            if (storedPassword === password) {
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
