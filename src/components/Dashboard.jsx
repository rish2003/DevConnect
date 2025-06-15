import UserList from "./UserList";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Rishabh Raj",
    bio: "PR & Management Lead @ GDG",
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    name: "Aditi Mehra",
    bio: "Frontend Dev & UI Designer",
    techStack: ["Vue", "TailwindCSS", "Figma"],
  },
  {
    id: 3,
    name: "Kunal Sharma",
    bio: "Backend Engineer | DevOps Learner",
    techStack: ["Go", "Docker", "Kubernetes"],
  },
];

function Dashboard() {
  const [followedUsers, setfollowedUsers] = useState([]);

  const toggleFollow = (userId) => {
    setfollowedUsers((prev) => {
      if (prev.includes(userId)) {
        return prev.filter((id) => id !== userId);
      } else {
        return [...prev, userId];
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-800 my-6">
        Developer Dashboard
      </h2>
      <UserList
        users={users}
        followedUsers={followedUsers}
        toggleFollow={toggleFollow}
      />
    </div>
  );
}

export default Dashboard;
