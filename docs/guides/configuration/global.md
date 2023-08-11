---
category: config
title: Configurazione globale
subtitle:
---

`ngx-gantt` Fornisce una configurazione globale iniettabile `GANTT_GLOBAL_CONFIG` ，Gli utenti possono inserire il file `Module` o `Component` o iniettare una configurazione conforme personalizzata per modificare la configurazione globale.

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

`GANTT_GLOBAL_CONFIG` Il formato è il seguente：

```javascript
export interface GanttGlobalConfig {
  dateFormat?: GanttDateFormat;
}
```

| Name       | Type              | Description   |
| ---------- | ----------------- | ------------- |
| dateFormat | `GanttDateFormat` | Giorno formato data |
