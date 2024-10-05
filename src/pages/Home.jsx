import React, { useEffect, useState } from 'react';
import UserTable from '../components/UserTable';
import UserForm from '../components/UserForm';
import ConfirmModal from '../components/ConfirmModal';
import { fetchUsers, createUser, updateUser, deleteUser } from '../services/userService';

function Home() {
  const [users, setUsers] = useState([]); 
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 


  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data); 
    };
    loadUsers();
  }, []);

  const handleCreate = async (user) => {
    const newUser = await createUser(user);
    if (newUser) {
      setUsers([...users, newUser]); 
    }
  };

  const handleUpdate = async (id, updatedUser) => {
    const updated = await updateUser(id, updatedUser);
    if (updated) {
      setUsers(users.map((user) => (user.id === id ? updated : user))); 
    }
  };

  const handleDelete = async (id) => {
    const success = await deleteUser(id);
    if (success) {
      setUsers(users.filter((user) => user.id !== id)); 
    }
  };

  const handleCreateUser = () => {
    setCurrentUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsFormOpen(true);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">

<div className=" flex justify-between items-center">
    <button
        onClick={handleCreateUser}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add New User
      </button>
      <input
  type="text"
  placeholder="Search by name..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="mb-4 p-2 border border-gray-300 rounded"
/>
</div>
    

{filteredUsers.length === 0 ? (
  <p className="mt-4 text-red-500">User not found</p> 
) : (
  <UserTable
    users={filteredUsers}
    onEdit={handleEditUser}
    onDelete={(id) => {
      setDeleteUserId(id);
      setIsConfirmOpen(true);
    }}
  />
)}



      <UserForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        currentUser={currentUser}
        onSubmit={(user) => {
          if (currentUser) {
            handleUpdate(currentUser.id, user);
          } else {
            handleCreate(user);
          }
          setIsFormOpen(false);
        }}
      />

      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={() => {
          handleDelete(deleteUserId);
          setIsConfirmOpen(false);
        }}
      />
    </div>
  );
}

export default Home;
