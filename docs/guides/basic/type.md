---
title: Tipi di dati
path: 'data-type'
order: 30
---

Il componente `ngx-gantt` accetta due tipi di input di dati `GanttItem` e `GanttGroup`. `GanttItem` si riferisce al formato dell'elemento di dati del diagramma di Gantt, `GanttGroup` si riferisce al formato di dati di gruppo e i tipi specifici sono definiti come segue:

# GanttItem

```ts
export interface GanttItem<T = unknown> {
  id: string;
  title: string;
  start?: number;
  end?: number;
  group_id?: string;
  links?: string[];
  draggable?: boolean;
  linkable?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  children?: GanttItem[];
  color?: string;
  barStyle?: Partial<CSSStyleDeclaration>;
  origin?: T;
  type?: GanttItemType;
  progress?: number;
}
```

| Name       | Type                           | Default | Description                            |
| ---------- | ------------------------------ | ------- | -------------------------------------- |
| id         | `string`                       | `-`     | Identificativo univoco                               |
| title      | `string`                       | `-`     | Titolo                                   |
| start      | `number`                       | `-`     | Data inizio (10 timestamp)              |
| end        | `number`                       | `-`     | Data fine(10 timestamp)                 |
| group_id   | `string`                       | `-`     | Id gruppo                          |
| links      | `string[]`                     | `-`     | Una raccolta di `id` di `GanttItem` con associazioni   |
| draggable  | `boolean`                      | `-`     | Imposta drag and drop                         |
| linkable   | `boolean`                      | `-`     | Imposta se si possono linkare dati                  |
| expandable | `boolean`                      | `-`     | Imposta se espandere/comprimere                   |
| expanded   | `boolean`                      | `false` | Imposta se espanso o no                      |
| children   | `GanttItem[]`                  | `-`     | Imposta i dati figlio                             |
| color      | `string`                       | `-`     | Colore                               |
| barStyle   | `Partial<CSSStyleDeclaration>` | `-`     | Stile barra                               |
| origin     | `T`                            | `-`     | Origine dati                           |
| type       | `GanttItemType`                | `-`     | Imposta la modalità di visualizzazione dei dati (visualizzazione a intervalli e visualizzazione normale) |
| progress   | `number`                       | `-`     | Imposta l'avanzamento                               |

# GanttGroup

```ts
export interface GanttGroup<T = unknown> {
  id: string;
  title: string;
  expanded?: boolean;
  origin?: T;
  class?: string;
}
```

| Name     | Type      | Default | Description       |
| -------- | --------- | ------- | ----------------- |
| id       | `string`  | `-`     | Identificativo univoco         |
| title    | `string`  | `-`     | Titolo              |
| expanded | `boolean` | `true`  | Imposta se espanso o no  |
| origin   | `T`       | `-`     | Origine dati      |
| class    | `string`  | `-`     | CSS `class`       |
