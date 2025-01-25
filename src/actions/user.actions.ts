'use server'
import connectDB from "@/database/db"
import { handleError } from "@/lib/utils";
import User from "@/models/user.model";
import {CreateUserParams, UpdateUserParams} from "@/types/index"

export const createUser=async(user:CreateUserParams)=>{
    try {
        await connectDB();
        const newUser=await User.create(user);
        return JSON.parse(JSON.stringify(newUser))

    } catch (error) {
        handleError(error);
    }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
    try {
      await connectDB();
  
      const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })
  
      if (!updatedUser) throw new Error('User update failed')
      return JSON.parse(JSON.stringify(updatedUser))
    } catch (error) {
      handleError(error)
    }
  }
  