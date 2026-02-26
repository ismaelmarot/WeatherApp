# WeatherApp 🌤️

![React](https://img.shields.io/badge/React-18-blue?logo=react) 
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript) 
![Vite](https://img.shields.io/badge/Vite-4.5-blue?logo=vite) 
![npm](https://img.shields.io/badge/npm-latest-red?logo=npm) 

**A modern, responsive weather application for mobile, tablet, and desktop.**  
Built with **React 18**, **TypeScript**, and **Vite**, following modular architecture, reusable components, and scalable design.

**Una aplicación de clima moderna y responsiva para móvil, tablet y escritorio.**  
Construida con **React 18**, **TypeScript** y **Vite**, siguiendo arquitectura modular, componentes reutilizables y diseño escalable.

---

![Demo GIF](./assets/demo.gif)

---

## 🌟 Highlights / Aspectos destacados
- Modular architecture with reusable components, hooks, and constants  
- Responsive layout for mobile, tablet, and desktop  
- Scroll-snap screens for temperature, wind, humidity, UV, air quality, and moon phases  
- Lazy loading and Suspense for performance optimization  
- Fully typed with TypeScript for reliability and maintainability  
- Unit-tested with Vitest and React Testing Library  

- Arquitectura modular con componentes, hooks y constantes reutilizables  
- Layout responsive para móvil, tablet y escritorio  
- Pantallas con scroll-snap: temperatura, viento, humedad, UV, calidad del aire y fases lunares  
- Lazy loading y Suspense para optimizar performance  
- Tipado completo con TypeScript para confiabilidad y mantenibilidad  
- Unit tests con Vitest y React Testing Library  

---

## 🛠️ Technologies / Tecnologías
- **Frontend:** React 18, TypeScript, Styled Components  
- **Bundler:** Vite  
- **Testing:** Vitest + React Testing Library  
- **Other / Otros:** Scroll-snap UI, responsive design, custom hooks  

---

## 🚀 Installation / Instalación

```bash
# Clone the repository / Clonar el repositorio
git clone https://github.com/ismaelmarot/WeatherApp.git
cd WeatherApp

# Install dependencies using npm / Instalar dependencias usando npm
npm install

# Run development server / Ejecutar servidor de desarrollo
npm run dev

Open in your browser: http://localhost:5173

## 📂 Project Structure / Estructura del proyecto

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

## 💡 Usage
import { DeviceLayout } from './layouts/DeviceLayout';

function App() {
  return <DeviceLayout />;
}

##
🧪 Testing / Pruebas
</> Bash
npm test




