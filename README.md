# eyi - Eye Health Tracker

eyi is a comprehensive eye health tracking application that helps users monitor their eye health, schedule eye exams, and receive personalized eye care tips.

## Features

- **Eye Health Tracking**: Monitor your eye health metrics over time
- **Eye Exam Scheduling**: Schedule and manage your eye exams
- **Personalized Eye Care Tips**: Receive tailored advice for your eye health

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Backend**: Express (Node.js 18)
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB
- Vercel account (for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/eyi.git
   cd eyi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
eyi/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx
│   ├── server/
│   │   ├── server.js
│   │   ├── routes/
│   │   │   └── index.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   └── models/
│   │       └── index.js
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.