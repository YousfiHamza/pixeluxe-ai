import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    connection: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.connection) return cached.connection;

  if (!MONGODB_URI) throw new Error('Missing MONGODB_URI');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: 'Pixeluxe',
      bufferCommands: false,
    });

  cached.connection = await cached.promise;

  return cached.connection;
};
