# ClimaTour

**ClimaTour** is a web application built with Angular v18, designed to provide users with accurate weather forecasts and help them plan their activities accordingly. This project utilizes **BEM methodology** for structured CSS, **SCSS** for enhanced styling capabilities, and **Tailwind CSS** for utility-first styling.

## Project Overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Table of Contents

- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [Build](#build)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [UI Interfaces](#ui-interfaces)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Development Server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Testing

- **Unit Tests**: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- **End-to-End Tests**: Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project Structure

### Explanation of the Structure inside `src`

1. **`core/`**
   - **Purpose**: Contains essential services and models for business logic and data handling.
   - **Subfolders**:
     - **`services/`**:
       - `weather.service.ts`: Service to fetch weather data for the selected city.
       - `itinerary.service.ts`: Service to generate a travel itinerary based on weather predictions.
     - **`models/`**:
       - `weather.model.ts`: Model to represent weather data (e.g., temperature, weather conditions).
       - `itinerary.model.ts`: Model for the itinerary, such as suggested activities based on the weather.

2. **`shared/`**
   - **Purpose**: Reusable components and pipes for the entire application.
   - **Subfolders**:
     - **`components/`**:
       - **`city-selector/`**: A standalone component that allows users to select a city, which may include a dropdown or search field.
     - **`pipes/`**:
       - `date-format.pipe.ts`: A pipe to format dates in the itinerary or weather predictions for easier visualization.

3. **`features/`**
   - **Purpose**: Each functionality or section of the application has its own structure to group related components and files.
   - **Subfolders**:
     - **`weather/`**: Manages the visualization of weather data for the selected city.
       - `weather.component.ts`: A standalone component that displays the weather forecast.
     - **`itinerary/`**: Displays the suggested itinerary based on weather data.
       - `itinerary.component.ts`: A standalone component that showcases activities and plans suggested according to the weather forecast.


## UI Interfaces

The **ClimaTour** application features a clean and user-friendly interface designed to enhance user experience. Below are some of the key UI components:

- **Home Page**: Displays the current weather conditions and a brief introduction to the app.
  ![Home Page Screenshot](https://github.com/user-attachments/assets/2d1d274f-0860-44d5-9c91-c37b42145f5f)

- **Weather Forecast & Itinerary Page**: Presents detailed weather forecasts including temperature graphs and hourly predictions.
  ![Weather Forecast & Itinerary Page Screenshot](https://github.com/user-attachments/assets/053dba79-bfa1-4ec2-98a4-8ce5523e9c5c)


- **Responsive Design Home Page**: The application is fully responsive, providing a seamless experience on both desktop and mobile devices.
  
  ![Responsive Design Screenshot](https://github.com/user-attachments/assets/d6d0713d-575b-4547-8064-7bad74ca0765)
  
- **Responsive Design Weather Forecast & Itinerary Page**: 
  ![Responsive Design Screenshot](https://github.com/user-attachments/assets/38c7bbe4-0412-4453-a08a-c9ccee94a963)

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hdeza/clima-tour.git
   cd ClimaTour
  ```
2. Install dependencies:
 ```bash
   npm install
  ```
3. Start the development server
  ```bash
   ng serve
  ```
### Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository and create a pull request with your proposed changes.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

Feel free to modify any section to better fit your project or add any additional information as needed!



  
