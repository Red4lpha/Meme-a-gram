const { Meme } = require('../models')

//? @desc Get all memes
//? @route GET /api/memes
//? @access public
const memes_get_all = async (req, res) => {
  try {
    const meme = await Meme.findAll({order: [['createdAt', 'DESC']]});
    return res.status(200).json(meme);
  } catch(err) {
    console.log('Issue getting all memes');
    return res.status(500).json(err);
  }
};

//? @desc Get a single meme
//? @route GET /api/memes/:id
//? @access public
const meme_get = async (req, res) => {
  const id = req.params.id;
  
  try {
    const meme = await Meme.findOne({where: {id}});
    return res.status(200).json(meme);
  } catch(err) {
    console.log('Issue viewing a meme');
    return res.status(500).json(err);
  }
};

//? @desc Create a new meme
//? @route POST /api/memes/create
//? @access public
const meme_create = async (req, res) => {
  const {name, image} = req.body;
  
  try {
    const meme = await Meme.create({name, image});
    return res.status(200).json(meme);
  } catch(err) {
    console.log('Issue creating a meme');
    return res.status(500).json(err);
  }
};


module.exports = {
  memes_get_all,
  meme_get,
  meme_create,
};
