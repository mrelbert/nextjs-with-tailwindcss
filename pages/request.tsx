import Link from "next/link";

// return a component that says hello world
export default function Request() {
  return (
    <div>
      <h1 className="py-4">Currently unavailable</h1>
      <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
        <Link href="/">Back to home</Link>
      </button>   
    </div> 
  );
}