import { Component, Input } from '@angular/core';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-itinerary',
  standalone: true,
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.scss',
})
export class ItineraryComponent {
  @Input() dataItinerary: string = '';
  markdown = '## Itinerario de 2 días en Santa Marta (29.5°C)**';
  htmlContent: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) {
    // Configurar opciones de marked
    marked.setOptions({
      gfm: true, // GitHub Flavored Markdown
      breaks: true, // Convierte saltos de línea en <br>
    });
  }

  private formatMarkdown(text: string): string {
    // Eliminar comillas del principio y final
    text = text.replace(/^"|"$/g, '');

    // Reemplazar \n literales con saltos de línea reales
    text = text.replace(/\\n/g, '\n');

    // Preservar los asteriscos dobles sin modificarlos
    // (eliminamos las manipulaciones anteriores de asteriscos)

    // Asegurar que los párrafos tengan el espaciado correcto
    text = text.replace(/\n\n+/g, '\n\n');

    return text.trim();
  }

  async ngOnInit(): Promise<void> {
    // Convertir markdown a HTML y sanitizarlo para seguridad
    if (this.dataItinerary) {
      // Limpiar y formatear el markdown antes de convertirlo
      const formattedMarkdown = this.formatMarkdown(this.dataItinerary);
      const htmlString = await marked(formattedMarkdown);
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(htmlString);
    } else {
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(
        '<p>No se proporcionó itinerario.</p>'
      );
    }
  }
}
