'use server'
import connectDB from "@/database/db"
import { handleError } from "@/lib/utils";
import User from "@/models/user.model";
import {CreateUserParams, UpdateUserParams} from "@/types/index"
import { revalidatePath } from "next/cache";

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


  export async function deleteUser(clerkId: string) {
    try {
      await connectDB();
      // Find user to delete
      const userToDelete = await User.findOne({ clerkId })
  
      if (!userToDelete) {
        throw new Error('User not found')
      }
    
      // Delete user
      const deletedUser = await User.findByIdAndDelete(userToDelete._id)
      revalidatePath('/')
  
      return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
      handleError(error)
    }
  }