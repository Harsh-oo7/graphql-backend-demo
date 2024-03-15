const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema/type-defs.js')
const { resolvers } = require('./schema/resolvers.js')
const { DBConnection } = require('./database.js')

// typeDefs: structure of graphql API and defines available types, 
// their fields and relationships between them.

// resolvers: retrieve data and manipulate data logic 
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const startServer = async () => {

    server.listen().then(({url}) => {
        console.log("API server is runnning on...", url)
    })

    await DBConnection()

}

startServer()