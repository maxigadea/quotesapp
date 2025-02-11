# React Frases App

## Tecnologías utilizadas

- **React** – Biblioteca para la construcción de interfaces de usuario.
- **TypeScript** – Superset de JavaScript que proporciona tipado estático.
- **Tailwind CSS** – Framework de estilos para un diseño optimizado y escalable.
- **Context API** – Gestión de estado global sin necesidad de bibliotecas externas.
- **Custom Hooks** – Reutilización de lógica en componentes funcionales.
- **Lazy Loading** – Carga diferida de componentes con `React.lazy()` y `Suspense`.
- **Testing con Jest y React Testing Library** – Pruebas unitarias y de integración para asegurar calidad y estabilidad.

---

## Instalación y ejecución

### 1. Clonar el repositorio  
```sh
git clone https://github.com/tu-usuario/react-frases-app.git
cd react-frases-app
```

### 2. Instalar las dependencias  
```sh
npm install
```

### 3. Iniciar el servidor de desarrollo  
```sh
npm run dev
```

La aplicación estará disponible en:  
[http://localhost:5173/](http://localhost:5173/)

---

## Estructura del proyecto

```plaintext
📂 src
 ┣ 📂 components          # Componentes reutilizables
 ┃ ┣ 📂 ui               # Elementos de UI como botones e inputs
 ┃ ┣ 📜 FormContainer.tsx # Formulario de ingreso de frases
 ┃ ┣ 📜 Filter.tsx        # Filtro de frases
 ┃ ┣ 📜 CardList.tsx      # Lista de frases con opción de eliminación
 ┣ 📂 context             # Context API para manejo de estado global
 ┃ ┣ 📜 PhrasesContext.tsx
 ┃ ┣ 📜 PhrasesProvider.tsx
 ┣ 📂 hooks               # Custom Hooks
 ┃ ┣ 📜 usePhrasesLogic.ts # Lógica del manejo de frases
 ┣ 📂 tests               # Pruebas unitarias y de integración
 ┃ ┣ 📜 FormContainer.test.tsx
 ┃ ┣ 📜 CardList.test.tsx
 ┣ 📜 App.tsx             # Punto de entrada principal
 ┣ 📜 main.tsx            # Renderizado de la aplicación
 ┣ 📜 tailwind.config.ts  # Configuración de Tailwind CSS
 ┗ 📜 tsconfig.json       # Configuración de TypeScript
```

---

## Funcionalidades clave, manejo avanzado de React:

- Manejo de errores para mejorar la experiencia del usuario.
- Gestión de estado con Context API.
- Carga diferida de componentes con `React.lazy()` y `Suspense`.
- Pruebas unitarias y de integración con Jest y React Testing Library.

---

## Pruebas

Para ejecutar los tests, use el siguiente comando:

```sh
npm test
```

Esto ejecutará todas las pruebas unitarias e integración utilizando Jest y React Testing Library.



## Demo en vivo:
https://quotesapp-three.vercel.app/
