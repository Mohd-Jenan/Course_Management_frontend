import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  deleteCourse,
  getAllCourses,
  updateCourse,
  createCourse
} from "../../services/courseService";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {
  const navigate = useNavigate();
  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(""); // "edit" | "delete"
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const emptyCourse = {title: "",description: "",duration: ""};
  const fetchCourse = async () => {
    try {
      const data = await getAllCourses();
      setCourses(data);
    } catch (err) {
      toast.error("Failed to load courses");
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  const handleAddCourse = async () => {
    try {
      await createCourse({
        title: selectedCourse.title,
        description: selectedCourse.description,
        duration: selectedCourse.duration,
      });

      toast.success("Course created successfully");
      fetchCourse();
      closeModal();
    } catch (error) {
      console.log(error.response?.data || error);
      toast.error("Failed to create course");
    }
  };

  /* ------------------- handlers ------------------- */
  const handleEdit = (course) => {
    setSelectedCourse(course);
    setMode("edit");
    setIsOpen(true);
  };

  const handleDelete = (course) => {
    setSelectedCourse(course);
    setMode("delete");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCourse(null);
    setMode("");
  };

  const handleEditSubmit = async () => {
    try {
      const updatedData = {
        title: selectedCourse.title,
        description: selectedCourse.description,
        duration: selectedCourse.duration,
      };

      await updateCourse(selectedCourse._id, updatedData);

      toast.success("Course updated successfully");

      // refresh UI
      fetchCourse();
      closeModal();
    } catch (error) {
      console.log("..................", error);

      toast.error("Failed to update course");
    }
  };

  const confirmDelete = async () => {
    await deleteCourse(selectedCourse._id);
    console.log("Deleted Course:", selectedCourse._id);
    toast.success("Course deleted");
    fetchCourse();
    closeModal();
  };

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Courses</h1>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
          onClick={() => {
            setSelectedCourse(emptyCourse);
            setMode("add");
            setIsOpen(true);
          }}
        >
          + Add Course
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                Duration: {course.duration}
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => handleEdit(course)}
                className="text-sm px-3 py-1.5 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(course)}
                className="text-sm px-3 py-1.5 rounded-md border border-red-500 text-red-500 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- MODAL ---------- */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            {/* EDIT MODE */}
            {mode === "edit" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Edit Course</h2>

                <input
                  type="text"
                  value={selectedCourse.title}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      title: e.target.value,
                    })
                  }
                  className="w-full mb-3 p-2 border rounded"
                  placeholder="Title"
                />

                <textarea
                  value={selectedCourse.description}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      description: e.target.value,
                    })
                  }
                  className="w-full mb-3 p-2 border rounded"
                  placeholder="Description"
                />

                <input
                  type="text"
                  value={selectedCourse.duration}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      duration: e.target.value,
                    })
                  }
                  className="w-full mb-4 p-2 border rounded"
                  placeholder="Duration"
                />

                <div className="flex justify-end gap-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEditSubmit}
                    className="px-4 py-2 bg-indigo-600 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </>
            )}

            {/* DELETE MODE */}
            {mode === "delete" && (
              <>
                <h2 className="text-lg font-semibold text-red-600 mb-4">
                  Delete Course
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Are you sure you want to delete{" "}
                  <strong>{selectedCourse.title}</strong>? This action cannot be
                  undone.
                </p>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
            {/* ADD MODE */}
            {mode === "add" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Add New Course</h2>

                <input
                  type="text"
                  value={selectedCourse.title}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      title: e.target.value,
                    })
                  }
                  className="w-full mb-3 p-2 border rounded"
                  placeholder="Course Title"
                />

                <textarea
                  value={selectedCourse.description}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      description: e.target.value,
                    })
                  }
                  className="w-full mb-3 p-2 border rounded"
                  placeholder="Course Description"
                />

                <input
                  type="text"
                  value={selectedCourse.duration}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      duration: e.target.value,
                    })
                  }
                  className="w-full mb-4 p-2 border rounded"
                  placeholder="Duration (e.g. 6 weeks)"
                />

                <div className="flex justify-end gap-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleAddCourse}
                    className="px-4 py-2 bg-indigo-600 text-white rounded"
                  >
                    Create
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCourses;
