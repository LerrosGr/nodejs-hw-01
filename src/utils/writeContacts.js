import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    if (Array.isArray(updatedContacts) && updatedContacts.length === 0) {
      await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
      return;
    }

    let data = [];
    try {
      const readData = await fs.readFile(PATH_DB, 'utf-8');
      data = JSON.parse(readData);
    } catch {
      data = [];
    }
    if (Array.isArray(updatedContacts)) {
      data.push(...updatedContacts);
    } else {
      data.push(updatedContacts);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error);
  }
};
