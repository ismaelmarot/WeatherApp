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

![Build](https://img.shields.io/github/actions/workflow/status/ismaelmarot/WeatherApp/ci.yml?branch=master&style=for-the-badge)
&nbsp;&nbsp;&nbsp;&nbsp;
![Coverage](https://img.shields.io/badge/Coverage-73.29%25-brightgreen?style=for-the-badge)
&nbsp;&nbsp;&nbsp;
<a href="https://github.com/ismaelmarot/WeatherApp">
  <img src="https://img.shields.io/github/stars/ismaelmarot/WeatherApp?style=for-the-badge" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://github.com/ismaelmarot/WeatherApp/network/members">
  <img src="https://img.shields.io/github/forks/ismaelmarot/WeatherApp?style=for-the-badge" />
</a>

<br>

_***WeatherApp is a responsive weather dashboard built with React and TypeScript.***_

It consumes real-time weather data from the [WeatherAPI](https://www.weatherapi.com/) and dynamically adapts its layout for mobile, tablet, and desktop devices.

The project focuses on modular architecture, reusable components, custom hooks, and scalable folder structure.
<br>
<br>

<a href="https://tusitio.com">
  <img src="https://img.shields.io/badge/Go-Demo-blue?style=for-the-badge" />
</a>

<br>
<br>

------------------------------------

## 📑 [TABLE OF CONTENT](#-table-of-content)

1. [Highlights](#highlights)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Usage](#usage)
6. [Testing](#testing)
7. [Screenshots](#screenshots)
8. [Live Demo](#Live-Demo)

<br>

------------------------------------

<a id="highlights"></a>
## 🌟 [HIGHLIGHTS](#-table-of-content)

- Modular architecture with reusable components, hooks, and constants  
- Responsive layout for mobile, tablet, and desktop  
- Scroll-snap screens for temperature, wind, humidity, UV, air quality, and moon phases  
- Lazy loading and Suspense for performance optimization  
- Fully typed with TypeScript for reliability and maintainability  
- Unit-tested with Vitest and React Testing Library  

<br>

------------------------------------

<a id="technologies"></a>
## 🛠️ [TECNOLOGIES](#-table-of-content)

- **Frontend:** React 18, TypeScript, Styled Components  
- **Bundler:** Vite  
- **Testing:** Vitest + React Testing Library  
- **Other:** Scroll-snap UI, responsive design, custom hooks

<br>

------------------------------------

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
   
3. **Make sure you have Node.js >= 18 installed (💡Tip)**

   *You can check your version with:*
   ```bash
    node -v
   ```

5. **Setup API Key**
   
    *This project requires a Weather API key to fetch weather data.*

    - Register for a free API key at [WeatherAPI](https://www.weatherapi.com/).  
    - Once you have the key, create a `.env` file in the root folder of the project:
    ```env
    VITE_WEATHER_API_KEY=your_api_key_here
    VITE_WEATHER_BASE_URL=https://api.weatherapi.com/v1
    ```

6. **Run development server**
   ```bash
   npm run dev
   ```

  
6. **This will start the app locally at port 5173.**
    - Make sure your firewall or antivirus is not blocking the development port.
    - ***Open in your browser http://localhost:5173***

   
7. **Troubleshooting**
   
    *If you encounter errors with dependencies, try:*
    ```bash
     rm -rf node_modules package-lock.json
     npm install
   ```
  <br>

------------------------------------

<a id="project-structure"></a>
## 📂 [PROJECT STRUCTURE](#-table-of-content)

```plaintext
WEATHERAPP
├- src/
│  ├── components/     # Reusable UI components
│  ├── screens/        # Screens (Screen1–Screen10)
│  ├── layouts/        # DeviceLayout, RenderScreens, ScrollViewport
│  ├── hooks/          # Custom hooks
│  ├── constants/      # BREAKPOINTS, SCREENS_MAP, COLORS
│  ├── services/       # API calls
│  ├── utils/          # Utility functions
│  ├── types/          # TypeScript types
│  ├── mixins/         # CSS helpers (flex, size)
└──.env                # API key
```

<br>

------------------------------------

<a id="usage"></a>
## 💡 [USAGE](#-table-of-content)

*After installing dependencies and setting up your API key, you can use the app as follows:*

**1. Import the main layout**

*In your main `App.tsx` file:*
  ```bash
  import 'weather-icons/css/weather-icons.css'
  import { DeviceLayout } from './layouts/DeviceLayout'
  
  function App() {
    return <DeviceLayout />
  }

  export default App
  ```
<br>

**2. Run the app**

*Start the development server if you haven’t already:*
```bash
  npm run dev
```
<br>

------------------------------------

<a id="testing"></a>
## 🧪 [Testing](#-table-of-content)
This project uses **Vitest** for unit testing and **React Testing Library** for component tests.

![Coverage](https://img.shields.io/badge/coverage-73.29%25-brightgreen)

***1. Install testing dependencies***

If not already installed via `npm install`, run:

```bash
# Using npm
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom

# Or using yarn
yarn add -D vitest @testing-library/react @testing-library/jest-dom

```

***2. Run all tests***
```basg
# Using npm
npm run test

# Or using yarn
yarn test
```

***3. Run in watch mode***

_By default, this runs all tests once and exit_ (💡Tip)
```bash
# Using npm
npm run test:watch

# Or using yarn
yarn test:watch
```

***4. Run a single test file***
```bash
# Using npm
npx vitest run src/components/MyComponent.test.tsx

# Or using yarn
yarn vitest run src/components/MyComponent.test.tsx
```
<br>

------------------------------------

<a id="screenshots"></a>
## 📸 [Screenshots](#-table-of-content)

### 📱 Mobile

<p align="center">
  <img src="assets/screenshots/screenshot_01.png" width="250"/>
  <img src="assets/screenshots/screenshot_02.png" width="250"/>
  <img src="assets/screenshots/screenshot_03.png" width="250"/>
</p>

<p align="center">
  <img src="assets/screenshots/screenshot_04.png" width="250"/>
  <img src="assets/screenshots/screenshot_05.png" width="250"/>
  <img src="assets/screenshots/screenshot_06.png" width="250"/>
</p>

<p align="center">
  <img src="assets/screenshots/screenshot_07.png" width="250"/>
  <img src="assets/screenshots/screenshot_08.png" width="250"/>
  <img src="assets/screenshots/screenshot_09.png" width="250"/>
</p>

<p align="center">
  <img src="assets/screenshots/screenshot_10.png" width="250"/>
</p>

<br>

------------------------------------

<a id="live-demo"></a>
## 🌍 [Live Demo](#-table-of-content)

  👉 https://ismaelmarot.github.io/WeatherApp/

<br>

------------------------------------

<a id="license"></a>
## 📄 [License](#-table-of-content)


This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<br>

------------------------------------

## 📬 Contact

<p align="center">
  <a href="https://ismaelmarot.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-0A66C2?style=for-the-badge" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/ismael-marot" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>

------------------------------------

<p align="center">
  <a href="#-table-of-content">
    <img src="https://img.shields.io/badge/Back%20-0A66C2?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
</p>

<br>
