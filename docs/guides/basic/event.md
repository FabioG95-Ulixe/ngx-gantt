---
title: Eventi
path: 'event'
order: 40
---

# GanttDragEvent

Classe dell'evento di trascinamento dell'elemento di dati, utilizzata per trasferire gli elementi di dati dopo l'inizio o la fine del trascinamento

```ts
export class GanttDragEvent<T = unknown> {
  item: GanttItem<T>;
}
```

# GanttTableEvent

Passa le informazioni di tutte le colonne correnti quando il numero di colonne nella tabella di sinistra o trascina e rilascia per modificare la larghezza della colonna

```ts
export class GanttTableEvent {
  columns: QueryList<NgxGanttTableColumnComponent>;
}
```

# GanttLinkDragEvent

Quando si trascina un elemento di dati per stabilire una relazione di associazione con altri elementi di dati, trasferire le informazioni dell'elemento di dati corrente e dell'elemento di dati di destinazione

```ts
export class GanttLinkDragEvent<T = unknown> {
  source: GanttItem<T>;
  target?: GanttItem<T>;
}
```

# GanttLoadOnScrollEvent

Quando si scorre a sinistra ea destra, passare l'intervallo di tempo dopo lo scorrimento, che è comodo per l'utente per caricare i dati

```ts
export class GanttLoadOnScrollEvent {
  start: number;
  end: number;
}
```

# GanttLineClickEvent

Passa l'evento del mouse ei due elementi di dati quando si fa clic sulla riga associata di due elementi di dati associati

```ts
export class GanttLineClickEvent<T = unknown> {
  event: MouseEvent;
  source: GanttItem<T>;
  target: GanttItem<T>;
}
```

# GanttBarClickEvent

Passa le informazioni sull'elemento dati quando si fa clic sull'elemento dati

```ts
export class GanttBarClickEvent<T = unknown> {
  event: Event;
  item: GanttItem<T>;
}
```

# GanttSelectedEvent

Passa le informazioni sugli elementi di dati quando selezioni i dati della tabella, restituisci un singolo oggetto di dati in modalità di selezione singola e restituisci un array di elementi di dati in modalità di selezione multipla

```ts
export class GanttSelectedEvent<T = unknown> {
  event: Event;
  selectedValue: GanttItem<T> | GanttItem<T>[];
}
```

# GanttTableDragDroppedEvent

Evento che attiva l'evento quando si trascina un elemento di dati su un altro elemento di dati nella tabella

```ts
export class GanttTableDragDroppedEvent<T = unknown> {
  source: GanttItem<T>;
  sourceParent: GanttItem<T>;
  target: GanttItem<T>;
  targetParent: GanttItem<T>;
  dropPosition: GanttTableDropPosition;
}
```

# GanttTableDragStartedEvent

Evento successivo all'avvio del trascinamento del componente table

```ts
export class GanttTableDragStartedEvent<T = unknown> {
  source: GanttItem<T>;
  sourceParent: GanttItem<T>;
}
```

# GanttTableDragEndedEvent

Evento dopo il termine del trascinamento del componente table

```ts
export class GanttTableDragEndedEvent<T = unknown> {
  source: GanttItem<T>;
  sourceParent: GanttItem<T>;
}
```
