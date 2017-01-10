import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
	template: `
		<div *ngIf="song">
		<h2>{{song.artist}} - {{song.title}}</h2>
		<div>
			<label>ID: </label>{{song.id}}
		</div>
		<div>
			<label>Artist: </label><input [(ngModel)]="song.artist" placeholder="artist">
		</div>
		<div>	
			<label>Title: </label><input [(ngModel)]="song.title" placeholder="title">
		</div>
		<div>
			<label>BPM: </label><input [(ngModel)]="song.tempo">
		</div>

		<button (click)="save()">Save</button><button (click)="goBack()">Cancel</button>
		</div>
	`,
	styles: []
})
export class SongDetailComponent {
	@Input()
	song: Song;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private songService: SongService
	) {}

	ngOnInit(): void {
		this.route.params
		.switchMap((params: Params) => this.songService.get(params['id']))
		.subscribe(song => this.song = song);
	}

	save(): void {
		this.songService.save(this.song);
		this.goBack();
	}

	goBack(): void {
		this.location.back();
	}
}