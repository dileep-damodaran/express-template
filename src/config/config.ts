
export class Config{

    public static get port(): number {
        console.log('inside')
        return parseInt(process.env["PORT"]);
    }

    public static get access_token_secret_key(): string {
        return process.env.ACCESSTOKEN_SECRETKEY;
    }

    public static get refresh_token_secret_key(): string {
        return process.env.REFRESHTOKEN_SECRETKEY;
    }

    public static get access_token_expiry_in_minutes(): number {
        return parseInt(process.env.ACCESSTOKEN_EXPIRY_IN_MINUTES);
    }

    public static get refresh_token_expiry_in_hours(): number {
        return parseInt(process.env.REFRESHTOKEN_EXPIRY_IN_HOURS);
    }

    public static get issuer():string{
        return process.env.ISSUER;
    }
}