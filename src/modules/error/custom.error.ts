export class CustomError extends Error {
    constructor(
        public readonly message: string
    ){
        super(message)
    }

    static custom( message: string) {
        return new CustomError(message)
    }

    static unAuthorized( message: string) {
        return new CustomError(message)
    }

    static internalServer( message: string = "Internal server error") {
        return new CustomError(message)
    }
}