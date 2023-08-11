---
title: Descrizione componenti
path: 'components'
order: 20
---

Il modulo `NgxGanttModule` esporta più componenti, i componenti di base sono `ngx-gantt`, `ngx-gantt-table`, `ngx-gantt-column` ed esporta anche alcuni componenti avanzati adatti per estensioni personalizzate `ngx-gantt- root`, `ngx-gantt-bar`, `ngx-gantt-range`.

# Descrizione Componenti

## ngx-gantt

`ngx-gantt` Il componente principale del diagramma di Gantt.

## ngx-gantt-table

`ngx-gantt-table` Si riferisce alla tabella sul lato sinistro del diagramma di Gantt，questo componente è utilizzato internamente dal componente `ngx-gantt`.

## ngx-gantt-column

`ngx-gantt-column` Si riferisce alla colonna nella tabella sul lato sinistro del diagramma di Gantt, questo componente è utilizzato internamente da `ngx-gantt-table`.

```html
<ngx-gantt>
  <ngx-gantt-table>
    <ngx-gantt-column> ... </ngx-gantt-column>
  </ngx-gantt-table>
</ngx-gantt>
```

# Estendi i componenti avanzati

## ngx-gantt-root

`ngx-gantt-root` è simile al componente `ngx-gantt` e i parametri sono fondamentalmente gli stessi. Sulla base del componente `ngx-gantt-root`, possiamo personalizzare il contenuto delle aree sinistra e destra, che vengono generalmente utilizzati per requisiti personalizzati Il diagramma di Gantt viene riconfezionato in base a questo componente.

# ngx-gantt-bar

Il componente `ngx-gantt-bar` si riferisce al grafico a barre orizzontale sul lato destro del diagramma di Gantt, che viene spesso utilizzato per rappresentare le attività nell'ambito del progetto. Questo componente non viene utilizzato se non ci sono altri requisiti speciali ed è solo per la visualizzazione. Questo componente può essere utilizzato all'interno del componente `ngx-gantt-root` per soddisfare alcuni scenari di diagrammi di Gantt personalizzati.

# ngx-gantt-range

Il componente `ngx-gantt-range` è simile a `ngx-gantt-bar`, la differenza è che `ngx-gantt-bar` è un grafico a barre e il componente `ngx-gantt-range` indica l'intervallo di tempo.

```html
<ngx-gantt-root>
  <ng-template #sideTemplate></ng-template>
  <ng-template #mainTemplate>
    <ngx-gantt-bar></ngx-gantt-bar>
  </ng-template>
</ngx-gantt-root>
```
