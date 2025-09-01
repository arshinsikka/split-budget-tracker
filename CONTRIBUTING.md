# Contributing to Split & Budget Tracker

Thank you for your interest in contributing! This guide will help you set up the development environment and understand our workflow.

## Development Setup

### Prerequisites

- Node.js 18+
- npm
- Git

### Getting Started

1. **Fork and clone the repository**

```bash
git clone <your-fork-url>
cd split-budget-tracker
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The server will be available at `http://localhost:3000`

## Development Workflow

### Code Quality

Before committing, ensure your code passes all quality checks:

```bash
# Run linting
npm run lint

# Check code formatting
npm run format

# Fix formatting issues
npm run format:write

# Run tests
npm test
```

### Testing

- Write tests for new features in the `__tests__/` directory
- Use descriptive test names and group related tests
- Aim for good test coverage
- Run tests before committing: `npm test`

### Code Style

- Follow the existing TypeScript/ESLint configuration
- Use Prettier for consistent formatting
- Write clear, self-documenting code
- Add JSDoc comments for public APIs

### API Documentation

- Update Swagger/OpenAPI documentation for new endpoints
- Include request/response examples
- Document error cases and status codes
- Test the documentation at `/docs` endpoint

## Project Structure

- `src/api/` - API route handlers
- `src/domain/` - Business logic and entities
- `src/services/` - Application services
- `src/store/` - Data persistence layer
- `src/types/` - TypeScript type definitions
- `src/utils/` - Utility functions
- `__tests__/` - Test files

## Financial Calculations

- Always use `Decimal.js` for money calculations
- Never use floating-point arithmetic for financial data
- Include proper validation for monetary inputs
- Test edge cases around precision and rounding

## Commit Guidelines

- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Include tests for new features
- Update documentation as needed

## Getting Help

- Check existing issues and pull requests
- Create detailed issue reports with reproduction steps
- Ask questions in discussions or issues

Happy coding! 🚀
