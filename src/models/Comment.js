import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  video: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Video" },
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;

// Comment 모델을 만들어주고 User와 Video모델도 Comment와 관계를 맺으므로 수정해주었음.
// #16.2 pug HTML Template 작업과 #16.3~ 4에서 라우팅 작업을 할듯? 이후에 컨트롤러 만들고.
