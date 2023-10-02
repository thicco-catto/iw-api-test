import { MongoClient, ServerApiVersion } from "mongodb";


const uri = "mongodb+srv://cristobal:sanchoelmejor@practica.a1ieyro.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const clientPromise = client.connect();

export default async function GetDatabase() {
    return await clientPromise;
}