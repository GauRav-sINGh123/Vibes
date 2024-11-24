'use server'
import connectDB from "@/database/db"
import User from "@/models/user.model";
import {CreateUserParams} from "@/types/index"

export const createUser=async(user:CreateUserParams)=>{
    try {
        await connectDB();
        const newUser=await User.create(user);
        return JSON.parse(JSON.stringify(newUser))

    } catch (error) {
        
    }
}
