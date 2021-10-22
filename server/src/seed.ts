import { User } from "./models/User.model";
import { DirectConvo } from "./models/DirectConvo.model";

require("dotenv").config();
require("./initDB")();
const seed = async () => {
  try {
    await User.collection.drop();
    const usernames = ["Anthony", "Britney", "Charlie"];
    const defaultPreMsg = "Hello. I am ";

    //Create Users
    let users: InstanceType<typeof User>[] = [];
    for (const username of usernames) {
      const user = new User({ username, onlineStatus: "OFFLINE" });
      await user.save();
      users.push(user);
    }

    //Create Direct Convos
    let usersCache = users;
    let remainingPartnersNum = usersCache.length - 1;
  } catch (err) {
    console.log(err);
  }
};
seed();
