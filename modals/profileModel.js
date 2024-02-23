import { Schema, model, models } from "mongoose";

const schema = new Schema({
  name: String,
  url: String,
});

const ProfileModel = models.Profile || model("Profile", schema);

export default ProfileModel;
