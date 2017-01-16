import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';

import { MixTracklistComponent } from './mix-tracklist/mix-tracklist.component';
import { Mix } from '../mix';
import { MixService } from '../mix.service';

import { Song } from '../../song/song';

/**
 * Component for creating and managing mixes.
 * 
 * @export
 * @class MixDetailComponent
 */
@Component({
	selector: 'mix-detail',
	templateUrl: './mix-detail.component.html',
	styleUrls:  ['./mix-detail.component.css' ]
})
export class MixDetailComponent implements OnInit {
	mix: Mix;
	private editingTitle: boolean = false;
	private new: boolean = false;	// Is this a newly created mix?
	private dirty: boolean = false;	// Has unsaved changes

	
	/**
	 * Creates an instance of MixDetailComponent.
	 * 
	 * @param {ActivatedRoute} route
	 * @param {Router} router
	 * @param {MixService} mixService
	 * 
	 * @memberOf MixDetailComponent
	 */
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private mixService: MixService
	) {}

	/** Load the from the ID on the route or create a new one */
	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		//console.log('MixDetailComponent: Mix id: ', id);
		if (!id) {
			this.mix = new Mix();
			this.new = true;
			//this.mix.tracklist.push(new Song());
		} else {
			this.mixService.getMix(id)
			.then(mix => this.mix = mix);
		}
	}

	/** Save the mix */
	save(): void {
		this.mixService.saveMix(this.mix)
		.then(mix => {
			this.new = false;
			this.dirty = false;
			console.log('MixDetailComponent: Saved mix: ', mix)
		});
	}

	/** Return to the mixes component */
	close(): void {
		this.router.navigate(['/mixes']);
	}

	/** Delete this mix and return to the mixes componenet */
	delete(): void {
		this.mixService.deleteMix(this.mix);
		this.close();
	}

	/**
	 * Append a song to the tracklist
	 * @param {Song} track
	 */
	appendTrack(track: Song) {
		this.mix.tracklist.push(track);
		this.dirty = true;
	}
} 