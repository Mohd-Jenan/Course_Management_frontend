import React, { useState } from "react";
import toast from "react-hot-toast";
import { Plus, Trash2 } from "lucide-react";

const CreateAssignment = () => {
  const [assignment, setAssignment] = useState({
    title: "",
    questions: [],
  });

  const addQuestion = () => {
    const newQuestion = {
      questionId: assignment.questions.length + 1,
      questionText: "",
      questionType: "boolean",
      options: [],
      correctAnswer: "",
    };

    setAssignment((prev) => ({
      ...prev,
      questions: [...prev.questions, newQuestion],
    }));
  };

  const removeQuestion = (index) => {
    const updated = [...assignment.questions];
    updated.splice(index, 1);
    setAssignment({ ...assignment, questions: updated });
  };

  const handleQuestionChange = (index, field, value) => {
    const updated = [...assignment.questions];
    updated[index][field] = value;

    // Reset options if type changes
    if (field === "questionType" && value === "boolean") {
      updated[index].options = [];
    }

    setAssignment({ ...assignment, questions: updated });
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...assignment.questions];
    updated[qIndex].options[optIndex] = value;
    setAssignment({ ...assignment, questions: updated });
  };

  const addOption = (index) => {
    const updated = [...assignment.questions];
    if (!updated[index].options) updated[index].options = [];
    updated[index].options.push("");
    setAssignment({ ...assignment, questions: updated });
  };

  const handleSubmit = async () => {
    try {
      console.log("Assignment Payload:", assignment);
      toast.success("Assignment created successfully");
    } catch (error) {
      toast.error("Failed to create assignment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Create Assignment
        </h1>

        {/* Assignment Title */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-sm">
            Assignment Title
          </label>
          <input
            type="text"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter assignment title"
          />
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {assignment.questions.map((q, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 bg-gray-50 relative"
            >
              <button
                onClick={() => removeQuestion(index)}
                className="absolute top-4 right-4 text-red-500"
              >
                <Trash2 size={18} />
              </button>

              <h3 className="font-semibold mb-4">
                Question {index + 1}
              </h3>

              {/* Question Text */}
              <input
                type="text"
                value={q.questionText}
                onChange={(e) =>
                  handleQuestionChange(index, "questionText", e.target.value)
                }
                className="w-full p-3 border rounded-lg mb-4"
                placeholder="Enter question"
              />

              {/* Question Type */}
              <select
                value={q.questionType}
                onChange={(e) =>
                  handleQuestionChange(index, "questionType", e.target.value)
                }
                className="w-full p-3 border rounded-lg mb-4"
              >
                <option value="boolean">Boolean (True/False)</option>
                <option value="mcq">Multiple Choice</option>
              </select>

              {/* Boolean Type */}
              {q.questionType === "boolean" && (
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() =>
                      handleQuestionChange(index, "correctAnswer", "true")
                    }
                    className={`px-4 py-2 rounded-lg border ${
                      q.correctAnswer === "true"
                        ? "bg-green-500 text-white"
                        : ""
                    }`}
                  >
                    True
                  </button>
                  <button
                    onClick={() =>
                      handleQuestionChange(index, "correctAnswer", "false")
                    }
                    className={`px-4 py-2 rounded-lg border ${
                      q.correctAnswer === "false"
                        ? "bg-red-500 text-white"
                        : ""
                    }`}
                  >
                    False
                  </button>
                </div>
              )}

              {/* MCQ Type */}
              {q.questionType === "mcq" && (
                <div className="space-y-3">
                  {q.options?.map((opt, optIndex) => (
                    <div key={optIndex} className="flex gap-3">
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) =>
                          handleOptionChange(
                            index,
                            optIndex,
                            e.target.value
                          )
                        }
                        className="flex-1 p-2 border rounded"
                        placeholder={`Option ${optIndex + 1}`}
                      />
                      <button
                        onClick={() =>
                          handleQuestionChange(index, "correctAnswer", opt)
                        }
                        className={`px-3 py-2 border rounded ${
                          q.correctAnswer === opt
                            ? "bg-indigo-600 text-white"
                            : ""
                        }`}
                      >
                        Set Correct
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={() => addOption(index)}
                    className="text-indigo-600 flex items-center gap-2 text-sm"
                  >
                    <Plus size={16} /> Add Option
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add Question Button */}
        <div className="mt-6">
          <button
            onClick={addQuestion}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            <Plus size={18} /> Add Question
          </button>
        </div>

        {/* Submit */}
        {assignment.questions.length > 0 && (
          <div className="mt-8 text-right">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
            >
              Create Assignment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateAssignment;
