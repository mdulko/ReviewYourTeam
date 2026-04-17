# Review Your Team - Apex Legends

A web app built with Next.js and Sanity.io that allows gamers to rate and organize their teammates across different categories.

## Features

- 📋 **Create Custom Lists** - Create lists with editable titles (e.g., "Very Good Teammates", "Medium Teammates", "Trash Teammates")
- 👤 **Add Player Nicknames** - Add player nicknames with optional reasons/notes
- 🔄 **Organize Teammates** - Move nicknames between lists as needed
- 🌍 **Share Lists** - Share your teammate lists globally with other players (coming soon)
- 🎮 **Dark Gaming Theme** - Eye-friendly dark theme optimized for gamers
- 🎯 **Apex Legends Focus** - Start with Apex Legends, expandable to other games

## Tech Stack

- **Frontend**: Next.js 16+ (TypeScript, React 19)
- **Styling**: Tailwind CSS 4
- **Backend/CMS**: Sanity.io
- **Hosting**: Vercel
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Sanity.io account (free tier available)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ReviewYourTeam
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   - Copy `.env.local.example` to `.env.local`
   - Add your Sanity.io credentials:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
     NEXT_PUBLIC_SANITY_DATASET=production
     SANITY_API_TOKEN=your_api_token
     ```

4. **Set up Sanity.io**
   - Create a new Sanity.io project at https://sanity.io
   - Copy your project ID and create an API token
   - Run: `npx sanity@latest init`

5. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

## Project Structure

```
ReviewYourTeam/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with dark theme
│   │   ├── page.tsx            # Main page with list grid
│   │   └── globals.css         # Global styles and dark theme
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   └── TeamListCard.tsx    # Individual list card component
│   └── lib/
│       └── client.ts           # Sanity client configuration
├── sanity/
│   ├── schemaTypes/
│   │   ├── player.ts           # Player/user schema
│   │   ├── teamList.ts         # Team list schema
│   │   ├── nickname.ts         # Nickname entry schema
│   │   └── index.ts            # Schema exports
│   └── config.ts               # Sanity configuration
├── public/                      # Static assets
├── .env.local.example          # Environment variables template
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

## Data Schema

### Collections

**Player**
- userId: string
- username: string
- email: string
- createdAt: datetime

**Team List**
- title: string (editable)
- description: text (optional)
- creator: reference to Player
- game: string (apex, valorant, cs2, etc.)
- isPublic: boolean (for sharing)
- nicknames: array of references to Nickname entries
- createdAt: datetime
- updatedAt: datetime

**Nickname Entry**
- nickname: string
- reason: text (optional)
- list: reference to Team List
- addedAt: datetime

## Available Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Run production build

# Linting
npm run lint        # Run ESLint

# Sanity Studio
npx sanity studio   # Open Sanity Studio for content management
```

## Deployment to Vercel

1. **Push to Git**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your repository
   - Set environment variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `SANITY_API_TOKEN` (for backend operations)

3. **Deploy**
   - Vercel will automatically deploy on push to main

## Roadmap

- [ ] API endpoints for CRUD operations with Sanity
- [ ] Authentication (user accounts)
- [ ] Share/publish lists globally
- [ ] Drag-and-drop between lists
- [ ] List templates
- [ ] Export lists as images/PDFs
- [ ] Support for more games (Valorant, CS2, Overwatch, etc.)
- [ ] Player API integration (fetch players from game APIs)
- [ ] List statistics and insights
- [ ] Comments on team reviews
- [ ] Leaderboards

## Color Palette

The app uses a gamer-friendly dark theme:
- **Background**: `#1a1a1a` (Dark gray, not pure black)
- **Secondary BG**: `#242424`
- **Text**: `#e8e8e8` (Light gray)
- **Accent (Primary)**: `#00d4ff` (Cyan)
- **Success**: `#00ff41` (Green)
- **Warning**: `#ffaa00` (Orange)
- **Destructive**: `#ff3333` (Red)

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing documentation in this README
- Contact the development team

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- CMS powered by [Sanity.io](https://www.sanity.io/)
- Deployed on [Vercel](https://vercel.com)

---

**Happy reviewing! May your teammates be worthy.** 🎮

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
