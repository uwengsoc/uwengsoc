# Waterloo Engineering Society Website Replication and Improvement
Modern recreation of the Engineering Society website for University of Waterloo using a lightweight monorepo architecture.

## Tech Stack
- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Backend**: NestJS, Prisma ORM
- **Database**: SQLite (file-based)
- **Tooling**: Turborepo, ESLint

### Prerequisites
- Node.js and npm
- Git

### Installation Steps
1. Clone Repository
2. Install dependencies - npm i or npm ci
3. Make .env file in backend directory and add "DATABASE_URL=file:./dev.db"
4. Within the backend directory, run npx prisma migrate dev --name init

## Running the Apps and Other Useful Commands

### Frontend
npm run dev

### Backend
npm run start:dev

### Running Migrations
npx prisma migrate dev

### Delete and Regenerate DB
rm apps/backend/dev.db
cd apps/backend && npx prisma migrate dev

## Example Project Structure

engsoc-next-website/
├── apps/
│   ├── frontend/       # Next.js application
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── components/
│   │   └── ...
│   └── backend/        # NestJS application
│       ├── prisma/
│       ├── src/
│       ├── dev.db      # SQLite database file
│       └── ...
├── .gitignore
├── package.json
└── README.md
