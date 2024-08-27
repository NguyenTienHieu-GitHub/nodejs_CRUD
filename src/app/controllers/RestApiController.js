const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class RestApiController {
  // API để lấy tất cả các khóa học
  getAllCourses(req, res, next) {
    Course.find({})
      .then((course) => {
        res.json(course); // Trả về tất cả các khóa học dưới dạng JSON
      })
      .catch((error) => {
        res.status(500).json({ message: "Lỗi server", error });
      });
  }
  // Lấy khóa học theo ID
  getCourseById(req, res, next) {
    Course.findById({ _id: req.params.id })
      .then((course) => {
        if (course) {
          res.json(course);
        } else {
          res.status(404).json({ message: "Khóa học không tìm thấy" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "Lỗi server", error });
      });
  }
  // Tạo khóa học mới
  createCourse(req, res, next) {
    try {
      req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const course = new Course(req.body);
      course.save();
      res.status(201).json(course);
    } catch (error) {
      res.status(400).json({ message: "Lỗi khi tạo khóa học", error });
    }
  }

  // Cập nhật khóa học
  updateCourse(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then((course) => {
        if (course) {
          res.json(course);
        } else {
          res.status(404).json({ message: "Khóa học không tìm thấy" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "Lỗi server", error });
      });
  }
  // Xóa khóa học
  deleteCourse(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then((course) => {
        if (course) {
          res.json({ message: "Khóa học đã được xóa" });
        } else {
          res.status(404).json({ message: "Khóa học không tìm thấy" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "Lỗi server", error });
      });
  }
  // deleteForceCourse(req, res, next){
  //   Course.deleteOne({ _id: req.params.id })
  //   .then((course) => {
  //     if (course) {
  //       res.json({ message: "Khóa học đã được xóa vĩnh viễn" });
  //     } else {
  //       res.status(404).json({ message: "Khóa học không tìm thấy" });
  //     }
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ message: "Lỗi server", error });
  //   });
  // }
  restoreCourse(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then((course) => {
        if (course) {
          res.json({ message: "Khóa học đã được khôi phục" });
        } else {
          res.status(404).json({ message: "Khóa học không tìm thấy" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "Lỗi server", error });
      });
  }
}
module.exports = new RestApiController();
