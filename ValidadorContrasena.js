// passwordValidator.js 
function validatePassword(password) { 
    const minLength = /.{8,}/; 
    const hasUpperCase = /[A-Z]/; 
    const hasLowerCase = /[a-z]/; 
    const hasNumber = /[0-9]/; 
    const hasSpecialChar = /[!@#$%^&*()_+{}|:<>?]/; 
    return (minLength.test(password) && hasUpperCase.test(password) && hasLowerCase.test(password) && hasNumber.test(password) && hasSpecialChar.test(password)); 
} 
module.exports = validatePassword;