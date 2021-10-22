import mongoose, { Schema, Model, Document, Types } from "mongoose";

enum OnlineStatus {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}

export interface IUser extends Document {
  username: string;
  onlineStatus: OnlineStatus;
  directConvos: [Schema.Types.ObjectId];
}

const UserSchema: Schema<IUser> = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  onlineStatus: {
    type: String,
    required: true,
    enum: OnlineStatus,
    default: OnlineStatus.OFFLINE,
  },
  directConvos: {
    type: [Schema.Types.ObjectId],
    ref: "DirectConvo",
  },
});

export const User: Model<IUser> = mongoose.model("User", UserSchema);
