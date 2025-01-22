import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings } from "@/sharedCode/common";

type users = {
  id: number;
  username: string;
  score: number;
}[];

async function getHighscores() {
  const connectionParams = GetDBSettings();
  const connection = mysql.createPool(connectionParams);

  try {
    const [results] = await connection.query("SELECT * FROM user_details");
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
  } catch (e) {
    return (
      <div className="w-full min-h-screen p-6 min-h-screen bg-gray-800 text-gray-300">
        something done goofed
      </div>
    );
  }

  return (
    <div>
      <div className="w-full min-h-screen p-6 min-h-screen bg-gray-800 text-gray-300">
        Highscores
      {users.map((user) => {
        return <div key={user.id}>{user.id}</div>;
      })}
      </div>

    </div>
  );
}
