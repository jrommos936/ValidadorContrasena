const validatePassword = require('./ValidadorContrasena'); 
test('Una contraseña válida pasa la validación', () => {    
    expect(validatePassword('StrongPass1!')).toBe(true); }); 

test('Una contraseña demasiado corta no pasa la validación', () => {    
    expect(validatePassword('Shrt1!')).toBe(false); }); 

test('Una contraseña sin letra mayúscula no pasa la validación', () => {    
    expect(validatePassword('weakpass1!')).toBe(false); }); 

test('Una contraseña sin letra minúscula no pasa la validación', () => {    
    expect(validatePassword('WEAKPASS1!')).toBe(false); }); 

test('Una contraseña sin número no pasa la validación', () => {    
    expect(validatePassword('NoNumber!')).toBe(false); }); 

test('Una contraseña sin carácter especial no pasa la validación', () => {   
     expect(validatePassword('NoSpecial1')).toBe(false); });