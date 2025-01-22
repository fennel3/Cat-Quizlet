"use server";

import { GetDBSettings } from "@/sharedCode/common";
import mysql from "mysql2/promise";

export async function submitHighscore(formData: FormData) {

  const connectionParams = GetDBSettings();
  const connection = mysql.createPool(connectionParams);

  try {
    await connection.query(`
            INSERT INTO user_details
            (username, score)
            VALUES(?, ?);
            
            `, [formData.get("username"), formData.get("score")]); //update with 10 limiting query
  } catch (e) {
    throw e;
  } finally {
    connection.end();
  }
}
