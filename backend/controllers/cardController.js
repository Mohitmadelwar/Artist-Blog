const Card = require('../Models/card-model')

exports.createCard = async (req, res) => {
    try {
        const card = new Card(req.body);
        await card.save();
        res.status(201).json(card);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getCardById = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSearchSuggestions = async (req, res) => {
    try {
        const searchQuery = req.query.q;
        if (!searchQuery) {
            return res.status(400).json({ error: 'Query parameter q is required' });
        }

   const suggestions = await Card.find({
            title: { $regex: searchQuery, $options: 'i' }
        }).select('title description');  

        res.status(200).json(suggestions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};