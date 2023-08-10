import { Component, OnInit } from '@angular/core';
import { DocItem } from '@docgeni/template';

@Component({
    selector: 'app-example-components',
    templateUrl: './components.component.html'
})
export class AppExampleComponentsComponent implements OnInit {
    menus: DocItem[] = [
        {
            id: 'basic',
            title: 'Basic',
            subtitle: '',
            path: 'basic'
        },
        {
            id: 'groups',
            title: 'Groups',
            subtitle: '',
            path: 'groups'
        },
        {
            id: 'virtual-scroll',
            title: 'Virtual Scroll',
            subtitle: '',
            path: 'virtual-scroll'
        },
        {
            id: 'custom-view',
            title: 'Custom View',
            subtitle: '',
            path: 'custom-view'
        },
        {
            id: 'advanced',
            title: 'Advanced',
            subtitle: '',
            path: 'advanced'
        }
    ];

    constructor() {}

    ngOnInit() {}
}
