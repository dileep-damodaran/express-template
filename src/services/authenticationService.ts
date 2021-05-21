import { Config } from "../config/config";
import { AuthenticationResult } from "../helpers/authenticationResult";
import { IUserDocument } from "../model/user/userDocument";
import { UserService } from "./userService";
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");


export class AuthenticationService{

    public static async authenticate(userName:string,password:string):Promise<AuthenticationResult>{

        return new Promise(async(resolve,reject)=>{

            let authResult;

            const user : IUserDocument = await UserService.getByUserName(userName);

            if(!user)
            {
                authResult = new AuthenticationResult(false, null, null,'User not found.');
                return resolve(authResult);
            }

            else if(user.is_deleted){
                authResult = new AuthenticationResult(false,null, null, 'User deleted.');
                return resolve(authResult);
            }

            else if(!user.is_active){
                authResult = new AuthenticationResult(false, null, null, 'User is disabled.');
                return resolve(authResult);
            }
            else{
    
                const isPasswordMatch : boolean = bcrypt.compareSync(password, user.password);
    
                if(!isPasswordMatch){
                    authResult = new AuthenticationResult(false, null, null, 'Invalid password.');
                    return resolve(authResult);
                }
                else{
                    const refreshToken:string = AuthenticationService.generateRefreshToken(user);
                    const accessToken: string = AuthenticationService.generateAccessToken(user);
                    authResult = new AuthenticationResult(true, refreshToken,accessToken, null);
            
                    return resolve(authResult);
                }
            }
        });
    }

    private static generateRefreshToken(user: IUserDocument): string {

        return JWT.sign({
            uid: user._id,
            uname: user.user_name,
        }, Config.refresh_token_secret_key, {
            issuer: Config.issuer,
            expiresIn: `${Config.refresh_token_expiry_in_hours}h`
        });
    }

    private static generateAccessToken(user: IUserDocument): string {

        return JWT.sign({
            uid: user._id,
            uname: user.user_name,
            permissions: []
        }, Config.access_token_secret_key, {
            issuer: Config.issuer,
            expiresIn: `${Config.access_token_expiry_in_minutes}m`
        });

    }
}