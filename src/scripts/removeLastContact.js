import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (!contacts || contacts.length === 0) {
      return;
    }
    contacts.splice(contacts.length - 1, 1);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
