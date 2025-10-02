import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  let contacts = [];
  for (let i = 1; i <= number; i++) {
    let contact = createFakeContact();
    contacts.push(contact);
  }
  try {
    await writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(2);
