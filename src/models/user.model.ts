import {Model, Schema, model, models} from "mongoose";

export interface User extends Document{
    clerkId:string,
    email:string,
    username:string,
    firstName:string,
    lastName:string,
    image:string
}

const userSchema:Schema<User>=new Schema({
    clerkId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const User=(models.User as Model<User>) || model<User>('User',userSchema)

export default User