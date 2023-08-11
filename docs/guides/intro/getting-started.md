---
title:
path: 'Per iniziare'
order: 2
---

# Installazione

```bash
$ npm i @ulixe23/gantt --save
# or
$ yarn add @ulixe23/gantt
```

# Utilizzo

### Importazione modulo

```ts
import { NgModule } from '@angular/core';
import { NgxGanttModule } from '@ulixe23/gantt';

@NgModule({
  ...
  imports: [ NgxGanttModule, ... ]
  ...
})
export class AppModule {

}
```

<br/>

### Importazione stile

angular.json

```json
{
  "styles": ["node_modules/@ulixe23/gantt/styles/index.scss"]
}
```

style.scss

```
@use "@ulixe23/gantt/styles/index.scss";
```

### Utilizzarlo nei componenti

```html
<!-- component.html -->
<ngx-gantt #gantt [items]="items">
  <ngx-gantt-table>
    <ngx-gantt-column name="Titolo" width="300px">
      <ng-template #cell let-item="item"> {{ item.title }} </ng-template>
    </ngx-gantt-column>
  </ngx-gantt-table>
</ngx-gantt>
```

```javascript
// component.ts
@Component({
  selector: 'app-gantt-example',
  templateUrl: './gantt.component.html'
})
export class AppGanttExampleComponent {
  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197, expandable: true },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597, links: ['000003', '000004', '000000'], expandable: true },
    { id: '000002', title: 'Task 2', start: 1610536397, end: 1610622797 },
    { id: '000003', title: 'Task 3', start: 1628507597, end: 1633345997, expandable: true }
  ];

  constructor() {}
}
```
