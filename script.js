const CORRECT_PASSWORD_HASH = 'f9c63939b02eb1f535d33fec01a3cfa029b3aff42b5e9e5883c3c030a46c8f38';
const CORRECT_PASSWORD_HASH2 = '68e9f5932fb9c51cd2dff0397674384d7c1cf3e19321a1385b79c581b7c28bfe';
const CORRECT_PASSWORD_HASH3 = 'caa4d5be4a3033a6dbdf2723c40a42835712a6d4968f15bfe5bbc4e7ddb9643f';
const CORRECT_PASSWORD_HASH4 = '8880f6a39000c68a3274bae81cbaec4fd1d6b26b439845d4c51e3b6610ddcbdd';

const passwordInput = document.getElementById('password1');
const loginButton = document.getElementById('loginButton1');
const welcomeMessageElement = document.getElementById('welcome-message1');
const passwordInput2 = document.getElementById('password2');
const loginButton2 = document.getElementById('loginButton2');
const welcomeMessageElement2 = document.getElementById('welcome-message2');

loginButton.addEventListener('click', async () => {
    const enteredPassword = passwordInput.value;

    if (!enteredPassword) {
        welcomeMessageElement.textContent = 'Por favor, ingresa la clave que se te ha sido asignada.';
        return;
    }

    const hashedEnteredPassword = await sha256(enteredPassword);

    if (hashedEnteredPassword === CORRECT_PASSWORD_HASH) {
        
        window.location.href = 'https://drive.google.com/drive/folders/1G6vrBe1adj0s9eGU3MANsYpHED2WGMzc?usp=sharing'; 
    } else {
        welcomeMessageElement.textContent = 'Clave incorrecta.';
    }
});

loginButton2.addEventListener('click', async () => {
    const enteredPassword2 = passwordInput2.value;
    if (!enteredPassword2) {
        welcomeMessageElement2.textContent = 'Por favor, ingresa la clave que se te ha sido asignada.';
        return;
    }
    const hashedEnteredPassword2 = await sha256(enteredPassword2);

    if (hashedEnteredPassword2 === CORRECT_PASSWORD_HASH2 || hashedEnteredPassword2 === CORRECT_PASSWORD_HASH3 || hashedEnteredPassword2 === CORRECT_PASSWORD_HASH4) {
        
        window.location.href = 'https://drive.google.com/drive/folders/1vd6nPn9BvHnHNOlbsOXIgayzUOvNRXYR?usp=sharing'; 
    } else {
        welcomeMessageElement2.textContent = 'Clave incorrecta.';
    }
});

/**
 * 
 * @param {string} message 
 * @returns {Promise<string>}
 */
async function sha256(message) {
    const textEncoder = new TextEncoder();
    const data = textEncoder.encode(message);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hexHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hexHash;
}