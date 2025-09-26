# Nx Monorepo with React and Node.js Applications

This is a comprehensive Nx monorepo showcasing React applications, Node.js APIs, and shared libraries. It demonstrates how to organize a modern full-stack project with multiple applications sharing common components, utilities, and data services.

## 🏗️ Project Structure

```
apps/
├── admin-app/        # React admin dashboard application
├── app-shell/        # React Router application shell with navigation
├── foobar-api/       # Node.js Express API with user management
└── stuff-api/        # Simple Node.js API placeholder

packages/
├── shared-ui/        # Reusable UI components (Button, Card, Header)
├── shared-utils/     # Utility functions (formatting, validation, etc.)
└── shared-data/      # Data models, services, and mock data
```

## 🚀 Applications

### App Shell (`app-shell`)
- **Purpose**: React Router application shell with navigation
- **Features**: Main application shell, routing, navigation components
- **Tech**: React Router, React, Vite, TypeScript
- **Run**: `npx nx dev app-shell` (development) or `npx nx start app-shell` (production)
- **Port**: 4200

### Admin App (`admin-app`)
- **Purpose**: Administrative dashboard application
- **Features**: React-based admin interface
- **Tech**: React, Vite, TypeScript
- **Run**: `npx nx dev admin-app` (development) or `npx nx preview admin-app` (production)
- **Port**: 4201

### Foobar API (`foobar-api`)
- **Purpose**: Node.js Express API with user management
- **Features**: RESTful API, user CRUD operations, health checks
- **Tech**: Node.js, Express, TypeScript, CORS, Morgan logging
- **Run**: `npx nx dev foobar-api`
- **Port**: 4300

### Other API (`stuff-api`)
- **Purpose**: Simple Node.js API placeholder
- **Features**: Basic Node.js application structure
- **Tech**: Node.js, TypeScript
- **Run**: `npx nx dev stuff-api`

## 📚 Shared Libraries

### Shared UI (`@my-workspace/shared-ui`)
Reusable React components with consistent styling:
- **Button**: Customizable button component with variants
- **Card**: Flexible card component for content display
- **Header**: Navigation header with logo and menu support
- **Version**: 0.0.1
- **Peer Dependencies**: React >=19.0.0

### Shared Utils (`@my-workspace/shared-utils`)
Common utility functions:
- Date formatting
- Currency formatting
- Email validation
- Text manipulation
- Debounce function
- **Version**: 0.0.1

### Shared Data (`@my-workspace/shared-data`)
Data models and services:
- TypeScript interfaces for User, Product, Order
- Mock data for development
- DataService class with async methods
- API response wrappers
- **Version**: 0.0.1

## 🛠️ Development Commands

```bash
# Install dependencies
pnpm install

# Serve applications (development)
npx nx dev admin-app      # React admin dashboard
npx nx dev app-shell      # React Router application shell
npx nx dev foobar-api   # Node.js API (port 4300)
npx nx dev stuff-api    # Node.js API placeholder

# Serve applications (production)
npx nx preview admin-app  # React admin dashboard (built version)
npx nx start app-shell    # React Router app shell (built version)

# Build applications
npx nx build admin-app
npx nx build app-shell
npx nx build foobar-api
npx nx build stuff-api

# Build libraries
npx nx build shared-ui
npx nx build shared-utils
npx nx build shared-data

# Run tests
npx nx test admin-app
npx nx test app-shell
npx nx test foobar-api
npx nx test stuff-api
npx nx test shared-ui
npx nx test shared-utils
npx nx test shared-data

# Run linting
npx nx lint admin-app
npx nx lint app-shell
npx nx lint foobar-api
npx nx lint stuff-api

# View project graph
npx nx graph

# Run affected commands
npx nx affected:build
npx nx affected:test
npx nx affected:lint
```

## 🎯 Key Features Demonstrated

### 1. **Code Sharing**
- React applications use shared UI components from `@my-workspace/shared-ui`
- Common utilities are shared across all projects via `@my-workspace/shared-utils`
- Data models and services are centralized in `@my-workspace/shared-data`

### 2. **Type Safety**
- Full TypeScript support across all projects
- Shared interfaces ensure consistency
- Proper type checking in build process

### 3. **Modern React Patterns**
- Functional components with hooks
- React Router for client-side routing
- Component composition and reusability

### 4. **Full-Stack Architecture**
- React frontend applications
- Node.js Express APIs
- Shared libraries for common functionality
- TypeScript across the entire stack

### 5. **Development Experience**
- Hot reloading with Vite for React apps
- ESLint configuration
- Jest and Vitest testing setup
- Nx dependency graph visualization
- pnpm for efficient package management

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
- React 19.1.1
- React DOM 19.1.1
- React Router 7.9.1
- Express 4.18.2
- TypeScript ~5.9.2
- Vite ^7.0.0

### Development Dependencies
- Nx 21.5.2
- ESLint ^8.0.0
- Jest ^29.0.0
- TypeScript ESLint ^6.21.0
- Vitest ^3.0.0
- Playwright ^1.36.0

### Package Manager
- pnpm (as specified in nx.json)

## 🚀 Getting Started

1. **Clone and install**:
   ```bash
   git clone <repository-url>
   cd test-repo
   pnpm install
   ```

2. **Start development**:
   ```bash
   # Start the React app shell
   npx nx dev app-shell
   
   # Or start the admin app
   npx nx dev admin-app
   
   # Or start the API
   npx nx serve foobar-api
   ```

3. **Explore the applications**:
   - App Shell: Main React Router application with navigation
   - Admin App: Administrative dashboard interface
   - Foobar API: RESTful API with user management (http://localhost:3000)

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

## 🧪 Testing Strategy

- **Unit Tests**: Jest for component and utility testing
- **E2E Tests**: Playwright for end-to-end testing
- **Type Checking**: TypeScript for compile-time safety
- **Linting**: ESLint for code quality
- **Build Verification**: Nx build targets for validation

## 🔄 Data Flow

1. **Data Models**: Defined in `@my-workspace/shared-data` with TypeScript interfaces
2. **API Services**: Express APIs provide RESTful endpoints
3. **Frontend State**: React hooks for local state management
4. **Component Props**: Type-safe prop interfaces across shared components

This monorepo showcases best practices for organizing full-stack applications with React frontends, Node.js APIs, shared code, modern tooling, and scalable architecture.
