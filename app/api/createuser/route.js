import ProfileModel from "@/modals/profileModel";
import connectMongo from "@/utilis/connectMongo";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);
    await connectMongo();
    ProfileModel.create(data);

    return Response.json({ message: "success" });
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
