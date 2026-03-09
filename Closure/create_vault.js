function createVault(secretPassword) {
    // This variable is "private" thanks to closure
    let currentSecret = secretPassword;

    return {
        // Method to check if the password is correct
        checkPassword: function(attempt) {
            return attempt === currentSecret;
        },

        // Method to update the password securely
        updatePassword: function(oldPass, newPass) {
            if (oldPass === currentSecret) {
                currentSecret = newPass;
                console.log("Password updated successfully.");
                return true;
            } else {
                console.log("Invalid current password. Update failed.");
                return false;
            }
        }
    };
}

// --- Testing the Vault ---
const myVault = createVault("Safe123");

console.log(myVault.checkPassword("wrong123")); // false
console.log(myVault.checkPassword("Safe123"));  // true

// Attempting to update
myVault.updatePassword("Safe123", "NewSecurePass!789");

// Verifying the change
console.log(myVault.checkPassword("Safe123"));          // false
console.log(myVault.checkPassword("NewSecurePass!789")); // true