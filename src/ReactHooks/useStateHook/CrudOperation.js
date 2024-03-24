import React, { useState } from 'react';

const CrudExample = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    city: '',
    district: '',
    state: ''
  });

  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    if (!formData.name || !formData.age || !formData.city || !formData.district || !formData.state) {
      alert("Please fill in all fields.");
      return;
    }

    if (isEditing) {
      const updatedData = data.map(item => (item.id === formData.id ? formData : item));
      setData(updatedData);
      setIsEditing(false);
    } else {
      setData([
        ...data,
        {
          id: new Date().getTime().toString(),
          ...formData
        }
      ]);
    }
    setFormData({
      id: '',
      name: '',
      age: '',
      city: '',
      district: '',
      state: ''
    });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const handleEdit = (id) => {
    const selectedItem = data.find(item => item.id === id);
    setFormData(selectedItem);
    setIsEditing(true);
  };

  return (
    <div>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
      <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" />
      <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
      <button onClick={handleAdd}>{isEditing ? "Update" : "Add"}</button>
      <hr />
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}, {item.age}, {item.city}, {item.district}, {item.state}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudExample;
