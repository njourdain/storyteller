import { Routes } from "@angular/router";
import { StoryBoardComponent } from "../story-board/story-board.component";
import { AppComponent } from "../app.component";

export const routeConfig: Routes = [
    { path: 'story-board', component: StoryBoardComponent },
    { path: '', component: AppComponent }
];
export default routeConfig;