import router from "../common";

class AuthDataService {
    registerUser (data) {
        return router.post("/api/signup", data)
    }

    loginUser (data) {
        return router.post("/api/signin", data)
    }

    logoutUser () {
        return router.post("/api/logout")
    }
}

export default new AuthDataService()