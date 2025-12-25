# Blog System Setup Guide

## Overview
Your website now has a complete blog management system! Here's what was added:

### Files Created/Modified:
1. **blogs.html** - Public blog listing page where visitors can see all your blog posts
2. **admin-blog.html** - Admin dashboard for creating, editing, and deleting blogs
3. **blog-single.html** - Updated to dynamically load individual blog posts
4. **index.html** - Updated navigation menu to include Blog link

## How to Use

### For Visitors (Public):
1. Click "Blog" in the navigation menu
2. Browse all published blog posts
3. Click "Read More" to view full blog content
4. Navigate between posts using "Recent Posts" sidebar

### For Admin (You):

#### Accessing Admin Panel:
1. Open your website
2. Go to the Blog page (blogs.html)
3. Click the blue "Admin" button at the bottom-right corner
4. **Login with password: `admin123`** (You can change this in admin-blog.html)

#### Creating a New Blog:
1. Log into admin panel
2. Fill in the blog form:
   - **Title**: Your blog post title
   - **Author**: Your name (defaults to "Nishan Bharati")
   - **Date**: Publication date
   - **Image URL**: Optional - URL to blog header image
   - **Excerpt**: Short summary (optional)
   - **Content**: Main blog content
   - **Tags**: Comma-separated tags (e.g., "web, programming, tips")
3. Click "Publish Blog"

#### Managing Existing Blogs:
- **Edit**: Click the "Edit" button next to any blog
- **Delete**: Click the "Delete" button (will ask for confirmation)
- **View**: Click "View Blog" to see how it looks to visitors

## Data Storage
- Blogs are stored in your browser's **localStorage**
- Data persists even after closing the browser
- Each computer/browser has its own data storage
- To backup blogs, you can export localStorage data

## Changing Admin Password
1. Open **admin-blog.html** in a code editor
2. Find this line (around line 145):
   ```javascript
   const ADMIN_PASSWORD = 'admin123';
   ```
3. Change 'admin123' to your desired password
4. Save the file

## Features Included:
✅ Create, Read, Update, Delete (CRUD) blogs
✅ Password-protected admin area
✅ Responsive design (mobile-friendly)
✅ Image support for blog posts
✅ Tags and categorization
✅ Recent posts sidebar
✅ Date formatting
✅ Excerpt support
✅ Search-friendly URLs

## Tips:
- Use high-quality images for better visual appeal
- Keep excerpts under 150 characters for best display
- Use tags consistently for better organization
- Write engaging titles to attract readers
- Format content with line breaks for readability

## Need a Backend?
Currently, blogs are stored locally in the browser. For a production website accessible from multiple devices, consider:
- Setting up a backend (Node.js, PHP, Python)
- Using a database (MongoDB, MySQL, PostgreSQL)
- Implementing user authentication
- Adding a CMS like WordPress, Strapi, or Ghost

Would you like help setting up a backend system?
