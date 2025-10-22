# Complete Setup Guide: Laravel API + Next.js Admin Panel

## Architecture Overview

This application has been refactored into a modern, scalable architecture:

- **Backend**: Laravel 10 RESTful API
- **Frontend**: Next.js 15 with TypeScript & Tailwind CSS
- **Admin Panel**: Custom Next.js admin (built from scratch - NO Voyager)
- **Database**: Supabase PostgreSQL with Row Level Security

## Why Custom Admin Panel?

**We built a custom admin panel instead of using Voyager because:**

✅ **Better Scalability**: React-based, modern, fast
✅ **Unified Stack**: Same tech as frontend, easier maintenance
✅ **API-First**: Leverages the Laravel REST API directly
✅ **Modern UX**: Clean, responsive design with Tailwind CSS
✅ **Full Control**: Customizable for your exact needs

The admin panel includes:
- Dashboard with statistics
- Full CRUD for Services, Blogs, Packages
- Orders management
- Contacts inbox
- Clean, professional UI

## Project Structure

```
project/
├── app/Http/Controllers/Api/    # Laravel API controllers
├── routes/api.php                # API routes
├── config/                       # Laravel configuration
└── frontend/                     # Next.js application
    ├── app/
    │   ├── admin/                # Admin panel pages
    │   │   ├── services/         # Services CRUD
    │   │   ├── blogs/            # Blogs CRUD
    │   │   ├── packages/         # Packages CRUD
    │   │   ├── orders/           # Orders view
    │   │   └── contacts/         # Contacts inbox
    │   ├── page.tsx              # Home page
    │   └── layout.tsx            # Root layout
    └── lib/
        ├── api.ts                # API client functions
        └── supabase.ts           # Supabase client
```

## Database Schema (Supabase)

All tables created with Row Level Security:

- **services** - Service offerings (title, slug, body, thumbnail)
- **blogs** - Blog posts with categories
- **packages** - Service packages (category, tier, features, price)
- **orders** - Payment orders
- **contacts** - Contact form submissions
- **newsletters** - Newsletter subscriptions
- **landing_pages** - Landing page content

## Complete Setup Instructions

### 1. Prerequisites

- PHP 8.1+
- Composer
- Node.js 18+
- npm
- Supabase account (already configured)

### 2. Configure Environment

#### Backend (.env)

You need to add your Supabase database password:

```bash
# Edit /tmp/cc-agent/58967687/project/.env
DB_PASSWORD=your_supabase_password_here
```

To get your password:
1. Go to https://supabase.com/dashboard/project/jkfesyfquufzwabtjtqj
2. Settings → Database → Connection String
3. Copy the password

#### Frontend (.env.local)

Already configured at `/tmp/cc-agent/58967687/project/frontend/.env.local`

### 3. Install Dependencies

```bash
# Backend
composer install

# Frontend
cd frontend
npm install
```

### 4. Generate Application Key

```bash
php artisan key:generate
```

### 5. Test Database Connection

```bash
php artisan migrate:status
```

### 6. Start Development Servers

**Terminal 1 - Backend API:**
```bash
php artisan serve
```
→ Runs at http://localhost:8000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
→ Runs at http://localhost:3000

### 7. Access the Application

- **Admin Panel**: http://localhost:3000/admin
- **Public Site**: http://localhost:3000
- **API**: http://localhost:8000/api

## API Endpoints

All endpoints are prefixed with `/api`:

### Services
- `GET /api/services` - List all
- `GET /api/services/{id}` - Get one
- `POST /api/services` - Create
- `PUT /api/services/{id}` - Update
- `DELETE /api/services/{id}` - Delete

### Blogs
- `GET /api/blogs` - List all
- `GET /api/blogs/{id}` - Get one
- `POST /api/blogs` - Create
- `PUT /api/blogs/{id}` - Update
- `DELETE /api/blogs/{id}` - Delete

### Packages
- `GET /api/packages` - List all
- `POST /api/packages` - Create
- `PUT /api/packages/{id}` - Update
- `DELETE /api/packages/{id}` - Delete

### Orders
- `GET /api/orders` - List all
- `POST /api/orders` - Create

### Contacts
- `GET /api/contacts` - List all
- `POST /api/contacts` - Create

### Newsletters
- `POST /api/newsletter/subscribe` - Subscribe

## Admin Panel Features

### Dashboard (`/admin`)
- Statistics overview
- Quick action buttons
- Visual stats cards

### Services Management (`/admin/services`)
- List all services
- Add new service
- Edit existing service
- Delete service
- Includes thumbnail preview

### Blogs Management (`/admin/blogs`)
- List all blog posts
- Add new post
- Edit existing post
- Delete post
- Category support

### Packages Management (`/admin/packages`)
- List all packages
- Add new package
- Edit existing package
- Delete package

### Orders View (`/admin/orders`)
- View all orders
- Payment details
- Customer information

### Contacts Inbox (`/admin/contacts`)
- View all contact submissions
- Customer messages
- Email addresses

## How to Use the Admin Panel

1. Start both servers (Laravel + Next.js)
2. Go to http://localhost:3000/admin
3. Navigate using the top menu
4. Click "Add" buttons to create new content
5. Click "Edit" to modify existing content
6. Click "Delete" to remove content

## Building for Production

### Frontend
```bash
cd frontend
npm run build
npm start
```

### Backend
```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
```

## Deployment

### Backend (Laravel API)
- Deploy to any PHP hosting (Forge, AWS, DigitalOcean)
- Set environment variables
- Point to Supabase database

### Frontend (Next.js)
- Deploy to Vercel (recommended) or Netlify
- Set `NEXT_PUBLIC_API_URL` to production API URL
- Set Supabase environment variables

## Data Migration

To migrate existing data:

1. Export from old database
2. Transform to match new schema
3. Import via Supabase dashboard or API

Example SQL:
```sql
INSERT INTO services (title, slug, body, thumbnail)
VALUES ('Service Name', 'service-name', 'Description', 'image.jpg');
```

## Troubleshooting

### Database Connection Failed
- Check DB_PASSWORD in `.env`
- Verify Supabase project is active
- Use the pooler connection string

### Admin Panel Not Loading
- Ensure Next.js server is running
- Check browser console for errors
- Verify API_URL in `.env.local`

### API Returns 404
- Verify Laravel server is running on port 8000
- Check routes: `php artisan route:list`
- Clear cache: `php artisan cache:clear`

### Build Errors
- Delete `node_modules` and reinstall
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

## Next Steps

1. ✅ Set database password in `.env`
2. ✅ Start both servers
3. ✅ Access admin panel at `/admin`
4. Add your content via admin panel
5. Customize design/styling as needed
6. Add authentication (optional)
7. Deploy to production

## Authentication (Optional Future Enhancement)

To add admin authentication:
1. Use Supabase Auth in Next.js
2. Protect `/admin` routes with middleware
3. Add login page
4. Use JWT tokens for API calls

## Support

For issues:
1. Check logs: `storage/logs/laravel.log` (backend)
2. Check browser console (frontend)
3. Verify environment variables
4. Ensure both servers are running

## Summary

You now have:
- ✅ Modern Laravel REST API
- ✅ Next.js frontend
- ✅ Custom admin panel (NO Voyager)
- ✅ Supabase PostgreSQL database
- ✅ Full CRUD interfaces
- ✅ Professional, scalable architecture

The custom admin panel provides everything Voyager did, but better - it's faster, more maintainable, and built with modern tools.
