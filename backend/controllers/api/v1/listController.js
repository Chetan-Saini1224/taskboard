import ItemContent from "../../../models/listItem.js";
import List from "../../../models/List.js";



export async function createList(req, res) {
  try {
    const list = await List.create({user : req.body.loggedInUser,
    list_number : req.body.list_number
    });
    return res.status(200).json({
      data: {
        list
      },
    });
  } catch (err) {
    return res.status(500).json({
      data: {
        message: "Server Error...",
      },
    });
  }
}


export async function createTask(req, res) {
  try {
    
    const item = await ItemContent.create({
      item_content: req.body.content
    });
    console.log(item);
    await List.updateOne({user : req.body.uid ,list_number:req.body.list_number},
    {"$push": { "list_items": item._id } })

    return res.status(200).json({
      data: {
        item
      },
      success:"task created successfully"
    });
  } catch (err) {
    return res.status(500).json({
      data: {
        message: "Server Error...",
      },
    });
  }
}

export async function deleteTask(req, res) {
  try {
    const doc = await ItemContent.findByIdAndDelete(req.params.id);
    if (doc) {
      return res.status(200).json({
        data: {
          success : "Task deleted",
        },
      });
    } else {
      return res.status(200).json({
        data: {
          success: "No Task found",
        },
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: {
        message: "Server Error...",
      },
    });
  }
}

