import mongoose, { Schema, Model, Document, Types } from "mongoose";

export interface IMessage extends Document {
  user: Schema.Types.ObjectId;
  directConvo: Schema.Types.ObjectId;
  timestamp: Schema.Types.Date;
  content: string;
}

const MessageSchema: Schema<IMessage> = new Schema<IMessage>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  directConvo: {
    type: Schema.Types.ObjectId,
    ref: "DirectConvo",
    required: true,
  },
  timestamp: {
    type: Schema.Types.Date,
    default: Date.now,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    minlength: 1,
    required: true,
  },
});

export const Message: Model<IMessage> = mongoose.model(
  "Message",
  MessageSchema
);
