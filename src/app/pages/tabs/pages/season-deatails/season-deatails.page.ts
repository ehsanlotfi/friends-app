import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
	AfterViewInit,
	Component,
	ElementRef,
	Inject,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonList, isPlatform } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
import * as _mod from 'src/app/models';
import { NavController } from '@ionic/angular';
@Component({
	selector: 'app-season-deatails',
	templateUrl: './season-deatails.page.html',
	styleUrls: ['./season-deatails.page.scss'],
})
export class SeasonDeatailsPage implements OnInit, AfterViewInit {
	title: string = "";
	seasonId:number;
	seasons: _mod.Season;
	@ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
	listElements = [];
	activeCategory = 0;
	@ViewChild(IonContent) content: IonContent;
	categorySlidesVisible = false;
	constructor(
		@Inject(DOCUMENT) private document: Document,
		private globalService: GlobalService,
		private route: ActivatedRoute,
		private nav: NavController,) { }

	ngOnInit() {
		this.seasonId = +this.route.snapshot.paramMap.get('seasonId');
		this.seasons = this.globalService.getAllEpisode(this.seasonId!)[0];
		this.title = `فصل ${this.seasons.season}`;
		// Set the header position for sticky slides
		const headerHeight = isPlatform('ios') ? 44 : 56;
		this.document.documentElement.style.setProperty(
			'--header-position',
			`calc(env(safe-area-inset-top) + ${headerHeight}px)`
		);
	}
	forward() {
		this.nav.navigateForward(['/app',(this.seasonId+1),'detail']);
	}

	onScroll(ev) {
		const offset = ev.detail.scrollTop;
		this.categorySlidesVisible = offset > 500;

		for (let i = 0; i < this.listElements.length; i++) {
			const item = this.listElements[i].nativeElement;
			if (this.isElementInViewport(item)) {
				this.activeCategory = i;

				break;
			}
		}
	}

	isElementInViewport(el) {
		const rect = el.getBoundingClientRect();

		return (
			rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
	}
	// Get all list viewchildren when ready
	ngAfterViewInit() {
		this.lists.changes.subscribe((_) => {
			this.listElements = this.lists.toArray();
		});
	}
}
