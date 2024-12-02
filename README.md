# Simple Weather App

A simple weather application built with React to display real-time weather data using the OpenWeatherMap API. This project demonstrates the use of:
- Context API for state management.
- Fetching data from an external API.
- Styling using inline styles, CSS Modules, and styled-components.

---

## **Overview**

The Simple Weather App allows users to search for the current weather in any city. It handles errors gracefully, such as invalid city names, and provides loading indicators for a seamless user experience.
<img width="710" alt="Screenshot 2024-12-01 at 2 39 33 PM" src="https://github.com/user-attachments/assets/3ae96f91-2f4a-4608-b33f-37520e10ffaf">
<img width="709" alt="Screenshot 2024-12-01 at 2 39 48 PM" src="https://github.com/user-attachments/assets/2884107a-b04c-4b2c-a261-a12e1f8efcdb">
<img width="708" alt="Screenshot 2024-12-01 at 2 40 03 PM" src="https://github.com/user-attachments/assets/db991ccd-b44a-4dbe-bc8c-e6cef25a47ff">

---

## **Features**
1. **Context API for State Management**:
   - Shares weather data, loading state, and error state across components.

2. **Fetching Weather Data**:
   - Retrieves weather information from OpenWeatherMap API.
   - Handles loading and error states effectively.

3. **Styling in React**:
   - **Inline styles**: Used for the application header.
   - **CSS Modules**: Used for the weather display component.
   - **Styled-components**: Used for the search bar.

4. **Error Handling**:
   - Displays an error message if the city is not found.

5. **Responsive Design**:
   - Ensures the app looks good on various devices and screen sizes.
---

## **API key**
- In SearchBar.js file:
   - Replace the placeholder API key with your own API key:
  ```bash
  const API_KEY = 'your_api_key_here';

     

---

## **Dependencies**

Before running the app, make sure you have the following dependencies installed:

- `react`
- `styled-components`

To install the dependencies, run:
```bash
npm install styled-components
