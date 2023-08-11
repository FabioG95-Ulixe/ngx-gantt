---
title: Multi lingua
order: 60
---

Per le date nel calendario in `ngx-gantt`. Forniamo due modi per personalizzare questi formati di data.

Il primo è inserire una [Configurazione globale](/guides/configuration/global). Questo metodo può modificare globalmente il formato della data nel calendario del diagramma di Gantt.Il modo per inserire la configurazione globale è il seguente:

```javascript
import { GANTT_GLOBAL_CONFIG } from 'ngx-gantt';

@NgModule({
  ...
  providers: [
    {
      provide: GANTT_GLOBAL_CONFIG,
      useValue: {
        dateFormat: {
          ...
        }
      }
    },
    ...
  ]
  ...
})
export class AppModule {

}

```

Un altro modo è modificare il formato della data del diagramma di Gantt locale tramite i parametri di passaggio `viewOptions` e il metodo di implementazione è il seguente:

```html
<ngx-gantt [viewOptions]="viewOptions"> ... </ngx-gantt>
```

```javascript
@Component({
  selector: 'app-gantt-example',
  templateUrl: './gantt.component.html'
})
export class AppGanttExampleComponent {
  viewOptions: GanttViewOptions = {
    dateFormat: {
      yearQuarter: `QQQ 'of' yyyy`,
      month: 'LLLL',
      yearMonth: `LLLL yyyy'(week' w ')'`
    }
  };

  constructor() {}
}
```

Quando `ngx-gantt` crea una vista, otterrà la data nel calendario in base al metodo `format` di [date-fns](https://date-fns.org/v2.28.0/docs/format) in base a queste configurazioni o parametri Formato, per ulteriori formati, fare riferimento al documento ufficiale [date-fns](https://date-fns.org/v2.28.0/docs/format).
