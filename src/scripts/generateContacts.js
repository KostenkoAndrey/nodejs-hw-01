import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
const array = [];
let i = 0;

for(i = 0; i < number; i++){
const newContact =  createFakeContact();
array.push(newContact)};
writeContacts(array);
};

generateContacts(5);

