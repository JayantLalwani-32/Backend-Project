import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
    {
        video: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        },
        tweet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        },
        comment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        },
        likedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true }
)

export const Like = mongoose.model("Like", likeSchema);