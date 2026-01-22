# Quick Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

## Frontend Setup (Next.js)

1. Open a terminal and navigate to the frontend folder:

```bash
cd frontend
```

2. Install all dependencies:

```bash
npm install
```

3. Create environment file (`.env.local`):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Organic Store
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser to [http://localhost:3000](http://localhost:3000)

## Admin Panel Setup (Vite + React)

1. Open a NEW terminal and navigate to the admin folder:

```bash
cd admin
```

2. Install all dependencies:

```bash
npm install
```

3. Create environment file (`.env`):

```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser to [http://localhost:3001](http://localhost:3001)

6. Login with any email and password (demo mode - no validation)

## Features Available

### Frontend (Customer Site)

✅ Homepage with hero section and featured products  
✅ Products listing page with filters and search  
✅ Product detail page with image gallery  
✅ Shopping cart management  
✅ Checkout process  
✅ About Us page  
✅ Contact page  
✅ Fully responsive design  
✅ SEO optimized

### Admin Panel

✅ Dashboard with analytics and charts  
✅ Product management (Add, Edit, Delete)  
✅ Order management (View, Update Status)  
✅ Category management (Add, Edit, Delete)  
✅ Authentication system  
✅ Modern UI with Tailwind CSS

## Current Status

- Both projects are **ready to run** with mock data
- All pages and components are fully implemented
- Redux state management configured
- Axios API client setup with interceptors
- **Backend integration ready** - just update environment variables

## Next Steps (Optional)

1. Build a backend API (Node.js/Express, Python/Django, etc.)
2. Update environment variables with real API URL
3. Remove mock data from components
4. Add JWT authentication
5. Implement payment gateway (Stripe/PayPal)
6. Add image upload for products
7. Deploy to production

## Tech Stack Summary

**Frontend:**

- Next.js 14 (App Router)
- React 18
- Redux Toolkit
- Axios
- Tailwind CSS
- React Icons

**Admin:**

- Vite 5
- React 18
- Redux Toolkit
- React Router v6
- Axios
- Tailwind CSS
- Recharts
- React Icons

## Troubleshooting

**Port already in use?**

- Frontend: Change port in `package.json` scripts
- Admin: Vite will auto-increment port if 3001 is busy

**Dependencies not installing?**

- Clear cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**TypeScript errors?**

- These are expected before running `npm install`
- All type dependencies will be installed automatically

## Project Structure

```
organic-store/
├── frontend/          # Next.js customer site (Port 3000)
├── admin/             # Vite admin panel (Port 3001)
└── README.md          # Full documentation
```

For detailed documentation, see [README.md](README.md)
