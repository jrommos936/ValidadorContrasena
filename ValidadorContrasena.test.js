const validatePassword = require('./ValidadorContrasena');

describe('Validador de Contraseña', () => {
    test('debería ser válida con al menos 8 caracteres, una mayúscula, una minúsculas, un número y un caracter especial', () => {
        const password = 'Contrasena1234@';
        expect(validatePassword(password)).toBe(true);
    });

    test('debería ser inválida si tiene menos de 8 caracteres', () => {
        const password = 'C12@';
        expect(validatePassword(password)).toBe(false);
    });

    test('debería ser inválida si no tiene mayúsculas', () => {
        const password = 'holaq12@';
        expect(validatePassword(password)).toBe(false);
    });

    test('debería ser inválida si no tiene minúsculas', () => {
        const password = 'HOLA@12';
        expect(validatePassword(password)).toBe(false);
    });

    test('debería ser inválida si no tiene números', () => {
        const password = 'Que@tal';
        expect(validatePassword(password)).toBe(false);
    });

    test('debería ser inválida si no tiene caracteres especiales', () => {
        const password = 'Holamuybuenas12';
        expect(validatePassword(password)).toBe(false);
    });

    test('debería ser inválida si no cumple con todos los requisitos', () => {
        const password = 'hey123';
        expect(validatePassword(password)).toBe(false);
    });

    test('debería ser válida con todos los requisitos cumplidos', () => {
        const password = 'Valida@345';
        expect(validatePassword(password)).toBe(true);
    });
});