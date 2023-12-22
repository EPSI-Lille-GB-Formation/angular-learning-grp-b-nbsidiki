import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  standalone: true
})
export class ConfirmDirective {
  private message = 'Êtes-vous sûr ?'; // Message de confirmation

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (!window.confirm(this.message)) {
      event.preventDefault(); // Annuler l'événement de clic si l'utilisateur annule la confirmation
    }
  }
}
