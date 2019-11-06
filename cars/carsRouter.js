const express = require('express');
const Cars = require('./carsDbFunctions');
const validateCar = require('./middleware')
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const cars = await Cars.get();
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id);
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});
router.post('/', validateCar, async (req, res, next) => {
  const { VIN, make, model, mileage, transmissionType, statusOfTitle } = req.body;
  try {
    const car = await Cars.insert({ VIN, make, model, mileage, transmissionType, statusOfTitle });
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { VIN, make, model, mileage, transmissionType, statusOfTitle } = req.body;
  try {
    const car = await Cars.update(id, { VIN, make, model, mileage, transmissionType, statusOfTitle });
    res.status(200).json(car.id);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await Cars.delete(id);
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});

module.exports = router;