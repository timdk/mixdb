
import { Library } from '../app/library/library';

export class FakeLibraryService {

    getLibrary() {
        return Promise.resolve(new Library());
    }
} 