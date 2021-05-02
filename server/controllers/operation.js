const OperationData = require('../models/operation');

const getOperations = async (req, res) => {
    try {
        const allOperations = await OperationData.find();
        res.status(200).json(allOperations)
        console.log(allOperations)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

const createOperation = async (req, res) => {
    const operation = req.body;
    console.log(operation)

    const newOperation = new OperationData(operation);
    try {
        await newOperation.save();
        res.status(201).json(newOperation);
        console.log(newOperation)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const deleteOperation = async (req, res) => {
    const id = req.params.id;
    try {
        await OperationData.findByIdAndRemove(id).exec();
        res.send(`succesfully deleted operation`)
    } catch (error) {
        res.status(404).json({ message: error.message })
        console.log(error)
    }
};

module.exports = {
    getOperations,
    createOperation,
    deleteOperation
}
