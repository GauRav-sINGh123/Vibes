import {Schema,model, models,Document} from 'mongoose'

export interface Event extends Document{
    _id:string;
    title: string;
    description: string;
    location: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category?: {_id: string; name: string};
    organizer?: {_id: string; firstName: string; lastName: string};
}

const eventSchema:Schema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String
        ,required:true
    },
    createdAt:{
        type:Date,
        required:true
    },
    imageUrl:{
        type:String
        ,required:true
    },
    startDateTime:{
        type:Date,
        default:Date.now()
    },
    endDateTime:{
        type:Date,
        default:Date.now()
    },
    price:{
        type:String
    },
    isFree:{
        type:Boolean,
        default:false
     },
     url:{
        type:String
     },
     category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
     },
     organizer:{
        type:Schema.Types.ObjectId,
        ref:"User"
     }
    
})

const Event=models.Event||model('Event',eventSchema)

export default Event