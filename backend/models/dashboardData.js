import mongoose from 'mongoose';

const graphSchema=mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    owner:{
        type:String,
        required:true,
    },
    publishYear: {
        type: Number,
        required:true,
    },
},
{
    timestamps:true,
}
);

export const graph = mongoose.model('Kitten', graphSchema);