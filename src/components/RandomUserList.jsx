/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

const RandomUserList = () => {
  const [users, setUsers] = useState([]); // write default value
  const [loading, setLoading] = useState(true); // true/false
  const [error, setError] = useState(null); // null or error string

  useEffect(() => {
    // write your Axios GET call here
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=5"
        );
        setUsers(response.data.results);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📄 Random Users</h2>

      {loading && <p className="text-blue-500">Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4">
        {users?.map((user, idx) => (
          <li key={idx} className="border p-3 rounded flex gap-4 items-center">
            <img
              src={user.picture.medium}
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-semibold">
                {user.name.first} {user.name.last}
              </p>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomUserList;
