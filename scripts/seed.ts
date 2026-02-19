#!/usr/bin/env tsx
/**
 * Database Seed Script for Development
 * 
 * This script seeds the database with sample data for local development.
 * Run with: npm run seed
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing required environment variables:');
  console.error('  - NEXT_PUBLIC_SUPABASE_URL');
  console.error('  - SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Seed data
const categories = [
  {
    name: 'Technology',
    slug: 'technology',
    description: 'Latest tech trends, tutorials, and insights about software development and emerging technologies.',
  },
  {
    name: 'Design',
    slug: 'design',
    description: 'UI/UX design principles, creative inspiration, and design system best practices.',
  },
  {
    name: 'Productivity',
    slug: 'productivity',
    description: 'Tips and tools for improving workflow efficiency and time management.',
  },
  {
    name: 'Career',
    slug: 'career',
    description: 'Professional growth, job hunting advice, and industry insights.',
  },
];

const posts = [
  {
    title: 'The Future of AI in Web Development',
    slug: 'future-of-ai-web-development',
    content: `<h2>How AI is Transforming the Web</h2>
<p>Artificial Intelligence is revolutionizing how we build and interact with websites. From automated code generation to personalized user experiences, AI tools are becoming indispensable for modern developers.</p>
<h3>Key Areas of Impact</h3>
<ul>
<li><strong>Code Completion:</strong> Tools like GitHub Copilot accelerate development</li>
<li><strong>Testing:</strong> AI-powered testing identifies bugs faster</li>
<li><strong>Personalization:</strong> Dynamic content adapts to user behavior</li>
<li><strong>Accessibility:</strong> Automated alt text and ARIA labels</li>
</ul>
<p>As these technologies mature, developers who embrace AI will have a significant advantage in building better products faster.</p>`,
    excerpt: 'Explore how artificial intelligence is reshaping web development with automated tools, personalized experiences, and smarter workflows.',
    featured_image: 'https://picsum.photos/seed/ai-web-dev/800/400',
    author_name: 'Sarah Chen',
    author_email: 'sarah.chen@example.com',
    category_slug: 'technology',
    published: true,
  },
  {
    title: 'Building Accessible Design Systems',
    slug: 'building-accessible-design-systems',
    content: `<h2>The Foundation of Inclusive Design</h2>
<p>Creating accessible design systems is not just about compliance—it's about building products that work for everyone. When we prioritize accessibility from the start, we create better experiences for all users.</p>
<h3>Core Principles</h3>
<ul>
<li><strong>Color Contrast:</strong> WCAG 2.1 AA requires 4.5:1 for normal text</li>
<li><strong>Keyboard Navigation:</strong> All interactive elements must be keyboard accessible</li>
<li><strong>Semantic HTML:</strong> Proper heading hierarchy and ARIA labels</li>
<li><strong>Focus Indicators:</strong> Visible focus states for keyboard users</li>
</ul>
<p>Start small by auditing your color palette and adding focus states. Accessibility is a journey, not a destination.</p>`,
    excerpt: 'Learn how to create inclusive design systems that work for everyone while improving usability for all users.',
    featured_image: 'https://picsum.photos/seed/accessibility/800/400',
    author_name: 'Marcus Williams',
    author_email: 'marcus.williams@example.com',
    category_slug: 'design',
    published: true,
  },
  {
    title: 'Deep Work in a Distracted World',
    slug: 'deep-work-distracted-world',
    content: `<h2>Reclaiming Your Focus</h2>
<p>In an age of constant notifications and endless tabs, the ability to focus deeply on cognitively demanding tasks has become a superpower. Cal Newport's concept of Deep Work is more relevant than ever.</p>
<h3>Strategies for Deep Work</h3>
<ul>
<li><strong>Time Blocking:</strong> Schedule focused sessions on your calendar</li>
<li><strong>Environment Design:</strong> Create a workspace that minimizes distractions</li>
<li><strong>Digital Minimalism:</strong> Audit and eliminate non-essential apps</li>
<li><strong>The 90-Minute Rule:</strong> Work in focused sprints with breaks</li>
</ul>
<p>The most successful knowledge workers protect their attention fiercely. Start by identifying your peak focus hours and guard them religiously.</p>`,
    excerpt: 'Discover proven strategies for maintaining deep focus and productivity in an increasingly distracting digital environment.',
    featured_image: 'https://picsum.photos/seed/focus/800/400',
    author_name: 'Emma Rodriguez',
    author_email: 'emma.rodriguez@example.com',
    category_slug: 'productivity',
    published: true,
  },
  {
    title: 'Navigating the 2024 Job Market',
    slug: 'navigating-2024-job-market',
    content: `<h2>The Landscape Has Changed</h2>
<p>The tech job market in 2024 looks different from previous years. With economic uncertainty and AI disruption, job seekers need to adapt their strategies to stand out.</p>
<h3>What Employers Want</h3>
<ul>
<li><strong>AI Literacy:</strong> Understanding how to leverage AI tools</li>
<li><strong>Full-Stack Thinking:</strong> Broader understanding beyond your specialty</li>
<li><strong>Communication:</strong> Explaining complex technical concepts simply</li>
<li><strong>Adaptability:</strong> Willingness to learn new technologies quickly</li>
</ul>
<p>Focus on building a portfolio that demonstrates problem-solving skills and business impact, not just technical proficiency.</p>`,
    excerpt: 'Navigate the changing tech job market with insights on what employers are looking for and how to position yourself for success.',
    featured_image: 'https://picsum.photos/seed/job-market/800/400',
    author_name: 'David Kim',
    author_email: 'david.kim@example.com',
    category_slug: 'career',
    published: true,
  },
  {
    title: 'The Rise of Edge Computing',
    slug: 'rise-of-edge-computing',
    content: `<h2>Computing at the Edge</h2>
<p>Edge computing is moving data processing closer to where it's needed, reducing latency and bandwidth usage. This paradigm shift is enabling new classes of applications from autonomous vehicles to real-time IoT analytics.</p>
<h3>Benefits and Use Cases</h3>
<ul>
<li><strong>Reduced Latency:</strong> Sub-50ms response times for critical applications</li>
<li><strong>Bandwidth Savings:</strong> Process data locally, send only results</li>
<li><strong>Privacy:</strong> Sensitive data stays on-premise</li>
<li><strong>Reliability:</strong> Applications work offline or with poor connectivity</li>
</ul>
<p>Platforms like Cloudflare Workers, Vercel Edge Functions, and AWS Lambda@Edge are making edge computing accessible to every developer.</p>`,
    excerpt: 'Understanding edge computing architecture and its impact on modern application development and deployment.',
    featured_image: 'https://picsum.photos/seed/edge-computing/800/400',
    author_name: 'Sarah Chen',
    author_email: 'sarah.chen@example.com',
    category_slug: 'technology',
    published: true,
  },
];

const newsletterSubscribers = [
  { email: 'john.doe@example.com', name: 'John Doe', subscribed: true },
  { email: 'jane.smith@example.com', name: 'Jane Smith', subscribed: true },
  { email: 'alex.johnson@example.com', name: 'Alex Johnson', subscribed: true },
  { email: 'maria.garcia@example.com', name: 'Maria Garcia', subscribed: true },
  { email: 'robert.brown@example.com', name: 'Robert Brown', subscribed: false },
];

async function clearExistingData() {
  console.log('Clearing existing data...');
  
  const { error: subscribersError } = await supabase
    .from('newsletter_subscribers')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');
  
  if (subscribersError) {
    console.error('Error clearing newsletter_subscribers:', subscribersError.message);
  }

  const { error: postsError } = await supabase
    .from('posts')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');
  
  if (postsError) {
    console.error('Error clearing posts:', postsError.message);
  }

  const { error: categoriesError } = await supabase
    .from('categories')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');
  
  if (categoriesError) {
    console.error('Error clearing categories:', categoriesError.message);
  }

  console.log('Existing data cleared.');
}

async function seedCategories() {
  console.log('Seeding categories...');
  
  const { data, error } = await supabase
    .from('categories')
    .insert(categories)
    .select();
  
  if (error) {
    console.error('Error seeding categories:', error.message);
    throw error;
  }
  
  console.log(`  ✓ Inserted ${data.length} categories`);
  return data;
}

async function seedPosts(categoryMap: Map<string, string>) {
  console.log('Seeding posts...');
  
  const postsWithCategoryIds = posts.map(post => ({
    title: post.title,
    slug: post.slug,
    content: post.content,
    excerpt: post.excerpt,
    featured_image: post.featured_image,
    author_name: post.author_name,
    author_email: post.author_email,
    category_id: categoryMap.get(post.category_slug),
    published: post.published,
    published_at: new Date().toISOString(),
  }));
  
  const { data, error } = await supabase
    .from('posts')
    .insert(postsWithCategoryIds)
    .select();
  
  if (error) {
    console.error('Error seeding posts:', error.message);
    throw error;
  }
  
  console.log(`  ✓ Inserted ${data.length} posts`);
}

async function seedNewsletterSubscribers() {
  console.log('Seeding newsletter subscribers...');
  
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert(newsletterSubscribers)
    .select();
  
  if (error) {
    console.error('Error seeding newsletter_subscribers:', error.message);
    throw error;
  }
  
  console.log(`  ✓ Inserted ${data.length} newsletter subscribers`);
}

async function seed() {
  console.log('\n🌱 Starting database seed...\n');
  
  try {
    // Clear existing data
    await clearExistingData();
    
    // Seed categories first
    const categoryData = await seedCategories();
    
    // Create a map of slug to id for posts
    const categoryMap = new Map(categoryData.map(c => [c.slug, c.id]));
    
    // Seed posts with category references
    await seedPosts(categoryMap);
    
    // Seed newsletter subscribers
    await seedNewsletterSubscribers();
    
    console.log('\n✅ Database seeded successfully!\n');
    console.log('Summary:');
    console.log(`  - Categories: ${categories.length}`);
    console.log(`  - Posts: ${posts.length}`);
    console.log(`  - Newsletter Subscribers: ${newsletterSubscribers.length}`);
    console.log('');
    
  } catch (error) {
    console.error('\n❌ Seed failed:', error);
    process.exit(1);
  }
}

seed();
