/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

const RandomUserList = () => {
  const [users, setUsers] = useState([]); // write default value
  const [loading, setLoading] = useState(true); // true/false
  const [error, setError] = useState(null); // null or error string
  const [genderFilter, setGenderFilter] = useState("all");

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      let genderParam = "";
      if (genderFilter === "all") {
        genderParam = "";
      } else {
        genderParam = `&gender=${genderFilter}`;
      }
      const response = await axios.get(
        `https://randomuser.me/api/?results=5${genderParam}`
      );

      setUsers(response.data.results);
    } catch (err) {
      setError("Failed to Fetch");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genderFilter]);

  // useEffect(() => {
  //   // write your Axios GET call here
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://randomuser.me/api/?results=5"
  //       );
  //       setUsers(response.data.results);
  //       setLoading(false);
  //     } catch (err) {
  //       setError("Failed to fetch users");
  //       setLoading(false);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📄 Random Users</h2>

      {/* Filter + Refresh UI */}
      <div className="flex justify-between items-center mb-4">
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button
          onClick={fetchUsers}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
        >
          🔄 Refresh
        </button>
      </div>

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
