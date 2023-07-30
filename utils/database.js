import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", false);

    if (isConnected) {
        console.log("Connected to database...");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "all_prompt",
        });

        isConnected = true;
        console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}
};