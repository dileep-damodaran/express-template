

export class AuthenticatinResult{

    private _authenticated : boolean;
    private _accessToken : string;
    private refreshToken : string;

    constructor(authenticated : boolean,accessToken : string,refreshToken : string) {
        this._authenticated = authenticated;
        this._accessToken = accessToken;
        this.refreshToken = refreshToken;

    }
}