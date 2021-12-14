/* ******************************** */
/* A mock implementation of a DB    */
/* ******************************** */

const db = {
  models: {
    EntryModel: {
      create: newEntry => newEntry
    }
  }
}

module.exports = db
