import mongoose from "mongoose";

const listItemSchema = new mongoose.Schema({
    item_content : {
    type: String,
    required: true,
    },
},
{
 timestamps: true,
}
);

const ItemContent = mongoose.model("ItemContent", listItemSchema);

export default ItemContent;