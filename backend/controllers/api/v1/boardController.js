import List from "../../../models/List.js";

export async function getBoardData(req, res) {
  try {
    const boardItems = await List.find({user: req.body.uid}).populate('list_items');
    return res.status(200).json({
      data: boardItems || [],
      success:'Board Data'
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server Error...",
    });
  }
}