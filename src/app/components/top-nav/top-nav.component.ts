import { Component, OnInit } from '@angular/core';

@Component(
    {
        selector:    'top-nav',
        templateUrl: './top-nav.component.html',
        styleUrls:   ['./top-nav.component.scss']
    }
)
export class TopNavComponent implements OnInit {
    time: string;

    sideNavElement = [
        {
            name: 'Element 1',
            ref:  'https://google.com'
        },
        {
            name: 'Element 2',
            ref:  'https://youtube.com'
        },
        {
            name: 'Element 3',
            ref:  'https://twitter.com'
        }
    ]

    constructor() {
    }

    ngOnInit(): void {
        //Clock !
        setInterval(() => {
            this.time = new Date().toLocaleTimeString();
        }, 1000);
    }
}
