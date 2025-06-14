// App.jsx
import PostComposer from "./components/PostComposer";
import Dashboard from "./components/Dashboard";
import PostFeed from "./components/PostFeed";
import RandomUserList from "./components/RandomUserList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        DevConnect
      </h1>
      <Dashboard />
      <PostFeed />
      <RandomUserList />
    </div>
  );
}

export default App;
