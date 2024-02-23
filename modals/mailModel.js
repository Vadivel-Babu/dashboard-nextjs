import { Schema, model, models } from "mongoose";

const schema = new Schema({
  email: String,
  message: String,
});

const EmailModel = models.Mail || model("Mail", schema);

export default EmailModel;
