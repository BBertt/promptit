import mongoose, { Schema } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        requrired: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        requrired: [true, 'Tag is required.'],
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;