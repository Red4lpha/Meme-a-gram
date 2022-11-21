//? @desc Get all memes
//? @route GET /api/memes
//? @access public
const memes_get_all = async (req, res) => {
    res.status(200).json({message: 'get all memes'});
};

//? @desc Get a single meme
//? @route GET /api/memes/:id
//? @access public
const meme_get = async (req, res) => {
  res.status(200).json({message: 'get single meme'});
};

//? @desc Create a new meme
//? @route POST /api/memes/create
//? @access public
const meme_create = async (req, res) => {
  res.status(200).json({message: 'create meme'});
};


module.exports = {
  memes_get_all,
  meme_get,
  meme_create,
};
