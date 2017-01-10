import { Component } from '@angular/core'
import { IndexedDBService, IndexedDBStorage } from '../indexeddb.service';


/**
 * A component that contains miscellaneous tools to assist with debugging and development.
 * 
 * @export
 * @class DevTools
 */
@Component({
	selector: 'dev-tools',
	template: `
		<div id="dev-toolbar">
			<button (click)="clearDatabase()">Clear Database</button>
		</div>
	`,
	styles: [ 'div#dev-toolbar { position: absolute; bottom: 0; padding: 10px; }' ]
})
export class DevToolsComponent {
	private db: IndexedDBStorage;

	constructor(private indexedDbService: IndexedDBService) {
		this.db = indexedDbService.getDatabase();
	}

	/** Clear the the IndexedDB datasource. */
	clearDatabase() {
		this.db.songs.clear()
		.then(this.db.librarySongs.clear)
		.then(this.db.libraries.clear)
		.then(() => console.log('Database wiped'));
	}

}