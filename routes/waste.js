const Waste = require('../models/Waste');
const router = require('express').Router();

// POST
router.post('/', async (req, res) => {

    const newWaste = new Waste(req.body);

    try {
        // console.log("Hi");
        const savedWaste = await newWaste.save();
        res.status(200).json(savedWaste);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL WASTE INPUTS
router.get('/', async (req, res) => {
    try {
        const allWaste = await Waste.find();
        res.status(200).json(allWaste);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ONE WASTE
router.get('/find/:id', async (req, res) => {
    try {
        const waste = await Waste.findById(req.params.id);
        res.status(200).json(waste);
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Waste.findByIdAndDelete(req.params.id);
        res.status(200).json("Waste item deleted");
    } catch (error) {
        res.status(500).json(error);
    }
});


// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updatedWaste = await Waste.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json("Waste item updated");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;