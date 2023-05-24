import mongoose from "mongoose";


const listSchema = new mongoose.Schema({
    user:{
      type : mongoose.Types.ObjectId,
      ref : "User",
      required: true,
    },
    list_number : {
    type: Number,
    required: true,
    },
    list_items : [
    {
      type : mongoose.Types.ObjectId,
      ref  : "ItemContent",
    },
  ],
},
{
 timestamps: true,
}
);

const List = mongoose.model("List", listSchema);

export default List;
