import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import bcrypt from 'bcrypt'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Starting seed...')

  // Clear existing data (optional - comment out if you want to keep existing data)
  console.log('🧹 Cleaning existing data...')
  await prisma.transaction.deleteMany()
  await prisma.session.deleteMany()
  await prisma.wallet.deleteMany()
  await prisma.user.deleteMany()
  await prisma.game.deleteMany()

  // Hash passwords
  const hashedPassword1 = await bcrypt.hash('password123', 10)
  const hashedPassword2 = await bcrypt.hash('password123', 10)
  const hashedPassword3 = await bcrypt.hash('password123', 10)
  const hashedPassword4 = await bcrypt.hash('password123', 10)

  // Create users with wallets
  console.log('👤 Creating users...')

  const user1 = await prisma.user.create({
    data: {
      email: 'john.doe@example.com',
      username: 'johndoe',
      avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      theme: 'dark',
      vitrin_connected: true,
      vitrin_user_id: 'vitrin_user_001',
      password: hashedPassword1,
      wallet: {
        create: {
          balance: 1500.50,
        },
      },
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'jane.smith@example.com',
      username: 'janesmith',
      avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
      theme: 'light',
      vitrin_connected: false,
      password: hashedPassword2,
      wallet: {
        create: {
          balance: 750.25,
        },
      },
    },
  })

  const user3 = await prisma.user.create({
    data: {
      email: 'alice.wonder@example.com',
      username: 'alicewonder',
      avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
      theme: 'dark',
      vitrin_connected: true,
      vitrin_user_id: 'vitrin_user_002',
      password: hashedPassword3,
      wallet: {
        create: {
          balance: 2000.00,
        },
      },
    },
  })

  const user4 = await prisma.user.create({
    data: {
      email: 'bob.builder@example.com',
      username: 'bobbuilder',
      avatar_url: null,
      theme: 'light',
      vitrin_connected: false,
      password: hashedPassword4,
      wallet: {
        create: {
          balance: 100.00,
        },
      },
    },
  })

  console.log(`✅ Created ${4} users`)

  // Create some sample transactions
  console.log('💰 Creating sample transactions...')

  await prisma.transaction.createMany({
    data: [
      {
        user_id: user1.id,
        type: 'reward',
        amount: 500.00,
        source: 'vitrin_reward',
        status: 'completed',
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      },
      {
        user_id: user1.id,
        type: 'swap',
        amount: -200.00,
        source: 'vitrin_swap',
        status: 'completed',
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      },
      {
        user_id: user1.id,
        type: 'reward',
        amount: 300.50,
        source: 'vitrin_reward',
        status: 'completed',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      },
      {
        user_id: user2.id,
        type: 'reward',
        amount: 250.00,
        source: 'vitrin_reward',
        status: 'completed',
        date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
      },
      {
        user_id: user2.id,
        type: 'swap',
        amount: -100.00,
        source: 'vitrin_swap',
        status: 'completed',
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      },
      {
        user_id: user3.id,
        type: 'reward',
        amount: 1000.00,
        source: 'vitrin_reward',
        status: 'completed',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      },
      {
        user_id: user4.id,
        type: 'system',
        amount: 100.00,
        source: 'welcome_bonus',
        status: 'completed',
        date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
      },
    ],
  })

  console.log(`✅ Created ${7} transactions`)

  // Create some sample games
  console.log('🎮 Creating sample games...')

  await prisma.game.createMany({
    data: [
      {
        title: 'Adventure Quest',
        thumbnail_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400',
        category: 'Adventure',
        external_url: 'https://example.com/games/adventure-quest',
      },
      {
        title: 'Puzzle Master',
        thumbnail_url: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400',
        category: 'Puzzle',
        external_url: 'https://example.com/games/puzzle-master',
      },
      {
        title: 'Racing Legends',
        thumbnail_url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400',
        category: 'Racing',
        external_url: 'https://example.com/games/racing-legends',
      },
      {
        title: 'Strategy Empire',
        thumbnail_url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
        category: 'Strategy',
        external_url: 'https://example.com/games/strategy-empire',
      },
      {
        title: 'Arcade Classic',
        thumbnail_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        category: 'Arcade',
        external_url: 'https://example.com/games/arcade-classic',
      },
    ],
  })

  console.log(`✅ Created ${5} games`)

  console.log('\n✨ Seed completed successfully!')
  console.log('\n📝 Test accounts:')
  console.log('  - john.doe@example.com / password123 (Vitrin connected, balance: 1500.50)')
  console.log('  - jane.smith@example.com / password123 (Not connected, balance: 750.25)')
  console.log('  - alice.wonder@example.com / password123 (Vitrin connected, balance: 2000.00)')
  console.log('  - bob.builder@example.com / password123 (Not connected, balance: 100.00)')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
