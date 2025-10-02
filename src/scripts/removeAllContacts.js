import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    let contacts = await readContacts();

    if (!contacts || contacts.length === 0) {
      return;
    }

    contacts = [];

    await writeContacts(contacts);
    console.log('усі контакти видалені');
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
