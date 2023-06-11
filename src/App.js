import './App.css';

import React, { useState } from 'react';

let id = 0;

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [lastname,setLastname]=useState("");
  const [address,setAddress]=useState("");
  const [phone,setPhone]=useState("");
  const [age,setAge]=useState("");
  const [position,setPosition]=useState("");
  
  const [editname, setEditName] = useState("");
  const [editlastname, setEditLastname] = useState("");
  const [editaddress, setEditAddress] = useState("");
  const [editphone, setEditPhone] = useState("");
  const [editage, setEditAge] = useState("");
  const [editposition, setEditPosition] = useState("");

  const [showDetails, setShowDetails] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleShowDetails = (id) => {
    setShowDetails(true);
    setSelectedItemId(id);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
    setSelectedItemId(null);
  };
  const handleAddUser = () => {
    if (name&&lastname&&address&&phone&&age&&position.trim() !== '') {
      const newUserWithId = { id: id +=1, name: name, lastname: lastname, address: address, 
        phone: phone, age: age, position: position };
      setData(prevData => [...prevData, newUserWithId]);
      setName("")
      setLastname("")
      setAddress("")
      setPhone("")
      setAge("")
      setPosition("")
    }
  };

  const handleEditUser = (id) => {
    const updatedData = data.map(User => {
      if (User.id === id) {
        return { ...User, name: editname , lastname: editlastname, address: editaddress, 
          phone: editphone, age: editage, position: editposition};
      }
      return User;
    });
    setData(updatedData);
    setEditName('');
    setEditLastname('');
    setEditAddress('');
    setEditPhone('');
    setEditAge('');
    setEditPosition('');
  };

  const handleDeleteUser = (id) => {
    const updatedData = data.filter(User => User.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <div className='add-user'>
        <h2>Add User</h2>
          <input type="text" placeholder='ชื่อ' value={name} onChange={e => setName(e.target.value)}/>
          <input type="text" placeholder='นามสกุล' value={lastname} onChange={e => setLastname(e.target.value)}/>
          <input type="text" placeholder='ที่อยู่' value={address} onChange={e => setAddress(e.target.value)}/>
          <input type="text" placeholder='เบอร์โทรศัพท์' value={phone} onChange={e => setPhone(e.target.value)}/>
          <input type="text" placeholder='อายุ' value={age} onChange={e => setAge(e.target.value)}/>
          <input type="text" placeholder='ตำแหน่ง' value={position} onChange={e => setPosition(e.target.value)}/>
          <button onClick={handleAddUser}>Add</button>
      </div>

      <div className='header'>
      <h2>Users</h2>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>LASTNAME</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(User => (
            <tr key={User.id}>
              <td>{User.id}</td>
              <td>{User.name}</td>
              <td>{User.lastname}</td>
              <td>
                <button onClick={() => handleShowDetails(User.id)}>Detail</button>
                <button onClick={() => handleEditUser(User.id)}>Edit</button>
                <button onClick={() => handleDeleteUser(User.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='header'><h2>Edit User</h2></div>
        <div className='add-user'>
          <input type="text" placeholder='ชื่อ' value={editname} onChange={e => setEditName(e.target.value)}/>
          <input type="text" placeholder='นามสกุล' value={editlastname} onChange={e => setEditLastname(e.target.value)}/>
          <input type="text" placeholder='ที่อยู่' value={editaddress} onChange={e => setEditAddress(e.target.value)}/>
          <input type="text" placeholder='เบอร์โทรศัพท์' value={editphone} onChange={e => setEditPhone(e.target.value)}/>
          <input type="text" placeholder='อายุ' value={editage} onChange={e => setEditAge(e.target.value)}/>
          <input type="text" placeholder='ตำแหน่ง' value={editposition} onChange={e => setEditPosition(e.target.value)}/>
          <button onClick={() => handleEditUser(id)}>Edit</button>
        </div>

        {showDetails && (
        <div>
          <div className='header'><h2>Details</h2></div>
          {selectedItemId && (
            <div className='add-user'>
              <p>ID: {selectedItemId}</p>
              <p>ชื่อ: {data.find(item => item.id === selectedItemId).name}</p>
              <p>นามสกุล: {data.find(item => item.id === selectedItemId).lastname}</p>
              <p>ที่อยู่: {data.find(item => item.id === selectedItemId).address}</p>
              <p>เบอร์โทรศัพท์: {data.find(item => item.id === selectedItemId).phone}</p>
              <p>อายุ: {data.find(item => item.id === selectedItemId).age}</p>
              <p>ตำแหน่ง: {data.find(item => item.id === selectedItemId).position}</p>
              <button onClick={handleHideDetails}>Close</button>
            </div>
          )}
          
        </div>
      )}
    </div>
  );
}

export default App;