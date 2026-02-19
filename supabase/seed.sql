-- Seed categories
INSERT INTO categories (id, name, slug, description, created_at, updated_at) VALUES
  (gen_random_uuid(), 'Technology', 'technology', 'Latest tech trends, tutorials, and insights about software development and emerging technologies.', now(), now()),
  (gen_random_uuid(), 'Design', 'design', 'UI/UX design principles, creative inspiration, and design system best practices.', now(), now()),
  (gen_random_uuid(), 'Productivity', 'productivity', 'Tips and tools for improving workflow efficiency and time management.', now(), now()),
  (gen_random_uuid(), 'Career', 'career', 'Professional growth, job hunting advice, and industry insights.', now(), now());

-- Seed posts (using category slugs to reference - need to fetch UUIDs)
-- First, get category IDs via CTE
WITH category_refs AS (
  SELECT id, slug FROM categories
)
INSERT INTO posts (id, title, slug, content, excerpt, featured_image, author_name, author_email, category_id, published, published_at, created_at, updated_at)
SELECT 
  gen_random_uuid(),
  'The Future of AI in Web Development',
  'future-of-ai-web-development',
  '<h2>How AI is Transforming the Web</h2><p>Artificial Intelligence is revolutionizing how we build and interact with websites. From automated code generation to personalized user experiences, AI tools are becoming indispensable for modern developers.</p><h3>Key Areas of Impact</h3><ul><li><strong>Code Completion:</strong> Tools like GitHub Copilot accelerate development</li><li><strong>Testing:</strong> AI-powered testing identifies bugs faster</li><li><strong>Personalization:</strong> Dynamic content adapts to user behavior</li><li><strong>Accessibility:</strong> Automated alt text and ARIA labels</li></ul><p>As these technologies mature, developers who embrace AI will have a significant advantage in building better products faster.</p>',
  'Explore how artificial intelligence is reshaping web development with automated tools, personalized experiences, and smarter workflows.',
  'https://picsum.photos/seed/ai-web-dev/800/400',
  'Sarah Chen',
  'sarah.chen@example.com',
  category_refs.id,
  true,
  now() - interval '2 days',
  now() - interval '5 days',
  now()
FROM category_refs WHERE slug = 'technology'
UNION ALL
SELECT 
  gen_random_uuid(),
  'Building Accessible Design Systems',
  'building-accessible-design-systems',
  '<h2>The Foundation of Inclusive Design</h2><p>Creating accessible design systems is not just about compliance—it is about building products that work for everyone. When we prioritize accessibility from the start, we create better experiences for all users.</p><h3>Core Principles</h3><ul><li><strong>Color Contrast:</strong> WCAG 2.1 AA requires 4.5:1 for normal text</li><li><strong>Keyboard Navigation:</strong> All interactive elements must be keyboard accessible</li><li><strong>Semantic HTML:</strong> Proper heading hierarchy and ARIA labels</li><li><strong>Focus Indicators:</strong> Visible focus states for keyboard users</li></ul><p>Start small by auditing your color palette and adding focus states. Accessibility is a journey, not a destination.</p>',
  'Learn how to create inclusive design systems that work for everyone while improving usability for all users.',
  'https://picsum.photos/seed/accessibility/800/400',
  'Marcus Williams',
  'marcus.williams@example.com',
  category_refs.id,
  true,
  now() - interval '4 days',
  now() - interval '7 days',
  now()
FROM category_refs WHERE slug = 'design'
UNION ALL
SELECT 
  gen_random_uuid(),
  'Deep Work in a Distracted World',
  'deep-work-distracted-world',
  '<h2>Reclaiming Your Focus</h2><p>In an age of constant notifications and endless tabs, the ability to focus deeply on cognitively demanding tasks has become a superpower. Cal Newport concept of Deep Work is more relevant than ever.</p><h3>Strategies for Deep Work</h3><ul><li><strong>Time Blocking:</strong> Schedule focused sessions on your calendar</li><li><strong>Environment Design:</strong> Create a workspace that minimizes distractions</li><li><strong>Digital Minimalism:</strong> Audit and eliminate non-essential apps</li><li><strong>The 90-Minute Rule:</strong> Work in focused sprints with breaks</li></ul><p>The most successful knowledge workers protect their attention fiercely. Start by identifying your peak focus hours and guard them religiously.</p>',
  'Discover proven strategies for maintaining deep focus and productivity in an increasingly distracting digital environment.',
  'https://picsum.photos/seed/focus/800/400',
  'Emma Rodriguez',
  'emma.rodriguez@example.com',
  category_refs.id,
  true,
  now() - interval '1 day',
  now() - interval '3 days',
  now()
FROM category_refs WHERE slug = 'productivity'
UNION ALL
SELECT 
  gen_random_uuid(),
  'Navigating the 2024 Job Market',
  'navigating-2024-job-market',
  '<h2>The Landscape Has Changed</h2><p>The tech job market in 2024 looks different from previous years. With economic uncertainty and AI disruption, job seekers need to adapt their strategies to stand out.</p><h3>What Employers Want</h3><ul><li><strong>AI Literacy:</strong> Understanding how to leverage AI tools</li><li><strong>Full-Stack Thinking:</strong> Broader understanding beyond your specialty</li><li><strong>Communication:</strong> Explaining complex technical concepts simply</li><li><strong>Adaptability:</strong> Willingness to learn new technologies quickly</li></ul><p>Focus on building a portfolio that demonstrates problem-solving skills and business impact, not just technical proficiency.</p>',
  'Navigate the changing tech job market with insights on what employers are looking for and how to position yourself for success.',
  'https://picsum.photos/seed/job-market/800/400',
  'David Kim',
  'david.kim@example.com',
  category_refs.id,
  true,
  now() - interval '3 days',
  now() - interval '6 days',
  now()
FROM category_refs WHERE slug = 'career'
UNION ALL
SELECT 
  gen_random_uuid(),
  'The Rise of Edge Computing',
  'rise-of-edge-computing',
  '<h2>Computing at the Edge</h2><p>Edge computing is moving data processing closer to where it is needed, reducing latency and bandwidth usage. This paradigm shift is enabling new classes of applications from autonomous vehicles to real-time IoT analytics.</p><h3>Benefits and Use Cases</h3><ul><li><strong>Reduced Latency:</strong> Sub-50ms response times for critical applications</li><li><strong>Bandwidth Savings:</strong> Process data locally, send only results</li><strong>Privacy:</strong> Sensitive data stays on-premise</li><li><strong>Reliability:</strong> Applications work offline or with poor connectivity</li></ul><p>Platforms like Cloudflare Workers, Vercel Edge Functions, and AWS Lambda@Edge are making edge computing accessible to every developer.</p>',
  'Understanding edge computing architecture and its impact on modern application development and deployment.',
  'https://picsum.photos/seed/edge-computing/800/400',
  'Sarah Chen',
  'sarah.chen@example.com',
  category_refs.id,
  true,
  now() - interval '6 hours',
  now() - interval '1 day',
  now()
FROM category_refs WHERE slug = 'technology';

-- Seed newsletter subscribers
INSERT INTO newsletter_subscribers (id, email, name, subscribed, subscribed_at, created_at, updated_at) VALUES
  (gen_random_uuid(), 'john.doe@example.com', 'John Doe', true, now() - interval '10 days', now() - interval '10 days', now()),
  (gen_random_uuid(), 'jane.smith@example.com', 'Jane Smith', true, now() - interval '15 days', now() - interval '15 days', now()),
  (gen_random_uuid(), 'alex.johnson@example.com', 'Alex Johnson', true, now() - interval '20 days', now() - interval '20 days', now()),
  (gen_random_uuid(), 'maria.garcia@example.com', 'Maria Garcia', true, now() - interval '5 days', now() - interval '5 days', now()),
  (gen_random_uuid(), 'robert.brown@example.com', 'Robert Brown', false, now() - interval '30 days', now() - interval '30 days', now() - interval '2 days');
