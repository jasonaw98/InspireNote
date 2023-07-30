import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();
    try {
        await connectToDB();
        const newPrompt = new Prompt({creator: userId, prompt, tag })
        await newPrompt.save();
        console.log("Success")
        return new Response(JSON.stringify(newPrompt), {status: 201});
    } catch (err) {
        console.log(err);
        return new Response("Failed to create new prompt", {status: 500});
    }
}