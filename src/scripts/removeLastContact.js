import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    let data =  await readContacts();
    if (data.length > 0) {
        await writeContacts('RemoveLast');
      } else {
        console.log("Нет контактов для удаления.");
      }
  };

removeLastContact();
