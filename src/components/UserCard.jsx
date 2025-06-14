function UserCard({ name, bio, techStack, isFollowed, toggleFollow }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-md flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 my-2">{bio}</p>
      <h4 className="font-medium text-gray-700 mt-4">Tech Stack:</h4>
      <ul className="list-disc list-inside text-gray-600">
        {techStack.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>

      <button
        onClick={toggleFollow}
        className={`mt-4 px-4 py-2 rounded-md text-white font-semibold ${
          isFollowed
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isFollowed ? "unfollow" : "follow"}
      </button>
    </div>
  );
}

export default UserCard;
