const express = require("express");
const User = require("../model/Resitration");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
    "/createuser",
    [
      body("name", "Enter Valid Name").isLength({ min: 3 }),
      body("phoneNo", "Enter Valid phoneNo").isLength({ min: 10, max: 10 }),
      body("email", "Enter Valid Email"),
      body("age", "Enter Valid age").isLength({min:1}),
      body("sex", "Enter Valid sex"),
      body("Govt_id", "Enter Valid Govt_id"),
      body("Id_no", "Enter Valid Id_no"),
      body("Guardian", "Enter Valid Guardian"),
      body("EM_Contact", "Enter Valid EM_Contact"),
      body("Address", "Enter Valid Address"),
      body("State", "Enter Valid State"),
      body("city", "Enter Valid city"),
      body("pincode", "Enter Valid pincode"),
      body("Occuption", "Enter Valid Occuption"),
      body("Relgion", "Enter Valid Relgion"),
      body("Marital_Status", "Enter Valid Marital_Status"),
      body("blood_group", "Enter Valid blood_group"),
      body("Nastionality", "Enter Valid Nastionality"),
      
    ],
    async (req, res) => {
      success = false;
      //if there are errors, return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
      }
      //check whether user with this phone number exists already
      try {
        let user = await User.findOne({ phoneNo: req.body.phoneNo });
        if (user) {
          return res.status(400).json({ success, error: "Sorry a User are already exists" });
        }
        // const salt = await bcrypt.genSalt(10);
        // const secPass = await bcrypt.hash(req.body.password, salt);
        //creat a new use
        user = await User.create({
          name: req.body.name,
          phoneNo: req.body.phoneNo,
          email: req.body.email,
          age: req.body.age,
          sex: req.body.sex,
          Govt_id: req.body.Govt_id,
          Id_no: req.body.Id_no,
          Guardian: req.body.Guardian,
          EM_Contact: req.body.EM_Contact,
          Address: req.body.Address,
          State: req.body.State,
          city: req.body.city,
          country: req.body.country,
          pincode: req.body.pincode,
          Occuption: req.body.Occuption,
          Relgion: req.body.Relgion,
          Marital_Status: req.body.Marital_Status,
          blood_group: req.body.blood_group,
          Nastionality: req.body.Nastionality,
        });
        const data = {
          user: {
          id: user.id,
          name:user.name,
          phoneNo: req.body.phoneNo,
          email: req.body.email,
          age: req.body.age,
          sex: req.body.sex,
          Govt_id: req.body.Govt_id,
          Id_no: req.body.Id_no,
          Guardian: req.body.Guardian,
          EM_Contact: req.body.EM_Contact,
          Address: req.body.Address,
          State: req.body.State,
          city: req.body.city,
          country: req.body.country,
          pincode: req.body.pincode,
          Occuption: req.body.Occuption,
          Relgion: req.body.Relgion,
          Marital_Status: req.body.Marital_Status,
          blood_group: req.body.blood_group,
          Nastionality: req.body.Nastionality,
          }
        }
        // const authtoken = jwt.sign(data, JWT_SECRET);
  
        // res.json(user);
        success = true;
        res.json({ success, data });
        //catch errors
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  )
  router.get('/getData',async(req,res)=>{
    try {
        const data = await User.find({});
        res.json(data)
    } catch (error) {
        console.log(error.massage)
        res.status(500).send("internal Error")
    }
  })
  module.exports = router;