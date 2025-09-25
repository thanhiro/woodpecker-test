import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Header, Card, Button } from '@my-workspace/shared-ui';
import { formatCurrency, formatDate, capitalize } from '@my-workspace/shared-utils';
import { DataService, Product, User } from '@my-workspace/shared-data';
import styles from './app.module.css';

function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, usersResponse] = await Promise.all([
          DataService.getProducts(),
          DataService.getUsers(),
        ]);
        
        if (productsResponse.success) {
          setProducts(productsResponse.data);
        }
        if (usersResponse.success) {
          setUsers(usersResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalRevenue = products.reduce((sum, product) => sum + product.price, 0);
  const totalUsers = users.length;
  const totalProducts = products.length;

  return (
    <div>
      <div className={styles.stats}>
        <Card title="Total Revenue" variant="elevated" size="small">
          <div className={styles.statValue}>{formatCurrency(totalRevenue)}</div>
        </Card>
        <Card title="Total Users" variant="elevated" size="small">
          <div className={styles.statValue}>{totalUsers}</div>
        </Card>
        <Card title="Total Products" variant="elevated" size="small">
          <div className={styles.statValue}>{totalProducts}</div>
        </Card>
      </div>

      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Product Management</h2>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Rating</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{formatCurrency(product.price)}</td>
                      <td>{capitalize(product.category)}</td>
                      <td>
                        <span className={product.inStock ? styles.inStock : styles.outOfStock}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                      <td>{product.rating}/5</td>
                      <td>
                        <Button
                          label="Edit"
                          variant="secondary"
                          size="small"
                          onClick={() => console.log('Edit product:', product.id)}
                        />
                        <Button
                          label="Delete"
                          variant="danger"
                          size="small"
                          onClick={() => console.log('Delete product:', product.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.section}>
            <h2>User Management</h2>
            <div className={styles.grid}>
              {users.map((user) => (
                <Card
                  key={user.id}
                  title={user.name}
                  variant="outlined"
                  size="medium"
                >
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Role:</strong> 
                    <span className={`${styles.role} ${styles[user.role]}`}>
                      {capitalize(user.role)}
                    </span>
                  </p>
                  <p><strong>Member since:</strong> {formatDate(user.createdAt)}</p>
                  {user.lastLogin && (
                    <p><strong>Last login:</strong> {formatDate(user.lastLogin)}</p>
                  )}
                  <div className={styles.userActions}>
                    <Button
                      label="Edit User"
                      variant="secondary"
                      size="small"
                      onClick={() => console.log('Edit user:', user.id)}
                    />
                    <Button
                      label="View Details"
                      variant="primary"
                      size="small"
                      onClick={() => console.log('View user:', user.id)}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export function App() {
  const navItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Analytics', href: '/analytics' },
  ];

  return (
    <div>
      <Header
        title="Admin Dashboard"
        subtitle="Manage your e-commerce platform"
        navItems={navItems}
        variant="dark"
      />
      
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={
            <div>
              <h1>Analytics</h1>
              <Card title="Coming Soon" variant="elevated">
                <p>Advanced analytics features will be available here.</p>
              </Card>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
