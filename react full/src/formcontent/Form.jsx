import React, { useState, useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    course: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Simulate componentDidMount
  useEffect(() => {
    console.log(' Component Mounted');
  
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);

  // Simulate componentDidUpdate
  useEffect(() => {
    if (submittedData) {
      console.log(' Form Submitted or Updated:', submittedData);
    }
  }, [submittedData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      alert("form submitted");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2> Student Registration Form</h2>
      <form onSubmit={handleSubmit} method="post">
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Course:</label><br />
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
{/* 
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
        </div>
      )} */}
    </div>
  );
};

export default Form;
