# THA: Setup Reverse ETL to Webhook

This is a take-home assignment for building a simplified Reverse ETL setup flow. See [INSTRUCTIONS.md](INSTRUCTIONS.md) for full requirements and evaluation criteria.

## Prerequisites

- Docker
- Docker Compose
- Node.js and npm

## Quick Start

Start the database with a single command:

```bash
npm run start-customer-db
```

This command will:
1. Start the PostgreSQL container
2. Wait for it to be healthy
3. Automatically seed the database with 20 realistic users
4. Display the connection DSN and credentials
