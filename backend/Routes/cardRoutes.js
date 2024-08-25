const express = require('express');
const {
    createCard,
    getCards,
    getCardById,
    getSearchSuggestions
} = require('../controllers/cardController');

const router = express.Router();
router.get('/cards/search', getSearchSuggestions);

router.post('/cards', createCard);
router.get('/cards', getCards);
router.get('/cards/:id', getCardById);

module.exports = router;
  