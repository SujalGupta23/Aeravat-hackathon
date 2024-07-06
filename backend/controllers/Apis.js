const { Participant, Organizer, Vendor } = require("../model/Schema");
const express = require("express");

const router = express.Router();

// Create a POST request for Participant schema
router.post("/participants", async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.status(201).json(participant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a POST request for Organizer schema
router.post("/organizers", async (req, res) => {
  try {
    const organizer = new Organizer(req.body);
    await organizer.save();
    res.status(201).json(organizer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a POST request for Vendor schema
router.post("/vendors", async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).json(vendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a GET request to fetch all data from Participant schema
router.get("/participants", async (req, res) => {
  try {
    const participants = await Participant.find();
    res.status(200).json(participants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a GET request to fetch all data from Organizer schema
router.get("/organizers", async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.status(200).json(organizers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a GET request to fetch all data from Vendor schema
router.get("/vendors", async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
