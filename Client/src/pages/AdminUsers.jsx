import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(
        "https://legiongearsmern.onrender.com/api/admin/users",
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch users.");
    }
  };

  // delete the user
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://legiongearsmern.onrender.com/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.success("User deleted successfully!");
        getAllUsersData();
      } else {
        toast.error(data.message || "Failed to delete user.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while deleting.");
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <div className="p-8 bg-white text-gray-900 min-h-screen">
      <h1 className="text-4xl font-semibold mb-8">Users</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse shadow-lg rounded-lg border border-gray-300">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr className="h-16">
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition duration-300 border-b border-gray-300 h-16"
                >
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4 flex gap-4 text-sm">
                    <Link
                      to={`/admin/users/${user._id}/edit`}
                      className="text-blue-600 hover:underline"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
