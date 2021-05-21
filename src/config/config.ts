
const DEFAULT_PORT = '2383';

export class Config{

    public static get port(): number {
        console.log('inside')
        return parseInt(process.env["PORT"]??DEFAULT_PORT);
    }
}