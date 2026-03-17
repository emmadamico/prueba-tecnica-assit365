## Reportes de bugs

---

### 🆔 ID Bug
`BUG-001`

### 📄 Página / Módulo
`Toda la web en general`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Al reducir el tamaño de la página, por ejemplo: versión tablet y/o mobile, se evidencias diferentes errores relacionados al responsive (o a la falta del mismo).

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Recorrer las diferentes páginas (Home, Resultados de búsqueda, Detalles del vuelo, Checkout, etc) achicando el tamano de las mismas.

### ❌ Resultado actual
> Se observan campos desalineados, componentes que no están acondicionados para los distintos tamaños de pantalla, el navbar que queda por fuera sin lograrse un menú hamburguesa o similar

### ✅ Resultado esperado
> La página, y todos los componentes que la conforman, deben ajustarse correctamente a los difeerentes tamaños

### 📎 Evidencia
- 📷 Screenshots: [
                    [Home](evidencias/bug-001/1.png),
                    [Resultados de búsqueda](evidencias/bug-001/2.png),
                    [Detalles del vuelo](evidencias/bug-001/3.png),
                    [Checkout](evidencias/bug-001/4.png)
                ]
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-002`

### 📄 Página / Módulo
`Toda la web en general`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [x] 🟢 Bajo

### 🧾 Título
> Navbar: Typo en el tab de vuelos.

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Visualizar el tab de vuelos en el navbar.

### ❌ Resultado actual
> Se observa que dice "Vuelas"

### ✅ Resultado esperado
> El tab debería decir: "Vuelos"

### 📎 Evidencia
- 📷 Screenshots: [Navbar](evidencias/bug-002/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-003`

### 📄 Página / Módulo
`Toda la web en general`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [x] 🟢 Bajo

### 🧾 Título
> No se visualiza el favicon

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`

### ❌ Resultado actual
> Se observa que no hay favicon

### ✅ Resultado esperado
> El favicon debería de estar visible

### 📎 Evidencia
- 📷 Screenshots: [Favicon](evidencias/bug-003/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-004`

### 📄 Página / Módulo
`Toda la web en general`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Algunos links del navbar y footer redirigen a la Home

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en:
    - Hoteles
    - Paquetes
    - Ofertas
    - Cruceros
    - Sobre nosotros
    - Prensa
    - Trabaja con nosotros

### ❌ Resultado actual
> Al hacer click en los links mencionados, se ejecuta la redirección a la Home.

### ✅ Resultado esperado
> Cada link debería redirigir a su respectiva página.

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/ba426eb7-2fe2-46a9-92a4-1a7f7ae3b0a8)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-005`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> No se visualiza el contenido de los desplegables de búsqueda de vuelos

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. En el buscador, poner una letra para visualizar el desplegable con las opciones de destino.

### ❌ Resultado actual
> Se visualiza tanto en "Sólo ida", "Ida y Vuelta", "Multi-ciudad"; desplegables que parecen vacíos hasta que se pasa el mouse por encima.

### ✅ Resultado esperado
> Deberían visualizarse los destinos.

### 📎 Evidencia
- 📷 Screenshots: [Desplegable del buscador](evidencias/bug-005/1.png)
- 🎥 Video: [Evidencia](https://jam.dev/c/ab2886b1-b71a-4bb5-b8e9-befb31690473)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-006`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Los desplegables del buscador de vuelos quedan por debajo del contenido siguiente de la página

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. En el buscador, poner una letra para visualizar el desplegable con las opciones de destino.

### ❌ Resultado actual
> El desplegable queda por detrás del próximo contenido de la página.

### ✅ Resultado esperado
> Se debería de poder visualizar todo el desplegable correctamente

### 📎 Evidencia
- 📷 Screenshots: [Desplegable del buscador](evidencias/bug-006/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-007`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Los desplegables del buscador de vuelos se superponen entre sí

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. En el buscador, poner una letra en ambos desplegables.

### ❌ Resultado actual
> Los desplegables se superponen entre sí

### ✅ Resultado esperado
> Opción 1: Deberían de poder visualizarse sin superposición
> Opción 2: Al desplegar uno el otro debería de contraerse
> Opción 3: No permitir desplegar los dos al mismo tiempo

### 📎 Evidencia
- 📷 Screenshots: [Desplegable del buscador](evidencias/bug-007/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-008`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [x] 🟢 Bajo

### 🧾 Título
> Los placeholders de los inputs Origen y/o Destino tienen el texto cortado

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Visualizar los inputs de Origen y/o Destino del buscador de vuelos tanto en "Sólo ida", "Ida y Vuelta", "Multi-ciudad"

### ❌ Resultado actual
> Los placeholders estan entrecortados

### ✅ Resultado esperado
> Debería de visualizarse coreectamente el texto de los placeholders

### 📎 Evidencia
- 📷 Screenshots: [
    [Ida](evidencias/bug-008/1.png),
    [Ida y vuelta](evidencias/bug-008/2.png),
    [Multi](evidencias/bug-008/3.png)
]
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-009`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Desbordamiento del campo pasajeros respecto a su contenedor

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Ida y vuelta

### ❌ Resultado actual
> Se visualiza que el campo pasajeros queda por fuera del contenedor

### ✅ Resultado esperado
> Debería de reajustarse la posición de cada elemento respecto al espacio de su contenedor

### 📎 Evidencia
- 📷 Screenshots: [Ida y vuelta](evidencias/bug-009/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-010`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> La opción Multi-ciudad no habilita múltiples tramos

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Multi-ciudad

### ❌ Resultado actual
> Se visualiza que el comportamiento es el mismo que para Ida y vuelta

### ✅ Resultado esperado
> Debería de poder seleccionarse mútiples tramos

### 📎 Evidencia
- 📷 Screenshots: [Muti-ciudad](evidencias/bug-010/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-011`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> No se visualiza el contenido completo del desplegable de pasajeros

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida o Multi-ciudad
3. Hacer click en el componete de pasajeros

### ❌ Resultado actual
> Parte del desplegable queda debajo del siguiente contenido de la página, por lo cual no se pueden seleccionar pasajeros del tipo "bebés" 

### ✅ Resultado esperado
> Debería de visualizarse correctamente todo el contenido del componente

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-011/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-012`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Los botones +/- del desplegable de pasajeros están desalineados y fuera del contenedor

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelta o Multi-ciudad
3. Hacer click en el componete de pasajeros

### ❌ Resultado actual
> Se visualiza que los botones no están alineados entre sí y que quedaron desbordados de su contenedor

### ✅ Resultado esperado
> Deberían de visualizarse alineados y dentro de su contenedor

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-012/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-013`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El contador de pasajeros tiene el mismo color que su contenedor

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelta o Multi-ciudad
3. Hacer click en el componete de pasajeros

### ❌ Resultado actual
> Se visualiza que el contador de cada tipo de pasjeros tiene el mismo color blanco que su contenedor

### ✅ Resultado esperado
> Deberían de tener un color distinto para tener bien visible la cantidad de cada tipo de pasajero

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-013/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-014`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> No se visualiza por completo la cantidad de pasajeros

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelta o Multi-ciudad
3. Hacer click en el componete de pasajeros
4. Seleccionar, por lo menos, 1 adulto y 1 niño

### ❌ Resultado actual
> Sólo queda visible la cantidad de adultos (si se ciera el desplegable)

### ✅ Resultado esperado
> Deberían de visualizarse toda la cantidad de pasajeros

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-014/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-015`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico (bloqueante)
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite ingresar y procesar fechas pasadas

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelta o Multi-ciudad
3. Seleccionar una fecha, o rango de fechas, anteriores a la actual
4. Hacer click en buscar vuelos

### ❌ Resultado actual
> El sistema no valida la, o las fechas, y avanza con la busqueda de vuelos

### ✅ Resultado esperado
> Debería de validarse la fecha o el sistema no debería permitir ingresar una fecha anterior a la actual.

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/74329978-2649-47a1-bb5b-65d4550cebfa)
- 📄 Logs: N/A

-------------------------------------------------------------