const express = require('express');
const router = express.Router();

const restApi = require('../app/controllers/RestApiController');


// Route để lấy tất cả khóa học
router.get('/courses', restApi.getAllCourses);

// Route để lấy khóa học theo ID
router.get('/:id', restApi.getCourseById);

// Route để tạo khóa học mới
router.post('/create', restApi.createCourse);

// Route để cập nhật khóa học
router.put('/:id/update', restApi.updateCourse);

// Route để xóa khóa học
router.delete('/:id/delete', restApi.deleteCourse);

// Route để khôi phục khóa học
router.patch('/:id/restore', restApi.restoreCourse);

// Route để xóa khóa học vĩnh viễn
// router.delete('/:id/force-delete', restApi.deleteForceCourse);


module.exports = router;