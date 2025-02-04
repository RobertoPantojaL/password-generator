# Password Generator by Nexwey Services

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

**Password Generator by Nexwey** es una herramienta moderna y segura para generar contraseñas fuertes y almacenarlas localmente en tu dispositivo. Este proyecto está construido con **React**, **Vite** y **Emotion** para ofrecer una interfaz rápida, responsive y fácil de usar.

## Características principales

- **Generador de contraseñas personalizadas**: Crea contraseñas seguras ajustando la longitud y seleccionando los tipos de caracteres (mayúsculas, minúsculas, números y símbolos).
- **Almacenamiento local seguro**: Guarda tus contraseñas generadas directamente en tu navegador mediante `localStorage`. Ninguna contraseña se envía ni almacena en servidores externos.
- **Exportación de contraseñas**: Exporta tus contraseñas guardadas en formato CSV para respaldarlas o transferirlas.
- **Interfaz intuitiva**: Diseño limpio y moderno con animaciones suaves gracias a **Framer Motion**.
- **Política de privacidad sólida**: Ninguna información personal o contraseña se almacena en servidores externos. Todo se maneja localmente en tu dispositivo.

---

## Capturas de pantalla

### Generador de Contraseñas
![Generador de Contraseñas](https://via.placeholder.com/800x400?text=Password+Generator+Screenshot)

### Contraseñas Guardadas
![Contraseñas Guardadas](https://via.placeholder.com/800x400?text=Saved+Passwords+Screenshot)

---

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

---

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/password-generator.git
   cd password-generator
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```
4. Abre tu navegador y visita http://localhost:5173
---
## Uso

### Generar una contraseña
1. Ve a la pestaña **Generador**.
2. Configura la longitud y los tipos de caracteres que deseas incluir (mayúsculas, minúsculas, números y símbolos).
3. Haz clic en **Generar Contraseña**.
4. Copia la contraseña generada o guárdala junto con los detalles del sitio y usuario.

### Ver contraseñas guardadas
1. Ve a la pestaña **Contraseñas Guardadas**.
2. Aquí puedes ver todas las contraseñas que has guardado previamente.
3. Usa los botones para copiar contraseñas o exportarlas como un archivo CSV.

---

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye el proyecto para producción.
- `npm run preview`: Previsualiza la versión de producción localmente.
- `npm run lint`: Ejecuta ESLint para verificar errores de código.

---

## Estructura del proyecto
```planetext
password-generator/
       ├── eslint.config.js               # Configuración de ESLint
       ├── index.html                     # Punto de entrada HTML
       ├── package.json                   # Dependencias y scripts del proyecto
       ├── vite.config.js                 # Configuración de Vite
       ├── public/
       │   └── legal.html                 # Términos legales y política de privacidad
       └── src/
           ├── App.jsx                    # Componente principal de la aplicación
           ├── main.jsx                   # Punto de entrada de React
           ├── assets/                    # Archivos estáticos (imágenes, íconos, etc.)
           └── components/
               ├── Footer.jsx             # Pie de página
               ├── PasswordGenerator.jsx  # Componente para generar contraseñas
               ├── SavedPasswords.jsx     # Componente para mostrar contraseñas guardadas
               └── styles.js              # Estilos globales y componentes estilizados
```
## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes ideas para mejorar el proyecto, no dudes en abrir un issue o enviar un pull request.

1. Fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request.

---

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Consulta el archivo `LICENSE` para más detalles.