import EmailModel from "@/modals/mailModel";
import connectMongo from "@/utilis/connectMongo";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectMongo();
    EmailModel.create(data);

    return Response.json({ message: "success" });
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
