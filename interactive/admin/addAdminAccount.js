import { db } from '../firebase/database.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Function to add an admin account
async function addAdminAccount(username, password) {
    try {
        // Create or overwrite the document in the 'admins' collection
        await setDoc(doc(db, "admins", username), { password });
        console.log("Admin account created successfully.");
    } catch (error) {
        console.error("Error adding admin account:", error);
    }
}

addAdminAccount("admin1", "admin1");
addAdminAccount("admin2", "admin2");
