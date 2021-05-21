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

    private static generateRefreshToken(user:any):string{

        const secretKey :string = '456';

        return JWT.sign({
            uid: '123',
            uname: 'dileep'
        }, secretKey, {
            issuer: 'org.com',
            expiresIn: '1000d'
        });
    }

    private static generateAccessToken(user:any):string{

        const secretKey :string = '456';

        return JWT.sign({
            uid: '123',
            uname: 'dileep'
        }, secretKey, {
            issuer: 'org.com',
            expiresIn: '5m'
        });

    }
}