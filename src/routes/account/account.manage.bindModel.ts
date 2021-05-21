const Joi = require('joi');

export class AccountBindingSchema{

    public static login = Joi.object().keys({
            user_name: Joi.string().required(),
            password: Joi.string().required()
        });
    

    public static token = Joi.object().keys({
            refresh_token: Joi.string().required()
    });
    
}