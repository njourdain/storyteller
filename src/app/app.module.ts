import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryBoardComponent } from './story-board/story-board.component';
import { AppComponent } from './app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [StoryBoardComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
