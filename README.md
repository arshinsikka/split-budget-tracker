# Split & Budget Tracker

A Node.js + Express + TypeScript backend service for two friends to split bills and track budgets with precise financial calculations.

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd split-budget-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Check code formatting with Prettier
- `npm run format:write` - Fix code formatting with Prettier
- `npm test` - Run tests

## API Documentation

Once the server is running, visit:

- **Swagger UI**: http://localhost:3000/docs
- **Health Check**: http://localhost:3000/health

### Example Request/Response

**GET /health**

```bash
curl http://localhost:3000/health
```

**Response:**

```json
{
  "ok": true
}
```

## Project Structure

```
src/
├── server.ts          # Main server setup
├── config/            # Configuration files
│   └── swagger.ts     # API documentation setup
├── api/               # API route handlers
├── domain/            # Business logic and entities
├── services/          # Application services
├── store/             # Data persistence layer
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Development

This project uses:

- **TypeScript** for type safety
- **Express.js** for the web framework
- **Pino** for structured logging
- **Jest** for testing
- **ESLint + Prettier** for code quality
- **Swagger/OpenAPI** for API documentation
- **Decimal.js** for precise financial calculations

## Next Steps

More endpoints for expense tracking, bill splitting, and budget management will be added in upcoming releases.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup instructions.
