import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
  {
    lists: [
    {
      type: mongoose.Types.ObjectId,
      ref: "List",
    },
  ] 
  },
  {
    timestamps: true,
  }
);

const TaskBoard = mongoose.model("Task_Board", boardSchema);

export default TaskBoard;
