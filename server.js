import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));

routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
});





/**
app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}
   */
