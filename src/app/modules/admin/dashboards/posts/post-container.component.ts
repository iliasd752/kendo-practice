import {Component, OnInit} from '@angular/core';
import {InteractionService} from './interaction.service';
import {Posts} from './posts';

@Component({
    selector: 'app-post-container',
    templateUrl: './post-container.component.html',
    styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

    public rows: Posts[];
    public columns = [
         {id: 'id'}
    ];

    constructor(private interactionService: InteractionService) {
    }

    ngOnInit(): void {
        this.interactionService.getPosts().subscribe((data) => {
         this.rows = data;
            console.log(data);
        });

    }

}
