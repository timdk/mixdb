import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Song } from '../song';
import { SongService } from '../song.service';

/**
 * A component for managing a song.
 * 
 * @export
 * @class SongDetailComponent
 */
@Component({
	selector: 'song-detail',
	templateUrl: './song-detail.component.html',
	styleUrls: [ 
		'./song-detail.component.css',
		'./btn-group-justified.scss' ]
})
export class SongDetailComponent {
	@Input()
	song: Song;

	/**
	 * Creates an instance of SongDetailComponent.
	 * 
	 * @param {ActivatedRoute} route
	 * @param {Router} router
	 * @param {SongService} songService
	 * 
	 * @memberOf SongDetailComponent
	 */
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private songService: SongService
	) {}

	/**
	 * Load the ID from the route and then load that song's details or 
	 * create a new song if no ID is supplied.
	 * @memberOf SongDetailComponent
	 */
	ngOnInit(): void {
		let id = this.route.snapshot.params['id'];
		if (!id) {
			this.song = new Song();
		} else {
			this.songService.get(id)
			.then(song => this.song = song);
		}
	}

	/**
	 * Save this song.
	 * @memberOf SongDetailComponent
	 */
	save(): void {
		this.songService.save(this.song);
		this.goBack();
	}

	/**
	 * Delete this song.
	 * @memberOf SongDetailComponent
	 */
	delete(): void {
		this.songService.delete(this.song);
		this.goBack();
	}

	/**
	 * Return to the library.
	 * @memberOf SongDetailComponent
	 */
	goBack(): void {
		this.router.navigateByUrl('/library');
	}


	/**
	 * Increment the song's tempo by 1.
	 * @memberOf SongDetailComponent
	 */
	increaseTempo(): void {
		this.song.tempo++;
	}

	/**
	 * Decrement the song's tempo by 1.
	 * @memberOf SongDetailComponent
	 */
	decreaseTempo(): void {
		this.song.tempo--;
	}
}