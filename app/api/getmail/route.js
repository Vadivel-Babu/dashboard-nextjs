import EmailModel from "../../../modals/mailModel";
import connectMongo from "../../../utilis/connectMongo";
export async function GET() {
  try {
    await connectMongo();
    const getData = await EmailModel.find({});
    return Response.json(getData);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
