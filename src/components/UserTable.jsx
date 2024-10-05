import React from 'react';
import { Edit2, Trash2 } from 'lucide-react'; 
import { Link } from 'react-router-dom'; 
import { toast } from 'react-toastify';

const UserTable = ({ users, onEdit, onDelete }) => {
    const handleDelete = async (id) => {
        const success = await deleteUser(id);
        if (success) {
          setUsers(users.filter((user) => user.id !== id)); 
          toast.success('User deleted successfully!'); 
        }
      };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg">
        <thead className="bg-[#2C3E50] text-white border-b">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`border-b ${index % 2 === 0 ? 'bg-[#16A085]' : 'bg-[#2C3E50]'} text-white`}
            >
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">
                <Link to={`/userdetails/${user.id}`} className="text-blue-200 hover:text-blue-300">
                  {user.name} 
                </Link>
              </td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">
                <div className="flex space-x-4">
                  <button
                    onClick={() => onEdit(user)}
                    className="text-blue-200 hover:text-blue-300"
                  >
                    <Edit2 className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-200 hover:text-red-300"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
