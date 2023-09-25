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
import { ISerials } from 'src/app/models/serials.model';
import { SerialsService } from 'src/app/service/serials.service';

@Component({
	selector: 'app-serial-details',
	templateUrl: './serial-details.page.html',
	styleUrls: ['./serial-details.page.scss'],
})
export class SerialDetailsPage implements OnInit {
	data: ISerials;
	pId:string;
	activeCategory = 0;
	@ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
	listElements = [];

	@ViewChild(IonContent) content: IonContent;
	categorySlidesVisible = false;
	constructor(@Inject(DOCUMENT) private document: Document,
		private route: ActivatedRoute,
		private service: SerialsService,
	) { }

	ngOnInit() {

		this.route.params.subscribe(params => {

			this.pId = params['id']; // (+) converts string 'id' to a number;
			this.data = this.service.getSerialsById(this.pId)

		});
		// Set the header position for sticky slides
		const headerHeight = isPlatform('ios') ? 44 : 56;
		this.document.documentElement.style.setProperty(
			'--header-position',
			`calc(env(safe-area-inset-top) + ${headerHeight}px)`
		);
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
