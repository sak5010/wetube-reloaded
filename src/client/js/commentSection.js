const videoContainer = document.querySelector("#videoContainer");
const form = document.querySelector("#commentForm");
const liComments = document.querySelectorAll(".video__comment");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  span.innerText = ` ${text}`;
  span2.innerText = "❌";
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  span2.addEventListener("click", handleCommentX);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const removeComment = (id) => {
  const videoComments = document.querySelector(".video__comments ul");
  for (const comment of videoComments.children) {
    if (comment.dataset.id === id) {
      comment.remove();
    }
  }
};

const handleCommentX = async (event) => {
  const targetCommentDOM = event.target.parentNode;
  const commentId = targetCommentDOM.dataset.id;
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    removeComment(commentId);
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

liComments.forEach((li) => {
  const commentX = li.querySelector(".commentX");
  if (commentX) {
    commentX.addEventListener("click", handleCommentX);
  }
});
