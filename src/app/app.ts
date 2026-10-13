import { ChangeDetectionStrategy, Component } from '@angular/core';

interface MealCard {
  name: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly cards: MealCard[] = [
    { name: 'Desayuno' },
    { name: 'Almuerzo' },
    { name: 'Merienda' },
    { name: 'Cena' },
    { name: 'Total' },
  ];
}
