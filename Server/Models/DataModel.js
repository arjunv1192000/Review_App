import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    usageFrequency: {
        type: String,
        require: true,

    },
    mainAppGoals: {
        type:[String] ,
        require: true,

    },
    userExperienceRating: {
        type: String,
        require: true,
    },
    improvements:{
        type:String,
        require: true,
    },
    dateOfBirth:{
        type:Date,
        require: true,
    }


})
const reviewdata = model("reviewdatas", reviewSchema);
export default reviewdata;