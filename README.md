# Nx React Monorepo Showcase

This is a comprehensive Nx monorepo showcasing React applications and shared libraries. It demonstrates how to organize a modern frontend project with multiple applications sharing common components, utilities, and data services.

## 🏗️ Project Structure

```
apps/
├── web-app/          # Main e-commerce web application
├── admin-app/        # Admin dashboard for managing products and users
└── mobile-app/       # Mobile-first shopping application

libs/
├── shared-ui/        # Reusable UI components (Button, Card, Header)
├── shared-utils/     # Utility functions (formatting, validation, etc.)
└── shared-data/      # Data models, services, and mock data
```

## 🚀 Applications

### Web App (`web-app`)
- **Purpose**: Main customer-facing e-commerce platform
- **Features**: Product catalog, user profiles, responsive design
- **Tech**: React, React Router, Vite
- **Run**: `npx nx serve web-app`

### Admin App (`admin-app`)
- **Purpose**: Administrative dashboard for managing the platform
- **Features**: Product management, user management, analytics dashboard
- **Tech**: React, React Router, Vite
- **Run**: `npx nx serve admin-app`

### Mobile App (`mobile-app`)
- **Purpose**: Mobile-optimized shopping experience
- **Features**: Touch-friendly interface, mobile-first design
- **Tech**: React, React Router, Vite
- **Run**: `npx nx serve mobile-app`

## 📚 Shared Libraries

### Shared UI (`@my-workspace/shared-ui`)
Reusable React components with consistent styling:
- **Button**: Customizable button component with variants
- **Card**: Flexible card component for content display
- **Header**: Navigation header with logo and menu support

### Shared Utils (`@my-workspace/shared-utils`)
Common utility functions:
- Date formatting
- Currency formatting
- Email validation
- Text manipulation
- Debounce function

### Shared Data (`@my-workspace/shared-data`)
Data models and services:
- TypeScript interfaces for User, Product, Order
- Mock data for development
- DataService class with async methods
- API response wrappers

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Serve applications
npx nx serve web-app      # http://localhost:4200
npx nx serve admin-app    # http://localhost:4201
npx nx serve mobile-app   # http://localhost:4202

# Build applications
npx nx build web-app
npx nx build admin-app
npx nx build mobile-app

# Build libraries
npx nx build shared-ui
npx nx build shared-utils
npx nx build shared-data

# Run tests
npx nx test web-app
npx nx test admin-app
npx nx test mobile-app
npx nx test shared-ui
npx nx test shared-utils
npx nx test shared-data

# Run linting
npx nx lint web-app
npx nx lint admin-app
npx nx lint mobile-app

# View project graph
npx nx graph
```

## 🎯 Key Features Demonstrated

### 1. **Code Sharing**
- All applications use the same UI components from `shared-ui`
- Common utilities are shared across all apps
- Data models and services are centralized in `shared-data`

### 2. **Type Safety**
- Full TypeScript support across all projects
- Shared interfaces ensure consistency
- Proper type checking in build process

### 3. **Modern React Patterns**
- Functional components with hooks
- Custom hooks for data fetching
- Component composition and reusability

### 4. **Responsive Design**
- Mobile-first approach in mobile app
- Responsive grid layouts
- Touch-friendly interfaces

### 5. **Development Experience**
- Hot reloading with Vite
- ESLint configuration
- Jest testing setup
- Nx dependency graph visualization

## 🔧 Configuration

### Nx Configuration
- **nx.json**: Project configuration and task definitions
- **tsconfig.base.json**: Shared TypeScript configuration
- **jest.preset.js**: Jest configuration for testing

### Build Tools
- **Vite**: Fast build tool and dev server
- **ESLint**: Code linting and formatting
- **Jest**: Unit testing framework

## 📦 Dependencies

### Core Dependencies
- React 19
- React Router DOM
- TypeScript
- Vite

### Development Dependencies
- Nx 21.5.2
- ESLint
- Jest
- TypeScript ESLint

## 🚀 Getting Started

1. **Clone and install**:
   ```bash
   git clone <repository-url>
   cd test-repo
   npm install
   ```

2. **Start development**:
   ```bash
   npx nx serve web-app
   ```

3. **Explore the applications**:
   - Web App: Browse products and user profiles
   - Admin App: Manage products and users
   - Mobile App: Mobile-optimized shopping experience

## 🎨 Design System

The monorepo includes a consistent design system with:
- **Color Palette**: Primary, secondary, and accent colors
- **Typography**: Consistent font families and sizes
- **Spacing**: Standardized padding and margins
- **Components**: Reusable UI components with variants

## 🔄 Data Flow

1. **Data Models**: Defined in `shared-data` with TypeScript interfaces
2. **Data Services**: Async methods for fetching data
3. **State Management**: React hooks for local state
4. **Component Props**: Type-safe prop interfaces

## 📱 Mobile Optimization

The mobile app demonstrates:
- Touch-friendly button sizes (44px minimum)
- Responsive grid layouts
- Mobile-first CSS approach
- Optimized for small screens

## 🧪 Testing Strategy

- **Unit Tests**: Jest for component and utility testing
- **Type Checking**: TypeScript for compile-time safety
- **Linting**: ESLint for code quality
- **Build Verification**: Nx build targets for validation

This monorepo showcases best practices for organizing React applications with shared code, modern tooling, and scalable architecture.
