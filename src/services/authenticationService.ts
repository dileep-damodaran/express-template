import { Config } from "../config/config";
import { AuthenticatinResult } from "../helpers/authenticationResult";
const JWT = require("jsonwebtoken");


export class AuthenticationService{

    public static authenticate(user_name:string,password:string):AuthenticatinResult{

        const user: any = '';
        const refreshToken:string = AuthenticationService.generateRefreshToken(user);
        const accessToken: string = AuthenticationService.generateAccessToken(user);
        const authResult = new AuthenticatinResult(true,accessToken,refreshToken);

        return authResult;
    }

    private static generateRefreshToken(user: any): string {

        return JWT.sign({
            uid: '123',
            uname: 'dileep'
        }, Config.refresh_token_secret_key, {
            issuer: Config.issuer,
            expiresIn: `${Config.refresh_token_expiry_in_hours}h`
        });
    }

    private static generateAccessToken(user:any):string{

        return JWT.sign({
            uid: '123',
            uname: 'dileep'
        }, Config.access_token_secret_key, {
            issuer: Config.issuer,
            expiresIn: `${Config.access_token_expiry_in_minutes}m`
        });

    }
}