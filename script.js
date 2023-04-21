const generateBtn = document.getElementById('generateBtn');
const passwordOutput = document.getElementById('output');

function generateRandomPassword() {
    const length = document.getElementById('passwordLength').value;
    
    function generatePassword(length) {
        let password = '';
        let characters = 'qwertyuioplkjhgfdsazxcvbnmMNBVCXZLKJHGFDSAQWERTYUIOP0987654321@#$&';

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            password = password + characters[randomIndex];
        }
        console.log(password)
        return password;
    }
    
    const password = generatePassword(length);
    passwordOutput.value = password;
    // alert(`Random Password: ${password}`);
}

function copyPassword(){
    passwordOutput.select();
    document.execCommand('copy');
    alert(`Password copied to clipboard`);
}