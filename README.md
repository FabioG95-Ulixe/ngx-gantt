# ngx-gantt

[![npm (scoped)](https://img.shields.io/npm/v/@worktile/gantt?style=flat)](https://www.npmjs.com/package/@ulixe23/gantt)
[![npm](https://img.shields.io/npm/dm/@worktile/gantt)](https://www.npmjs.com/package/@ulixe23/gantt)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@worktile/gantt)

[coveralls-image]: https://coveralls.io/repos/github/worktile/ngx-gantt/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/worktile/ngx-gantt

A modern and powerful gantt component for Angular

## Installation

```bash
$ npm i @ulixe23/gantt html2canvas --save
# or
$ yarn add @ulixe23/gantt html2canvas
```

## Demo

[Try out our live demo](http://gantt.ngnice.com/)

## Usage

### 1. Import the NgxGanttModule to use into your app.module.ts

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

### 2. Import style file in angular.json or import style in your style.scss

```json
{
  "styles": ["node_modules/@ulixe23/gantt/styles/index.scss"]
}
```

```scss
@use '@ulixe23/gantt/styles/index.scss';
```

### 3. Using component

component.html

```html
<ngx-gantt #gantt [items]="items">
  <ngx-gantt-table>
    <ngx-gantt-column name="Title" width="300px">
      <ng-template #cell let-item="item"> {{ item.title }} </ng-template>
    </ngx-gantt-column>
  </ngx-gantt-table>
</ngx-gantt>
```

component.ts

```javascript
@Component({
  selector: 'app-gantt-example',
  templateUrl: './gantt.component.html'
})
export class AppGanttExampleComponent {
  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197 },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597 }
  ];

  constructor() {}
}
```

See [Getting Started](http://gantt.ngnice.com/guides/getting-started) for more details.

## Development

```bash
$ git clone git@github.com:ulixe23/ngx-gantt.git
$ cd ngx-gantt
$ npm ci
$ npm run start
```

## Roadmap

- [ ] virtual scrolling

## LICENSE

[MIT License](https://github.com/worktile/ngx-gantt/blob/master/LICENSE)

TEST
