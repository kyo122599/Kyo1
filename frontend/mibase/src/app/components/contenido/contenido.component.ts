import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-contenido',  // El selector está correcto
  templateUrl: './contenido.component.html',  // El nombre de la plantilla es correcto
  styleUrls: ['./contenido.component.css']  // El archivo de estilo también es correcto
})
export class ContenidoComponent {
  mensaje: string = '';

  constructor(private usuarioService: UsuarioService) {}

  obtenerMensajeFetch(): void {
    this.usuarioService.fetchUser().subscribe(
      response => {
        if (response && response.message) {
          this.mensaje = response.message; // Muestra el mensaje del backend
          console.log('Mensaje del servidor (GET):', this.mensaje);
        } else {
          console.error('La respuesta del servidor no contiene un mensaje.');
        }
      },
      error => {
        console.error('Error al obtener mensaje (GET):', error);
        this.mensaje = 'Hubo un error al obtener el mensaje del servidor';
      }
    );
  }

  crearUsuario(): void {
    this.usuarioService.postUser().subscribe(
      response => {
        if (response && response.message) {
          this.mensaje = response.message;
          console.log('Mensaje del servidor (POST):', this.mensaje);
        } else {
          console.error('La respuesta del servidor no contiene un mensaje.');
        }
      },
      error => {
        console.error('Error al crear usuario (POST):', error);
        this.mensaje = 'Hubo un error al crear el usuario';
      }
    );
  }

  actualizarUsuario(): void {
    this.usuarioService.updateUser().subscribe(
      response => {
        if (response && response.message) {
          this.mensaje = response.message;
          console.log('Mensaje del servidor (PUT):', this.mensaje);
        } else {
          console.error('La respuesta del servidor no contiene un mensaje.');
        }
      },
      error => {
        console.error('Error al actualizar usuario (PUT):', error);
        this.mensaje = 'Hubo un error al actualizar el usuario';
      }
    );
  }

  eliminarUsuario(): void {
    this.usuarioService.deleteUser().subscribe(
      response => {
        if (response && response.message) {
          this.mensaje = response.message;
          console.log('Mensaje del servidor (DELETE):', this.mensaje);
        } else {
          console.error('La respuesta del servidor no contiene un mensaje.');
        }
      },
      error => {
        console.error('Error al eliminar usuario (DELETE):', error);
        this.mensaje = 'Hubo un error al eliminar el usuario';
      }
    );
  }
}
