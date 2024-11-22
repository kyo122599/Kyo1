import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'mibase';
  menuVisible: boolean = false; // Controla la visibilidad del menú
  currentSubmenu: string | null = null; // Para manejar el submenú activo

  toggleMenu() {
    this.menuVisible = !this.menuVisible; // Cambia la visibilidad del menú
    this.currentSubmenu = null; // Cierra cualquier submenú al ocultar el menú principal
  }

  toggleSubmenu(submenu: string) {
    this.currentSubmenu = this.currentSubmenu === submenu ? null : submenu; // Alterna la visibilidad del submenú
  }
}
