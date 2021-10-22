import mongoose, { Schema, Model, Document, Types } from "mongoose";

export interface IParticipant {
  user: Schema.Types.ObjectId;
  lastViewed: Date;
}

export interface IDirectConvo extends Document {
  participants: [IParticipant];
  messages: [Schema.Types.ObjectId];
}

const DirectConvoSchema: Schema<IDirectConvo> = new Schema<IDirectConvo>({
  participants: [
    {
      user: {
        type: [Schema.Types.ObjectId],
        ref: "User",
        required: true,
      },
      lastViewed: {
        type: Date,
        required: true,
        default: new Date(0),
      },
    },
  ],
  messages: {
    type: [Schema.Types.ObjectId],
    ref: "Message",
  },
});

export const DirectConvo: Model<IDirectConvo> = mongoose.model(
  "DirectConvo",
  DirectConvoSchema
);
