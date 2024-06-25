import { useState, useEffect } from 'react';

function AutoSaveForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavedData(formData);
    }, 100);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h1>Auto-Save Form</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />   
        </label>
      </form>
      {savedData && (
        <div>
          <h2>Last Saved Data:</h2>
          <p>Name: {savedData.name}</p>
          <p>Email: {savedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default AutoSaveForm;
