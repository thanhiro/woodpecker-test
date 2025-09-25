export function sharedData(): string {
  return 'shared-data';
}

// User model
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: Date;
  lastLogin?: Date;
}

// Product model
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  inStock: boolean;
  rating: number;
  createdAt: Date;
}

// Order model
export interface Order {
  id: string;
  userId: string;
  products: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

// API Response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Mock data
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    createdAt: new Date('2023-01-15'),
    lastLogin: new Date('2024-01-10'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    createdAt: new Date('2023-02-20'),
    lastLogin: new Date('2024-01-09'),
  },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    createdAt: new Date('2023-03-01'),
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracking smart watch with heart rate monitor',
    price: 299.99,
    category: 'Electronics',
    inStock: true,
    rating: 4.2,
    createdAt: new Date('2023-03-15'),
  },
];

// Data service functions
export class DataService {
  static async getUsers(): Promise<ApiResponse<User[]>> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockUsers,
          success: true,
        });
      }, 500);
    });
  }

  static async getProducts(): Promise<ApiResponse<Product[]>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockProducts,
          success: true,
        });
      }, 300);
    });
  }

  static async getUserById(id: string): Promise<ApiResponse<User | null>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = mockUsers.find(u => u.id === id);
        resolve({
          data: user || null,
          success: !!user,
          message: user ? 'User found' : 'User not found',
        });
      }, 200);
    });
  }

  static async getProductById(id: string): Promise<ApiResponse<Product | null>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = mockProducts.find(p => p.id === id);
        resolve({
          data: product || null,
          success: !!product,
          message: product ? 'Product found' : 'Product not found',
        });
      }, 200);
    });
  }
}
