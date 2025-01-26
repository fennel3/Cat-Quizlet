import mysql from "mysql2/promise";
import { GetDBSettings } from "@/sharedCode/common";
import Link from "next/link";

type users = {
  id: number;
  username: string;
  score: number;
}[];

async function getHighscores() {
  const connectionParams = GetDBSettings();
  const connection = mysql.createPool(connectionParams);

  try {
    const [results] = await connection.query("SELECT * FROM user_details"); //update with 10 limiting query
    return results as users;
  } catch (e) {
    throw e;
  } finally {
    connection.end();
  }
}

export default async function Highscores() {
  let users: users = [];

  try {
    users = await getHighscores();
  } 
  catch (e) {
    console.error(e);
    return (
      <div className="w-full min-h-screen p-6 min-h-screen bg-gray-800 text-gray-300">
        Looks like the server isn&#39;t working, contact Fin!
      </div>
    );
  }

  return (
    <div >
        <div className="flex w-full bg-gray-800 text-gray-300">
        <Link href="/quiz">
          <button className="m-3 px-4 py-2 bg-gray-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            START QUIZ
          </button>
        </Link>
        <Link href="/">
          <button className="m-3 px-4 py-2 bg-gray-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            HOME
          </button>
        </Link>
      </div>
      <div className="w-full min-h-screen p-6 min-h-screen bg-gray-800 text-gray-300 flex text-3xl">
        <div className="p-6 pr-0">
          {" "}
          Username
          <div className="pt-6">
            {users.map((user) => {
              return (
                <div key={user.id}>
                  <p className="py-2" >{user.username}</p>{" "}
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-6 pr-0">
          {" "}
          Score
          <div className="pt-6">
            {users.map((user) => {
              return (
                <div key={user.id}>
                  <p className="py-2">{user.score}</p>{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
