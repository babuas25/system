# TripFeels Project Structure

## 📁 Complete Project Map

```
tripfeels/
├── 📄 DESIGN_SYSTEM_IMPROVEMENTS.md    # Design system documentation
├── 📄 next-env.d.ts                    # Next.js TypeScript declarations
├── 📄 next.config.js                   # Next.js configuration with SEO & security
├── 📄 package.json                     # Dependencies and scripts
├── 📄 package-lock.json                # Dependency lock file
├── 📄 postcss.config.js                # PostCSS configuration
├── 📄 production.rules                 # Firebase Firestore security rules
├── 📄 projectmap.md                    # This file - project structure
├── 📄 roadmap.md                       # Project roadmap and requirements
├── 📄 tailwind.config.ts               # Tailwind CSS configuration
├── 📄 tsconfig.json                    # TypeScript configuration
├── 📁 public/                          # Static assets
│   ├── 📄 favicon.ico                  # Site favicon
│   ├── 📄 robots.txt                   # SEO robots configuration
│   ├── 📄 sitemap.xml                  # SEO sitemap
│   └── 📁 fonts/                       # Custom fonts
│       ├── 📄 GoogleSans-Bold.ttf      # Custom logo font
│       └── 📄 README.md                # Font documentation
└── 📁 src/                             # Source code
    ├── 📁 app/                         # Next.js 14 App Router
    │   ├── 📁 (auth)/                  # Auth route group
    │   │   ├── 📁 auth/
    │   │   │   └── 📄 page.tsx         # Sign In/Register page
    │   │   └── 📄 layout.tsx           # Auth layout wrapper
    │   ├── 📁 (dashboard)/             # Dashboard route group
    │   │   ├── 📄 layout.tsx           # Dashboard layout
    │   │   ├── 📁 superadmin/          # SuperAdmin routes
    │   │   │   ├── 📁 admin/
    │   │   │   │   ├── 📄 page.tsx     # SuperAdmin dashboard
    │   │   │   │   └── 📁 user-management/
    │   │   │   │       └── 📄 page.tsx # User management interface
    │   │   │   └── 📁 theme/
    │   │   │       ├── 📄 page.tsx     # Theme management
    │   │   │       └── 📄 SlideshowManager.tsx # Slideshow component
    │   │   ├── 📁 theme-demo/
    │   │   │   └── 📄 page.tsx         # Theme demonstration
    │   │   └── 📁 users/               # User role dashboards
    │   │       ├── 📁 admin/
    │   │       │   ├── 📄 page.tsx     # Admin dashboard
    │   │       │   └── 📁 user-management/
    │   │       │       └── 📄 page.tsx # Admin user management
    │   │       ├── 📁 agent/
    │   │       │   └── 📄 page.tsx     # Agent dashboard
    │   │       ├── 📁 partner/
    │   │       │   └── 📄 page.tsx     # Partner dashboard
    │   │       ├── 📁 publicuser/
    │   │       │   └── 📄 page.tsx     # Public user dashboard
    │   │       └── 📁 staff/
    │   │           └── 📄 page.tsx     # Staff dashboard
    │   ├── 📁 api/                     # API routes
    │   │   ├── 📁 admin/
    │   │   │   └── 📁 users/
    │   │   │       ├── 📁 [uid]/
    │   │   │       │   └── 📄 route.ts # User CRUD operations
    │   │   │       └── 📄 route.ts     # Users list endpoint
    │   │   ├── 📁 auth/
    │   │   │   └── 📁 [...nextauth]/
    │   │   │       └── 📄 route.ts     # NextAuth configuration
    │   │   ├── 📁 dashboard/
    │   │   │   └── 📁 stats/
    │   │   │       └── 📄 route.ts     # Dashboard statistics
    │   │   ├── 📁 debug/
    │   │   │   ├── 📁 user-data/
    │   │   │   │   └── 📄 route.ts     # Debug user data
    │   │   │   └── 📁 users/
    │   │   │       └── 📄 route.ts     # Debug users endpoint
    │   │   ├── 📁 fix-ashif-role/
    │   │   │   └── 📄 route.ts         # Role fix utility
    │   │   ├── 📁 fix-user-roles/
    │   │   │   └── 📄 route.ts         # User roles fix utility
    │   │   ├── 📁 superadmin/
    │   │   │   └── 📁 slides/
    │   │   │       ├── 📁 [id]/
    │   │   │       │   └── 📄 route.ts # Individual slide operations
    │   │   │       └── 📄 route.ts     # Slides management
    │   │   ├── 📁 sync-users/
    │   │   │   └── 📄 route.ts         # User synchronization
    │   │   └── 📁 test-user-creation/
    │   │       └── 📄 route.ts         # Test user creation
    │   ├── 📄 globals.css              # Global styles and CSS variables
    │   ├── 📄 home-page-client.tsx     # Home page client component
    │   ├── 📄 layout.tsx               # Root layout with SEO
    │   ├── 📄 not-found.tsx            # 404 error page
    │   └── 📄 page.tsx                 # Home page
    ├── 📁 components/                  # React components
    │   ├── 📁 auth/
    │   │   └── 📄 AuthSlideshow.tsx    # Authentication slideshow
    │   ├── 📁 dashboard/
    │   │   ├── 📄 dashboard-home.tsx   # Main dashboard component
    │   │   └── 📄 stats-card.tsx       # Statistics card component
    │   ├── 📁 examples/
    │   │   ├── 📄 design-system-examples.tsx    # Design system showcase
    │   │   └── 📄 dynamic-theme-examples.tsx    # Theme examples
    │   ├── 📁 layout/
    │   │   ├── 📄 header.tsx           # Header component
    │   │   ├── 📄 navbar.tsx           # Navigation bar
    │   │   └── 📄 sidebar.tsx          # Sidebar navigation
    │   ├── 📁 providers/
    │   │   ├── 📄 session-provider.tsx # Session context provider
    │   │   └── 📄 theme-provider.tsx   # Theme context provider
    │   └── 📁 ui/                      # shadcn/ui components
    │       ├── 📄 button.tsx           # Button component
    │       ├── 📄 card.tsx             # Card component
    │       ├── 📄 custom-dropdown.tsx  # Custom dropdown
    │       ├── 📄 dynamic-theme-components.tsx # Dynamic theme components
    │       ├── 📄 form.tsx             # Form components
    │       ├── 📄 glass-button.tsx     # Glass morphism button
    │       ├── 📄 glass-card.tsx       # Glass morphism card
    │       ├── 📄 glass-components.tsx # Glass morphism components
    │       ├── 📄 input.tsx            # Input component
    │       ├── 📄 label.tsx            # Label component
    │       ├── 📄 skeleton-loading.tsx # Loading skeleton
    │       ├── 📄 splash-screen.tsx    # Splash screen component
    │       └── 📄 tabs.tsx             # Tabs component
    ├── 📁 contexts/
    │   └── 📄 theme-context.tsx        # Theme context
    ├── 📁 lib/                         # Utility libraries
    │   ├── 📁 auth/
    │   │   └── 📄 nextauth.ts          # NextAuth configuration
    │   ├── 📁 firebase/
    │   │   ├── 📄 admin.ts             # Firebase Admin SDK
    │   │   ├── 📄 config.ts            # Firebase client config
    │   │   ├── 📄 firestore.ts         # Firestore utilities
    │   │   └── 📄 slides.ts            # Slides management
    │   ├── 📁 utils/
    │   │   ├── 📄 constants.ts         # Application constants
    │   │   └── 📄 validation.ts        # Zod validation schemas
    │   ├── 📄 color-scheme-guide.md    # Color scheme documentation
    │   ├── 📄 design-system-guide.md   # Design system documentation
    │   ├── 📄 design-tokens.ts         # Design tokens
    │   ├── 📄 dynamic-theme-colors.ts  # Dynamic theme colors
    │   ├── 📄 ui-utils.ts              # UI utility functions
    │   └── 📄 utils.ts                 # General utilities
    ├── 📁 types/
    │   └── 📄 next-auth.d.ts           # NextAuth type extensions
    └── 📄 middleware.ts                # Route protection middleware
```

## 🏗️ Architecture Overview

### **Frontend Architecture**

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React Context + NextAuth sessions
- **Type Safety**: Full TypeScript implementation
- **Theme System**: Dynamic theme with glass morphism design

### **Backend Architecture**

- **Authentication**: NextAuth.js with multiple providers
- **Database**: Firebase Firestore (NoSQL)
- **API**: Next.js API routes with server-side validation
- **Security**: Role-based access control (RBAC)
- **Real-time**: Firebase real-time listeners

### **Security Implementation**

- **Authentication**: Google, Facebook, Email/Password
- **Authorization**: 6-tier role hierarchy (SuperAdmin → User)
- **Route Protection**: Middleware-based access control
- **Data Validation**: Zod schemas for all inputs
- **Security Headers**: CSP, XSS protection, CSRF prevention

## 🔐 Role-Based Access Control (RBAC)

### **Role Hierarchy**

1. **SuperAdmin** - Full system access
2. **Admin** - User management and system settings
3. **Staff** - Internal operations (6 sub-roles)
4. **Partner** - External partnerships (2 sub-roles)
5. **Agent** - Sales and distribution (3 sub-roles)
6. **User** - Basic user access

### **Dashboard Routes**

- SuperAdmin: `/superadmin/admin`
- Admin: `/users/admin`
- Staff: `/users/staff`
- Partner: `/users/partner`
- Agent: `/users/agent`
- User: `/users/publicuser`

## 🎨 Design System

### **Theme Architecture**

- **Base Theme**: Light/Dark mode support
- **Custom Colors**: Primary, secondary, accent color schemes
- **Glass Morphism**: Modern glass-effect components
- **Typography**: Geist Sans + Poppins + Google Sans
- **Responsive**: Mobile-first design approach

### **Component Library**

- **shadcn/ui**: Base component system
- **Custom Components**: Glass morphism variants
- **Form Components**: React Hook Form + Zod validation
- **Layout Components**: Header, sidebar, navigation

## 📊 Key Features

### **Authentication System**

- Multi-provider authentication (Google, Facebook, Email)
- Automatic role assignment for special emails
- Session management with JWT tokens
- Secure password requirements

### **User Management**

- Role-based user creation and management
- Profile management with validation
- User statistics and analytics
- Bulk user operations

### **Theme Management**

- Dynamic theme switching
- Slideshow management for auth pages
- Custom color schemes
- Responsive design system

### **API Endpoints**

- User CRUD operations
- Role management
- Dashboard statistics
- Debug and utility endpoints
- Slideshow management

## 🚀 Performance & SEO

### **SEO Optimization**

- Comprehensive meta tags
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Open Graph and Twitter cards
- Performance optimizations

### **Performance Features**

- Next.js 15 optimizations
- Image optimization
- Code splitting
- Font optimization
- CSS purging

## 🔧 Development Tools

### **Configuration Files**

- `next.config.js` - Next.js configuration with security headers
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

### **Security Rules**

- `production.rules` - Firebase Firestore security rules
- Comprehensive access control
- Data validation rules
- Audit logging

## 📈 Scalability Features

### **Database Design**

- NoSQL Firestore structure
- Optimized queries with indexes
- Real-time data synchronization
- Scalable user management

### **Code Organization**

- Modular component architecture
- Reusable utility functions
- Type-safe implementations
- Clean separation of concerns

## 🎯 Project Status

**Current Version**: 0.1.0  
**Framework**: Next.js 14.5.3  
**TypeScript**: Full implementation  
**Testing**: Not implemented (recommended)  
**Deployment**: Production-ready

---

_This project structure represents a modern, scalable, and secure role-based dashboard application built with enterprise-grade practices._
