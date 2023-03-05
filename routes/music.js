const router = require("express").Router;

router.post("/", async (req, res) => {
  try {
    ///create music
    const newPost = new connection({
      title: req.body.title,
      genre: req.body.genre,
      mp3: req.body.mp3,
      description: req.body.description,
      category: req.body.category,
    });
    ////save post and respond
    const post = await newPost.save();
    res.status(200).send("File Uploaded Successfully");
    res.status(200).json({
      id: post.id,
      description: post.description,
      mp3: post.mp3,
      genre: post.genre,
      title: post.title,
      category: post.category,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
