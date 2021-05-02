import router from "../common";

class LibraryDataService {

    getBooks () {
        return router.get (`/books`)
    }
}

export default new LibraryDataService()