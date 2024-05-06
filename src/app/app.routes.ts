import { Routes } from '@angular/router';

/** Pages */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TestsPageComponent } from './pages/tests-page/tests-page.component';
import { TrafficRuleTestsPageComponent } from './pages/traffic-rule-tests-page/traffic-rule-tests-page.component';
import { SectionsPageComponent } from './pages/sections-page/sections-page.component';
import { TrafficRuleSectionsPageComponent } from './pages/traffic-rule-sections-page/traffic-rule-sections-page.component';
import { TrafficRuleParagraphsPageComponent } from './pages/traffic-rule-paragraphs-page/traffic-rule-paragraphs-page.component';
import { RoadSignSectionsPageComponent } from './pages/road-sign-sections-page/road-sign-sections-page.component';
import { RoadSignParagraphsPageComponent } from './pages/road-sign-paragraphs-page/road-sign-paragraphs-page.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
	{
		title: 'Головна',
		path: '',
		component: HomePageComponent,
	},
	{
		title: 'Правила дорожнього руху',
		path: 'sections/traffic-rules/:sectionId',
		component: TrafficRuleParagraphsPageComponent,
	},
	// TODO: Refactor children
	{
		title: 'Секції',
		path: 'sections',
		component: SectionsPageComponent,
    canActivate: [authGuard],
		children: [
			{
				title: 'Правила дорожнього руху',
				path: 'traffic-rules',
				component: TrafficRuleSectionsPageComponent,
				children: [
					// {
					// 	title: 'Правила дорожнього руху',
					// 	path: ':sectionId',
					// 	component: TrafficRuleParagraphsPageComponent,
					// },
				],
			},
			{
				title: 'Дорожні знаки',
				path: 'road-signs',
				component: RoadSignSectionsPageComponent,
				children: [
					{
						title: 'Дорожні знаки',
						path: ':sectionId',
						component: RoadSignParagraphsPageComponent,
					},
				],
			},
		],
	},
	{
		title: 'Тести',
		path: 'tests',
		component: TestsPageComponent,
		children: [
			{
				title: 'Тест. Правила дорожнього руху',
				path: 'traffic-rules',
				component: TrafficRuleTestsPageComponent,
			},
			{
				title: 'Тест. Дорожні знаки',
				path: 'road-signs',
				// component: RoadSignTestsPageComponent,
				redirectTo: 'tests',
			},
		],
	},
];
