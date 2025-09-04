const express = require("express");
const router = express.Router();
const calcController = require("../controllers/operations");


router.post("/add_10", calcController.add_10);
router.post("/sub_10", calcController.subtract_10);
router.post("/mult_10", calcController.multiply_10);
router.post("/div_10", calcController.divide_10);
router.post("/square_10", calcController.square_10);
router.post("/square_root_10", calcController.square_root_10);





router.post("/add_5", calcController.add_5);
router.post("/sub_5", calcController.subtract_5);
router.post("/mult_5", calcController.multiply_5);
router.post("/div_5", calcController.divide_5);
router.post("/square_5", calcController.square_5);
router.post("/square_root_5", calcController.square_root_5);


module.exports = router;
