import * as functions from 'firebase-functions'
import { Request, Response } from 'express'
import { join } from 'path'

// Load Next.js
let nextServer: any

async function getNextServer() {
  if (!nextServer) {
    try {
      // Import Next.js
      const next = await import('next')

      // Get the project root (parent of functions directory)
      const projectRoot = join(__dirname, '../..')

      // Initialize Next.js app
      const nextApp = next.default({
        dev: false,
        conf: {
          distDir: join(projectRoot, '.next'),
        },
      })

      // Prepare the app
      await nextApp.prepare()
      nextServer = nextApp.getRequestHandler()
    } catch (error) {
      console.error('Error initializing Next.js server:', error)
      throw error
    }
  }
  return nextServer
}

// Cloud Function to handle all Next.js requests
export const nextjs = functions
  .runWith({
    memory: '1GB',
    timeoutSeconds: 60,
  })
  .https.onRequest(async (request: Request, response: Response) => {
    try {
      const handler = await getNextServer()
      return handler(request, response)
    } catch (error) {
      console.error('Error handling request:', error)
      response.status(500).send('Internal Server Error')
    }
  })
