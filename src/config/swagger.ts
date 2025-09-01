import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Split & Budget Tracker API',
      version: '0.1.0',
      description: 'API for two-user split expenses and budgeting',
      contact: {
        name: 'API Support',
      },
    },
    servers: [
      {
        url: process.env.API_BASE_URL || 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    paths: {
      '/health': {
        get: {
          summary: 'Health check endpoint',
          description: 'Returns the health status of the API',
          tags: ['Health'],
          responses: {
            '200': {
              description: 'Service is healthy',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      ok: {
                        type: 'boolean',
                        example: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: [],
});
