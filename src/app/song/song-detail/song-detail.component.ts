import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchmap';

import { Song } from '../song';
import { SongService } from '../song.service';

/**
 * A component for managing a song.
 * 
 * @export
 * @class SongDetailComponent
 */
@Component({
	selector: '<song-detail></song-detail>',
	templateUrl: './song-detail.component.html',
	styleUrls: [ 
		'./song-detail.component.css',
		'./btn-group-justified.scss' ]
})
export class SongDetailComponent {
	@Input()
	song: Song;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private songService: SongService
	) {}

	ngOnInit(): void {
		try {
 			this.route.params
 			.switchMap((params: Params) => this.songService.get(params['id']))
 			.subscribe(song => this.song = song)
 		} catch(e) {
 			this.song = new Song('Unknown Artist', 'Untitled');	
 		}
	}

	save(): void {
		this.songService.save(this.song);
		this.goBack();
	}

	delete(): void {
		this.songService.delete(this.song);
		this.goBack();
	}

	goBack(): void {
		this.router.navigateByUrl('/library');
	}

	increaseTempo(): void {
		this.song.tempo++;
	}

	decreaseTempo(): void {
		this.song.tempo--;
	}
}