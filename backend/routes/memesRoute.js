const express = require('express')
const router = express.Router()
const {
  memes_get_all,
  meme_get,
  meme_create,
} = require('../controllers/memesController')


/* GET all the memes */
router.route('/').get(memes_get_all);

/* get a single meme */
router.route('/:id').get( meme_get);

/* Create a meme */
router.route('/create').post( meme_create);

module.exports = router;