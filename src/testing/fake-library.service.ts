
import { Library } from '../app/library';

export class FakeLibraryService {

    getLibrary() {
        return Promise.resolve(new Library());
    }
} 