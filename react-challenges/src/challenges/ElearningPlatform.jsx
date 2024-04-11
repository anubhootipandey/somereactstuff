import React, { useState } from 'react';

// Dummy data for courses
const coursesData = [
  { id: 1, title: 'Introduction to React.js', instructor: 'John Doe', duration: '6 weeks' },
  { id: 2, title: 'Web Development with Node.js', instructor: 'Jane Smith', duration: '8 weeks' },
  { id: 3, title: 'Python for Beginners', instructor: 'Alice Johnson', duration: '4 weeks' }
];

const CourseListing = ({ courses, onSelectCourse }) => (
  <div className="course-listing">
    <h2>Courses Available:</h2>
    <ul>
      {courses.map(course => (
        <li key={course.id} className="course-item">
          <div>
            <strong>Title:</strong> {course.title}
          </div>
          <div>
            <strong>Instructor:</strong> {course.instructor}
          </div>
          <div>
            <strong>Duration:</strong> {course.duration}
          </div>
          <button onClick={() => onSelectCourse(course.id)}>View Details</button>
        </li>
      ))}
    </ul>
  </div>
);

const CourseDetails = ({ course }) => (
  <div className="course-details">
    <h2>Course Details:</h2>
    <div>
      <strong>Title:</strong> {course.title}
    </div>
    <div>
      <strong>Instructor:</strong> {course.instructor}
    </div>
    <div>
      <strong>Duration:</strong> {course.duration}
    </div>
    <div>
      <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </div>
    <button onClick={() => alert(`Enrolled in ${course.title}`)}>Enroll Now</button>
  </div>
);

const ElearningPlatform = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSelectCourse = (courseId) => {
    const course = coursesData.find(course => course.id === courseId);
    setSelectedCourse(course);
  };

  return (
    <div className="elearning-platform">
      <h1>Welcome to E-Learning Platform</h1>
      {selectedCourse ? (
        <CourseDetails course={selectedCourse} />
      ) : (
        <CourseListing courses={coursesData} onSelectCourse={handleSelectCourse} />
      )}
    </div>
  );
};

export default ElearningPlatform;
