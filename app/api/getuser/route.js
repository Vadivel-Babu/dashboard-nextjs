import ProfileModel from "../../../modals/profileModel";
import connectMongo from "../../../utilis/connectMongo";
export async function GET() {
  try {
    await connectMongo();
    const getData = await ProfileModel.find({});
    return Response.json(getData);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
