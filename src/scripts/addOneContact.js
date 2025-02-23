import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    const newContact =  createFakeContact();
    await writeContacts(newContact);
};

addOneContact();
