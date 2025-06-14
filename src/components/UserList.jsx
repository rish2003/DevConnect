import UserCard from "./UserCard";

function UserList({ users, followedUsers, toggleFollow }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          bio={user.bio}
          techStack={user.techStack}
          isFollowed={followedUsers.includes(user.id)}
          toggleFollow={() => toggleFollow(user.id)}
        />
      ))}
    </div>
  );
}

export default UserList;
