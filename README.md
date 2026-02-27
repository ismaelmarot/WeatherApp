# 🌤️ WeatherApp



![React](https://img.shields.io/badge/React-18-blue?logo=react) 
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript) 
![Vite](https://img.shields.io/badge/Vite-4.5-blue?logo=vite) 
![npm](https://img.shields.io/badge/npm-latest-red?logo=npm)

![Version](https://img.shields.io/badge/version-1.0.0-orange?style=for-the-badge)

## 📑 TABLE OF CONTENT

1. [Highlights](#-highlights)
2. [Technologies](#technologies)
3. [Installation](#-installation)
4. [Project Structure](#-project-structure)
5. [Usage](#-usage)
6. [Testing](#-testing)


**A modern, responsive weather application for mobile, tablet, and desktop.**  
Built with **React 18**, **TypeScript**, and **Vite**, following modular architecture, reusable components, and scalable design.

---
## 🌟 Highlights
- Modular architecture with reusable components, hooks, and constants  
- Responsive layout for mobile, tablet, and desktop  
- Scroll-snap screens for temperature, wind, humidity, UV, air quality, and moon phases  
- Lazy loading and Suspense for performance optimization  
- Fully typed with TypeScript for reliability and maintainability  
- Unit-tested with Vitest and React Testing Library  


---

7. <a id="technologies"></a>
## 🛠️ Technologies

- **Frontend:** React 18, TypeScript, Styled Components  
- **Bundler:** Vite  
- **Testing:** Vitest + React Testing Library  
- **Other:** Scroll-snap UI, responsive design, custom hooks
---
## 🚀 Installation 

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ismaelmarot/WeatherApp.git
   cd WeatherApp
   ```
2. **Install dependencies using npm / Instalar dependencias usando npm**
   ```bash
   npm install
   ```
3. **Run development server / Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. Open in your browser: http://localhost:5173

---
## 📂 Project Structure

```plaintext
src/
├── components/    # Reusable UI components / Componentes UI reutilizables
├── screens/       # Screens (Screen1–Screen10) / Pantallas Screen1–Screen10
├── layouts/       # DeviceLayout, RenderScreens, ScrollViewport / Layouts
├── hooks/         # Custom hooks / Hooks personalizados
├── constants/     # BREAKPOINTS, SCREENS_MAP, COLORS / Constantes
├── services/      # API calls / Llamadas a APIs
├── utils/         # Utility functions / Funciones auxiliares
├── types/         # TypeScript types / Tipos TypeScript
├── mixins/        # CSS helpers (flex, size) / Helpers CSS
```

---
## 💡 Usage

```bash
import { DeviceLayout } from './layouts/DeviceLayout'

function App() {
  return <DeviceLayout />
}
```

---
## 🧪 [Testing](#table-of-content)

```Bash
npm test
```



