const {Schema, model, Types} = require("mongoose");
const dateFormate = required("../utils/dateFormate");

const reactionSchema = new Schema(
    {
        reactionId: {
            type:Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type:String,
            required: true,
            maxlength:280
        },
        Username: {
            type:String,
            required: true,
        },
        createdAt: {
            type:Date,
            default: Date.now,
            get: (createdAtVal) => dateFormate(createdAtVal),
        },
    },
    {
        tojson:{
            getters: true,
        },
    },
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type:String,
            required: true,
            maxlength: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormate(createdAtVal),
        },
        Username: {
            type:String,
            required:true,
        },
        reactions: [reactionSchema],
    },
    {
        tojson: {
            virtual: true,
            getters: true,
        },
        id:false
    }
);

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports=Thought;
