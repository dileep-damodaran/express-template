import { IUserDocument } from "../model/user/userDocument";
import { User } from "../model/user/userDocumentSchema";


export class UserService {
    
    public static create(user:IUserDocument):IUserDocument{

        return user;
    }

    public static async getById(id:string):Promise<IUserDocument>{

        return new Promise(async(resolve,reject)=>{

            const user = await User.findById(id);

            return resolve(user);
        });
    }

    public static async getByUserName(userName:string):Promise<IUserDocument>{

        return new Promise(async(resolve,reject)=>{

            const user = await User.findOne({ user_name: userName });

            return resolve(user);
        });
    }
}