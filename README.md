# 🌤️ WeatherApp

![React](https://img.shields.io/badge/React-18-blue?logo=react) 
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript) 
![Vite](https://img.shields.io/badge/Vite-4.5-blue?logo=vite) 
![npm](https://img.shields.io/badge/npm-latest-red?logo=npm)

![Version](https://img.shields.io/badge/version-1.0.0-orange?style=for-the-badge)
&nbsp;&nbsp;&nbsp;&nbsp;
[![License](https://img.shields.io/github/license/ismaelmarot/WeatherApp?style=for-the-badge)](https://github.com/ismaelmarot/WeatherApp/blob/HEAD/LICENSE)
&nbsp;&nbsp;&nbsp;&nbsp;

[![Last Commit](https://img.shields.io/github/last-commit/ismaelmarot/WeatherApp?style=for-the-badge)](https://github.com/ismaelmarot/WeatherApp/commit/main)
&nbsp;&nbsp;&nbsp;&nbsp;


![Coverage](https://img.shields.io/codecov/c/github/ismaelmarot/WeatherApp?style=for-the-badge)
&nbsp;&nbsp;&nbsp;
![Build](https://img.shields.io/github/actions/workflow/status/ismaelmarot/WeatherApp/main.yml?style=for-the-badge)
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/ismaelmarot/WeatherApp">
  <img src="https://img.shields.io/github/stars/ismaelmarot/WeatherApp?style=for-the-badge" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://github.com/ismaelmarot/WeatherApp/network/members">
  <img src="https://img.shields.io/github/forks/ismaelmarot/WeatherApp?style=for-the-badge" />
</a>

<br>

_**A modern, responsive weather application for mobile, tablet, and desktop.**_

_Built with **React 18**, **TypeScript**, and **Vite**, following modular architecture, reusable components, and scalable design._

<br>
<br>

<a href="https://tusitio.com">
  <img src="https://img.shields.io/badge/Ver-Demo-blue?style=for-the-badge" />
</a>

<br>
<br>

------

## 📑 [TABLE OF CONTENT](#-table-of-content)

1. [Highlights](#highlights)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Usage](#usage)
6. [Testing](#testing)

<br>

------

<a id="highlights"></a>
## 🌟 [HIGHLIGHTS](#-table-of-content)

- Modular architecture with reusable components, hooks, and constants  
- Responsive layout for mobile, tablet, and desktop  
- Scroll-snap screens for temperature, wind, humidity, UV, air quality, and moon phases  
- Lazy loading and Suspense for performance optimization  
- Fully typed with TypeScript for reliability and maintainability  
- Unit-tested with Vitest and React Testing Library  

<br>

---

<a id="technologies"></a>
## 🛠️ [TECNOLOGIES](#-table-of-content)

- **Frontend:** React 18, TypeScript, Styled Components  
- **Bundler:** Vite  
- **Testing:** Vitest + React Testing Library  
- **Other:** Scroll-snap UI, responsive design, custom hooks

<br>

---

<a id="installation"></a>
## 🚀 [INSTALLATION](#-table-of-content)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ismaelmarot/WeatherApp.git
   cd WeatherApp
   ```
2. **Install dependencies using npm**
   ```bash
   npm install
   ```
3. **Run development server**
   ```bash
   npm run dev
   ```
4. **Open in your browser**
   http://localhost:5173

<br>

---

<a id="project-structure"></a>
## 📂 [PROJECT STRUCTURE](#-table-of-content)

```plaintext
src/
├── components/    # Reusable UI components
├── screens/       # Screens (Screen1–Screen10)
├── layouts/       # DeviceLayout, RenderScreens, ScrollViewport
├── hooks/         # Custom hooks
├── constants/     # BREAKPOINTS, SCREENS_MAP, COLORS
├── services/      # API calls
├── utils/         # Utility functions
├── types/         # TypeScript types
├── mixins/        # CSS helpers (flex, size)
```

<br>

---

<a id="usage"></a>
## 💡 [USAGE](#-table-of-content)

```bash
import { DeviceLayout } from './layouts/DeviceLayout'

function App() {
  return <DeviceLayout />
}
```

<br>

------

<a id="testing"></a>
## 🧪 [Testing](#-table-of-content)
This project uses **Vitest + Testing Library** for unit and component testing.

![Coverage](https://img.shields.io/codecov/c/github/ismaelmarot/WeatherApp?style=for-the-badge)

### ▶ Run tests

```bash
npm test
```

<br>

------

<a id="license"></a>
## 📄 [License](#-table-of-content)


This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<br>

------

## 📸 Screenshots

### Mobile
![Mobile Screenshot](assets/screenshots/mobile.png)

### Desktop
![Desktop Screenshot](assets/screenshots/desktop.png)

<br>

------

<p align="center">
  <a href="#-table-of-content">
    <img src="https://img.shields.io/badge/Back%20-0A66C2?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
</p>

<br>
