import EmailModel from "@/modals/mailModel";
import connectMongo from "@/utilis/connectMongo";

export async function DELETE(req, { params }) {
  try {
    console.log(params);
    await connectMongo();

    await EmailModel.deleteOne({ _id: params.id });
    // console.log(data);

    return Response.json({ message: "success" });
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
