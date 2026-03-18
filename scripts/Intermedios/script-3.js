// Desafío: Test: mensajes de error en login → bug de seguridad
// Modo Página — usá `page` directamente, el sitio ya está abierto.

await page.goto(`${page.url()}/login.html`);

// Primer intento de login: Email inexistente
await page.fill('#loginEmail', 'a@b.com');
await page.fill('#loginPassword', '12345678');

await page.click('.btn-auth');
await page.waitForTimeout(500);

const messageOne = (await page.locator('#loginAlert').textContent()) || '';
console.log('Primer Mensaje: ', messageOne);

// Segundo intento de login: Email válido y Passwrod inválida
await page.fill('#loginEmail', 'qa@aerovista.com');
await page.fill('#loginPassword', '12345678');

await page.click('.btn-auth');
await page.waitForTimeout(500);

const messageTwo = (await page.locator('#loginAlert').textContent()) || '';
console.log('Primer Mensaje: ', messageTwo);

// Comparación
if (messageOne.trim() === messageTwo.trim()) {
    console.log('PASS: Los mensajes son iguales');
} else {
    console.error('FAIL: Los mensajes son distintos -> BUG DE SEGURIDAD');
    console.error(`Mensaje email inexistente: ${messageOne}`);
    console.error(`Mensaje email válido: ${messageTwo}`);
}