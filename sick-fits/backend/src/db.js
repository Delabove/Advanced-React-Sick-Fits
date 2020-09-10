//THIS FILE CONNECTS TO THE REMOTE PRISMA DB AND GIVES US THE ABILITY TO QUERY IT WITH JS





//importing prisma from prisma binding using require in server
//bc there is no import in nodejs at the time of recording
const { Prisma } = require('prisma-binding');

const db = new Prisma({
    //type definitions=the generated graphQL bc it needs to know all of the types queries and mutations are in order to feed the information into the db
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false

})

module.exports = db;