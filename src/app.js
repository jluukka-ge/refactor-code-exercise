// var db = require('./dbModels')
var db = require('./mockDbModels')

// Store the entry and keywords to the database
const storeEntry = async (userId, threadId, entry, keywords) => {
  const newEntry = {
    userId: userId,
    threadId: threadId,
    entry: entry,
    keywords: keywords
  }
  return await db.models.EntryModel.create(newEntry)
}

// Process data and store to database
const handleCreateEntry = async (res, requestData) => {
  // Extract keywords from the new entry
  const allWords = requestData.entry.split(' ')
  let keywords = []
  for (const word of allWords) {
    if (['C#', 'JavaScript', 'Python'].includes(word) && !keywords.includes(word)) {
      keywords.push(word)
    }
  }

  const createdEntry = await storeEntry(requestData.userId, requestData.threadId, requestData.entry, keywords)

  // Return the data of the newly created DB instance through HTTP response
  return res.json(createdEntry)
}

// And endpoint for posting new messages on the forum
module.exports = app => app.post('/thread/:threadId', async (req, res) => {
  // Get data from the request
  const getDataFromRequest = req => ({
    userId: req.user.id,
    threadId: req.params.threadId,
    entry: req.body.entry
  })

  const requestData = getDataFromRequest(req)

  return await handleCreateEntry(res, requestData)
})
