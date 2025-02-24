import { readContacts } from './readContacts.js';
import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const writeContacts = async (updatedContacts) => {
    try {
        let data = await readContacts();

        if (!Array.isArray(data)) {
            data = [];
        } else if (updatedContacts === "RemoveAll") {
            await fs.writeFile(PATH_DB, JSON.stringify([]));
            console.log("✅ Все контакты удалены.");
            return;
        } else if (updatedContacts === 'RemoveLast'){
            data.pop();
            console.log("✅ Последний контакт удален.");
        } else if (Array.isArray(updatedContacts)) {
            data.push(...updatedContacts);
        } else {
            data.push(updatedContacts);
        };

        await fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2));
        console.log("Контакты успешно обновлены.");
    } catch (error) {
        console.error("Ошибка при обновлении контактов:", error.message);
    }
};

