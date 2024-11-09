# Examen Frontend III - Digital House
## Primer Entregable: Formulario con React

Este proyecto es el primer entregable para la materia Frontend III de Digital House. Consiste en un formulario interactivo desarrollado con React que implementa validaciones y manejo de estados.

### 🎯 Objetivo
Crear un formulario que permita a los usuarios ingresar:
- Nombre (mínimo 3 caracteres, sin espacios al inicio)
- Color favorito en formato HEX (mínimo 6 caracteres)

### ✨ Funcionalidades
- Formulario controlado con React useState
- Validaciones en tiempo real
- Mensaje de error cuando la información no cumple los requisitos
- Visualización de la información en una Card cuando los datos son válidos
- Display del color seleccionado

### 🔍 Validaciones Implementadas
1. **Nombre**:
   - Longitud mínima: 3 caracteres
   - No permite espacios en blanco al inicio

2. **Color (HEX)**:
   - Longitud mínima: 6 caracteres

### 🚀 Tecnologías Utilizadas
- React
- CSS Modules
- useState Hook

### 💻 Estructura del Proyecto
src/
├── App.jsx
├── App.module.css
└── components/

### 📝 Requisitos del Examen
- Formulario con mínimo dos inputs y un botón submit
- Validaciones específicas para cada campo
- Mensaje de error: "Por favor chequea que la información sea correcta"
- Renderizado condicional de Card con la información ingresada
- Implementación de estilos (opcional)

### 🎨 Diseño
El proyecto incluye un diseño limpio y responsive, con:
- Formulario centrado
- Inputs estilizados
- Mensaje de error en color rojo
- Card con diseño moderno para mostrar la información
- Display visual del color seleccionado

### 👨‍💻 Desarrollo
El proyecto sigue las mejores prácticas de React, incluyendo:
- Componentes funcionales
- Manejo de estados con useState
- Event handlers para formularios
- Validaciones de datos
- Renderizado condicional