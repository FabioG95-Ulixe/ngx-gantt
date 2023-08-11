---
title: Utilizzo
path: usage
order: 10
---

## Uso di base

In generale, per l'uso più basilare, abbiamo solo bisogno di definire i dati `items` nel componente (va notato che il formato dell'ora corrente supporta solo timestamp a 10 cifre), e se hai bisogno di mostrare colonne a sinistra è inoltre necessario definirle.

```html
<ngx-gantt #gantt [items]="items">
  <ngx-gantt-table>
    <ngx-gantt-column name="Titolo" width="300px">
      <ng-template #cell let-item="item"> {{ item.title }} </ng-template>
    </ngx-gantt-column>
  </ngx-gantt-table>
</ngx-gantt>
```

```javascript
export class AppGanttExampleComponent {
  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197, expandable: true },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597, links: ['000003', '000004', '000000'], expandable: true },
    { id: '000002', title: 'Task 2', start: 1610536397, end: 1610622797 },
    { id: '000003', title: 'Task 3', start: 1628507597, end: 1633345997, expandable: true }
  ];
}
```

## Come impostare il raggruppamento

In modalità di gruppo, dobbiamo anche passare il parametro `groups` come array e assicurarsi che il `group_id` di ciascun elemento di dati sia impostato nei dati `items` che passiamo.


```html
<ngx-gantt #gantt [groups]="groups" [items]="items">
  <ngx-gantt-table>
    <ngx-gantt-column name="Titolo" width="300px">
      <ng-template #cell let-item="item"> {{ item.title }} </ng-template>
    </ngx-gantt-column>
  </ngx-gantt-table>
</ngx-gantt>
```

```javascript
export class AppGanttExampleComponent {
  groups: GanttGroup[] = [
    { id: '000000', title: 'Group-0' },
    { id: '000001', title: 'Group-1' }
  ];
  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197, group_id: '000000' },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597, group_id: '000001' }
  ];
}
```

## Visualizzazione della struttura ad albero

Il tipo `GanttItem` contiene l'attributo `children`. Per impostazione predefinita, finché passiamo l'attributo `children`, verrà visualizzato come una struttura ad albero.

```javascript
export class AppGanttExampleComponent {
  items: GanttItem[] = [
    {
      id: '000000',
      title: 'Task 0',
      children: [
        { id: '000000-01', title: 'Task 0-1' },
        { id: '000000-02', title: 'Task 0-2' }
      ]
    }
  ];
}
```
Se devi caricare i dati figlio in modo asincrono, dobbiamo impostare `async` del componente su `true` e quindi impostare la funzione Resolve `childrenResolve` per caricare i dati figlio e infine dobbiamo specificare quali dati sono espandibili.

```html
<ngx-gantt #gantt [items]="items" [async]="true" [childrenResolve]="childrenResolve"> ... </ngx-gantt>
```

```javascript
export class AppGanttExampleComponent {
  // Impostare expandable su true per specificare che i dati sono espandibili
  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197, expandable: true },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597, expandable: true }
  ];

  // Impostare la funzione Resolve per il caricamento dei dati figlio, il valore restituito deve essere un oggetto osservabile Observable
  childrenResolve = (item: GanttItem) => {
    const children = randomItems(random(1, 5), item);
    return of(children).pipe(delay(1000));
  };
}
```

## Creare associazioni

如果我们需要展示数据项的依赖关系，则需要设置 `GanttItem` 中的 `links` 属性，设置需要关联的 id，如果需要拖拽创建关联关系，则需要设置 `[linkable] = true`，在某些场景下可能我们需要设置某一条数据开启拖拽创建关联，我们也可以通过设置 item 数据的 `linkable` 来实现。

Se dobbiamo visualizzare le dipendenze degli elementi di dati, dobbiamo impostare l'attributo `links` in `GanttItem` e impostare l'id da associare. Se dobbiamo trascinare e rilasciare per creare una relazione di associazione, dobbiamo impostare `[linkable] = true`, in alcuni scenari, potremmo aver bisogno di impostare un pezzo di dati per abilitare il trascinamento della selezione per creare associazioni. Possiamo anche raggiungere questo obiettivo impostando il `linkable` dei dati dell'elemento


```html
<ngx-gantt #gantt [items]="items" [linkable]="true" (linkDragEnded)="linkDragEnded($event)"> ... </ngx-gantt>
```

```javascript
export class AppGanttExampleComponent {
  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197, links: ['000001', '000002'] },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597, links: ['000003'] },
    { id: '000002', title: 'Task 2', start: 1617361997, end: 1625483597, linkable: false }
  ];

  linkDragEnded($event: GanttLinkDragEvent) {
    this.http
      .post(`/api/item/deps`, {
        source: event.source,
        target: event.target
      })
      .subscribe((items) => {});
  }
}
```

## Caricamento a scorrimento

Per garantire le prestazioni del componente, per impostazione predefinita verrà visualizzato solo un determinato periodo di tempo (diversi periodi di visualizzazione sono diversi), quindi il componente ha il caricamento dello scorrimento abilitato per impostazione predefinita. Se lo scorrimento non è richiesto, può essere disabilitato impostando `[disabledLoadOnScroll]=true`.

```html
<ngx-gantt #gantt [items]="items" (loadOnScroll)="loadOnScroll($event)"> ... </ngx-gantt>
```

```javascript
export class AppGanttExampleComponent {
  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197 },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597 },
    { id: '000002', title: 'Task 2', start: 1617361997, end: 1625483597 }
  ];

  loadOnScroll(event: GanttLoadOnScrollEvent) {
    this.http.get(`/api/items?start=${event.start}&end=${event.end}`).subscribe((items) => {
      this.items = [...this.items, ...items];
    });
  }
}
```

## Drag and Drop

Abilita il trascinamento impostando `[draggable]=true`, supporta gli eventi `(dragStarted)`, `(dragEnded)`.

```html
<ngx-gantt #gantt [items]="items" [draggable]="true" (dragEnded)="dragEnded($event)"> ... </ngx-gantt>
```

```javascript
export class AppGanttExampleComponent {
  dragEnded($event: GanttDragEvent) {
    this.http
      .put(`/api/item/${$event.item.id}`, {
        start: $event.item.start,
        end: $event.item.end
      })
      .subscribe((items) => {});
  }
}
```

## Selezionare l'intera riga

Abilita la selezione dell'intera riga impostando `[selectable]=true` e usa anche `[multiple]=true` per abilitare la modalità di selezione multipla. Supporta l'evento `(selectedChange)`.

```html
<ngx-gantt #gantt [items]="items" [selectable]="true" [multiple]="true" (selectedChange)="selectedChange($event)"> ... </ngx-gantt>
```

```javascript
export class AppGanttExampleComponent {
  selectedChange(event: GanttSelectedEvent) {}
}
```

## Scarica

Se è necessario esportare il Gantt come immagine è necessario iniettare il servizio di stampa di immagini `GanttPrintService` quando si utilizza il componente.

```javascript
@Component({
  selector: 'app-gantt-example',
  templateUrl: './gantt.component.html',
  providers: [GanttPrintService]
})
export class AppGanttExampleComponent {
  @ViewChild('gantt') ganttComponent: NgxGanttComponent;

  exportImage() {
    ganttComponent.print('image name');
  }
}
```
