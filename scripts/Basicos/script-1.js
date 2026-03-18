// Desafío: Verificar título de la página
// Modo Página — usá `page` directamente, el sitio ya está abierto.

const title = await page.title();

console.log(`Título obtenido: ${title}`);

if (title.includes('AeroVista')) {
    console.log('PASS');
} else {
    console.error(`FAIL: título inesperado -> ${title}`);
} 