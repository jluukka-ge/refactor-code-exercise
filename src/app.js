// Choose a suitable DB implementatio
// var db = require('./dbModels')
var db = require('./mockDbModels')

// Process data and store to database
const handleCreateEntry = (res, requestData) => {
  // Extract keywords from the new entry
  const allWords = requestData.entry.split(' ')
  let keywords = []
  for (const word of allWords) {
    if (['C#', 'JavaScript', 'Python'].includes(word)) {
      keywords.push(word)
    }
  }

  // Store to database
  const newEntry = {
    userId: requestData.userId,
    threadId: requestData.threadId,
    entry: requestData.entry,
    keywords: keywords
  }
  return await db.models.EntryModel.create(newEntry)

  // Return the data of the newly created DB instance through HTTP response
  return res.json(createdEntry)
}

// And endpoint for posting new messages on the forum
module.exports = app => app.post('/thread/:threadId', async (req, res) => {
  // Get data from the request
  const getDataFromRequest = req => ({
    userId: req.user.id,  // integer
    threadId: req.params.threadId,  // integer
    entry: req.body.entry  // string
  })

  const requestData = getDataFromRequest(req)

  return await handleCreateEntry(res, requestData)
})
