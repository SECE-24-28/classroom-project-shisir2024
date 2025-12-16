const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/mycourse")
  .then(() => {
    console.log("DB Connection Success...");
  })
  .catch((err) => console.log(err));

const MyCourse = require("./model/CourseModel");

// GET ALL COURSES
app.get("/api/courses", async (req, res) => {
  try 
  {
    const courses = await MyCourse.find();
    res.json(courses);
  } 
  catch (error) 
  {
    res.status(500).json({ message: error.message });
  }
});

// GET COURSE BY ID
app.get("/api/courses/:id", async (req, res) => {
  try 
  {
    const course = await MyCourse.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course Not Found" });
    }

    res.json(course);
  } 
  catch (error)
  {
    res.status(500).json({ message: error.message });
  }
});

// CREATE NEW COURSE
app.post("/api/courses", async (req, res) => {
  try 
  {
    const { title, duration } = req.body;

    const course = new MyCourse({
      title,
      duration,
    });

    await course.save();
    res.status(201).json(course);
  } 
  catch (error) 
  {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE COURSE
app.put("/api/courses/:id", async (req, res) => {
  try 
  {
    const { title, duration } = req.body;

    const updatedCourse = await MyCourse.findByIdAndUpdate(
      req.params.id, { title, duration }, { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course Not Found" });
    }

    res.json(updatedCourse);
  } 
  catch (error) 
  {
    res.status(500).json({ message: error.message });
  }
});

// DELETE COURSE
app.delete("/api/courses/:id", async (req, res) => {
  try 
  {
    const course = await MyCourse.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course Not Found" });
    }

    res.json({ message: "Course Deleted Successfully" });
  } 
  catch (error) 
  {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server is running on PORT ${PORT}`)
);