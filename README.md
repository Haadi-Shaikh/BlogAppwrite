INK. — MegaBlog

INK. is a modern full-stack blogging application where users can create an account, publish rich-text articles, upload featured images, and manage their own posts. It was built as a practical React project to demonstrate authentication, protected routes, form handling, state management, cloud storage, and production deployment.

Live Demo

Open INK. MegaBlog

Features

User registration, login, logout, and persistent authentication

Public home page with active blog posts

Individual article pages with rich-text content

Create, edit, and delete personal posts

Featured-image uploads and previews

Active and inactive publishing status

Protected routes for authenticated users

Responsive dark interface

Rich-text editing with TinyMCE

Cloud database and file storage with Appwrite

Global authentication and post state with Redux Toolkit

Tech Stack

Area

Technology

Frontend

React, Vite

Styling

Tailwind CSS

State management

Redux Toolkit

Routing

React Router

Forms

React Hook Form

Rich-text editor

TinyMCE

Backend service

Appwrite

Authentication

Appwrite Account

Database

Appwrite Databases

File storage

Appwrite Storage

Deployment

Netlify

Application Routes

Route

Purpose

Access

/

Display active articles

Public

/login

Sign in to an account

Guest

/signup

Create an account

Guest

/all-posts

Browse published articles

Public

/post/:slug

Read a complete article

Public

/add-post

Create a new article

Authenticated

/edit/:slug

Edit an owned article

Authenticated

Local Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL
cd megablog

Install dependencies:

npm install

Create a .env file in the project root:

VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_API_KEY=your_tinymce_api_key

Start the development server:

npm run dev

Create a production build:

npm run build

Match the environment-variable names above with the names used in your configuration file. Never commit the real .env file.

Appwrite Setup

Create an Appwrite project with:

An email/password authentication provider

A database and posts collection

A storage bucket for featured images

A Web platform for localhost

A Web platform for blogappwritee.netlify.app

The posts collection should contain fields for the title, slug, content, status, featured-image file ID, and user ID. Configure document and bucket permissions so authenticated users can create content and owners can update or delete their own content.

TinyMCE Setup

Create a TinyMCE Cloud API key and expose it to Vite as VITE_TINYMCE_API_KEY. Add blogappwritee.netlify.app to the key's approved domains. Netlify environment variables are injected during the build, so trigger a fresh deployment after changing the key.

Deploying to Netlify

Build command: npm run build

Publish directory: dist

For React Router routes to work after a browser refresh, create public/\_redirects containing:

/\* /index.html 200

Add every required VITE\_\* variable in Netlify's environment settings and redeploy the site.

Future Improvements

Search and category filters

Comments and reactions

Author profile pages

Draft autosaving

Reading-time estimates

Pagination

Accessible image-alt-text controls

Automated tests

Author

Haadi Shaikh
BSc IT graduate and MERN-stack developer focused on building practical full-stack web applications.

License

This project is available for learning and portfolio demonstration.
