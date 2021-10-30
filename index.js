const { MongoClient } = require('mongodb');

const { uri } = require('./keys')

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
    .then(async () => {
        const collection = client.db().collection("anime-list")
        await collection.find().forEach(console.log)
        client.close()
    })
    .then(() => console.log("Database Closed"))
    .catch()