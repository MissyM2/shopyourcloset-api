const { config } = require('dotenv')
config()

import { ApolloServer } from 'apollo-server'
import { applyMiddleware } from 'graphql-middleware'
import { middlewares } from './middlewares'
import { schema } from './schema'
import { isDev } from './utils/constants'
import { createContext } from './utils/helpers'

export const server = new ApolloServer({
  schema: applyMiddleware(schema, middlewares),
  context: createContext,
  //playground: true,
  //tracing: isDev(),
  introspection: true,
  debug: isDev(),
  cors: true,
})
