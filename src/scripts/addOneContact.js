import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contact = createFakeContact();
  try {
    await writeContacts(contact);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
