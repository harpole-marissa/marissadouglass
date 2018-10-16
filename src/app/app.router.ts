import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageIntroComponent } from './homepage-intro/homepage-intro.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { PostsModule } from './posts/posts.module';

export const router: Routes = [
    {
        path: '',
        component: HomepageIntroComponent,
        pathMatch: "full"
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'blog',
        component: PostsModule
    },
    {
        path: 'blog',
        loadChildren: './posts/post.module#PostModule'
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);