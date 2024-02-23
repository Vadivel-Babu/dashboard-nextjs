import ProfileModel from "@/modals/profileModel";
import connectMongo from "@/utilis/connectMongo";

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    await connectMongo();
    ProfileModel.updateOne({ _id: params.id }, { $set: { data } });

    // console.log(data);

    return Response.json({ message: "success" });
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
