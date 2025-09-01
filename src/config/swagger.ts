import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Split & Budget Tracker API',
      version: '0.1.0',
      description: 'API for two-user split expenses and budgeting (scaffold)',
    },
  },
  apis: [],
});
