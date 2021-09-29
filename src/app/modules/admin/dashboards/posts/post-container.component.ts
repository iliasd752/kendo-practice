import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {InteractionService} from './interaction.service';
import {Posts} from './posts';
import {Observable} from 'rxjs';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {result} from 'lodash';

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
    public columnMode = ColumnMode;
    totalLength: any;
    page: number = 1;

    constructor(private interactionService: InteractionService) {
    }



    ngOnInit(): void {
        // this.interactionService.getPosts().subscribe((data) => {
        //  this.rows = data;
        //     console.log(data);
        // });
        this.rows = this.interactionService.getPosts();
        this.totalLength = result.length;


    console.log('After Subscribe');
    }

}
