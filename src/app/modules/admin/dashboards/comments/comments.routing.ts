import {Route} from '@angular/router';
import {CommentPageComponent} from './comment-page/comment-page.component';


export const commentsRoutes: Route[] = [
    {
        path     : '',
        component: CommentPageComponent
    }
];
