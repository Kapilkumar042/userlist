// // src/App.js
// import React, { useEffect, useState } from 'react';
// import UserTable from './components/UserTable';
// import UserForm from './components/UserForm';
// import ConfirmModal from './components/ConfirmModal';
// import { fetchUsers, createUser, updateUser, deleteUser } from './services/userService';

// function App() {
//   const [users, setUsers] = useState([]); // Maintain the list of users in state
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isConfirmOpen, setIsConfirmOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [deleteUserId, setDeleteUserId] = useState(null);

//   // Fetch users from the API when the component mounts
//   useEffect(() => {
//     const loadUsers = async () => {
//       const data = await fetchUsers();
//       setUsers(data); // Set users in state
//     };
//     loadUsers();
//   }, []);

//   // Handle creating a new user
//   const handleCreate = async (user) => {
//     const newUser = await createUser(user);
//     if (newUser) {
//       setUsers([...users, newUser]); // Add new user to the state
//     }
//   };

//   // Handle updating an existing user
//   const handleUpdate = async (id, updatedUser) => {
//     const updated = await updateUser(id, updatedUser);
//     if (updated) {
//       setUsers(users.map((user) => (user.id === id ? updated : user))); // Update user in state
//     }
//   };

//   // Handle deleting a user
//   const handleDelete = async (id) => {
//     const success = await deleteUser(id);
//     if (success) {
//       setUsers(users.filter((user) => user.id !== id)); // Remove user from state
//     }
//   };

//   // Open form to create a new user
//   const handleCreateUser = () => {
//     setCurrentUser(null);
//     setIsFormOpen(true);
//   };

//   // Open form to edit an existing user
//   const handleEditUser = (user) => {
//     setCurrentUser(user);
//     setIsFormOpen(true);
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">User Management</h1>

//       <button
//         onClick={handleCreateUser}
//         className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//       >
//         Add New User
//       </button>

//       {/* User Table */}
//       <UserTable
//         users={users}
//         onEdit={handleEditUser}
//         onDelete={(id) => {
//           setDeleteUserId(id);
//           setIsConfirmOpen(true);
//         }}
//       />

//       {/* User Form for Create/Edit */}
//       <UserForm
//         isOpen={isFormOpen}
//         onClose={() => setIsFormOpen(false)}
//         currentUser={currentUser}
//         onSubmit={(user) => {
//           if (currentUser) {
//             handleUpdate(currentUser.id, user);
//           } else {
//             handleCreate(user);
//           }
//           setIsFormOpen(false);
//         }}
//       />

//       {/* Confirmation Modal for Delete */}
//       <ConfirmModal
//         isOpen={isConfirmOpen}
//         onClose={() => setIsConfirmOpen(false)}
//         onConfirm={() => {
//           handleDelete(deleteUserId);
//           setIsConfirmOpen(false);
//         }}
//       />
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Routes,  Route } from 'react-router-dom'
import UserDetails from './pages/UserDetails'
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <ToastContainer position="top-right" autoClose={3000} /> 
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/userdetails/:userId' element={<UserDetails/>} />
      </Routes>
    </div>
  )
}

export default App