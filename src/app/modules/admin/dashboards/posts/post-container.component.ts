import {Component, OnInit} from '@angular/core';
import {InteractionService} from './interaction.service';
import {Posts} from './posts';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-post-container',
    templateUrl: './post-container.component.html',
    styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

    public rows: Observable<Posts[]>;
    public columns = [
         {name: 'userId' }, {name: 'id'}, {name: 'title'}, {name: 'body'}
    ];

    constructor(private interactionService: InteractionService) {
    }

    ngOnInit(): void {
        // this.interactionService.getPosts().subscribe((data) => {
        //  this.rows = data;
        //     console.log(data);
        // });
        this.rows = this.interactionService.getPosts();


console.log('After Subscribe');
    }

}
