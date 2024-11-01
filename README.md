# ClimaTour

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Explicación de la Estructura dentro del src

1. core/
   Propósito: Contiene los servicios y modelos esenciales para la lógica de negocio y el manejo de datos.

- Subcarpetas:

  services/:
  weather.service.ts: Servicio para obtener los datos del clima de la ciudad seleccionada.
  itinerary.service.ts: Servicio para generar el itinerario de viaje según la predicción del clima.
  models/: Define las interfaces o clases para los datos.
  weather.model.ts: Modelo para representar los datos meteorológicos (ej. temperatura, condiciones climáticas).
  itinerary.model.ts: Modelo para el itinerario, como actividades sugeridas según el clima.

2. shared/
   Propósito: Componentes y pipes reutilizables para toda la aplicación.
   Subcarpetas:
   components/:
   city-selector/: Un componente standalone que permite al usuario seleccionar la ciudad. Este componente puede incluir una lista desplegable o un campo de búsqueda.
   pipes/:
   date-format.pipe.ts: Un pipe para formatear las fechas en el itinerario o predicciones meteorológicas, facilitando la visualización.
3. features/
   Propósito: Cada funcionalidad o sección de la aplicación tiene su propia estructura para agrupar componentes y archivos relacionados.
   Subcarpetas:
   weather/: Maneja la visualización de datos meteorológicos para la ciudad seleccionada.
   weather.component.ts: Componente standalone que muestra la predicción meteorológica.
   itinerary/: Muestra el itinerario sugerido basado en los datos del clima.
   itinerary.component.ts: Componente standalone que despliega actividades y planes sugeridos en función de la predicción del clima.
