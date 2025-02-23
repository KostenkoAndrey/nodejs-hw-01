import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");

        if (!data.trim()) {
            return [];
        };
        return JSON.parse(data);;
        } catch (error) {
        console.error("Ошибка при чтении файла:", error.message);
        return [];
    }
};
