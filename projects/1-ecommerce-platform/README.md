# E-Commerce Platform

A modern, full-stack e-commerce solution built with React frontend and Spring Boot backend. Features include user authentication, product catalog, shopping cart, and payment integration.

## 🚀 Features

- **User Authentication**: JWT-based authentication system
- **Product Catalog**: Browse and search products with filtering
- **Shopping Cart**: Add/remove items with quantity management
- **Payment Integration**: Secure payment processing with Stripe
- **Order Management**: Track orders and order history
- **Admin Dashboard**: Product and order management for administrators
- **Responsive Design**: Mobile-first responsive design

## 🛠️ Tech Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS for styling
- Axios for API calls
- React Router for navigation
- Context API for state management

**Backend:**
- Spring Boot 3.0
- Spring Security with JWT
- Spring Data JPA
- PostgreSQL database
- Stripe API integration

## 📁 Project Structure

```
ecommerce-platform/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   ├── services/
│   │   └── utils/
│   └── public/
├── backend/
│   ├── src/main/java/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── repositories/
│   │   └── services/
│   └── src/main/resources/
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Java 17+
- PostgreSQL 12+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedAmineMacherki/ecommerce-platform.git
   cd ecommerce-platform
   ```

2. **Setup Backend**
   ```bash
   cd backend
   ./mvnw clean install
   ```

3. **Setup Database**
   ```sql
   CREATE DATABASE ecommerce_db;
   ```

4. **Configure Environment Variables**
   ```bash
   # backend/src/main/resources/application.properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/ecommerce_db
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   jwt.secret=your_jwt_secret
   stripe.secret.key=your_stripe_secret_key
   ```

5. **Start Backend**
   ```bash
   ./mvnw spring-boot:run
   ```

6. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

7. **Configure Frontend Environment**
   ```bash
   # frontend/.env
   REACT_APP_API_URL=http://localhost:8080/api
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

8. **Start Frontend**
   ```bash
   npm start
   ```

## 🏗️ Architecture

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend │    │  Spring Boot    │    │   PostgreSQL    │
│                 │───▶│    Backend      │───▶│    Database     │
│   (Port 3000)   │    │   (Port 8080)   │    │   (Port 5432)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   Stripe API    │
                       │   (Payments)    │
                       └─────────────────┘
```

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

#### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/{id}` - Update product (Admin)
- `DELETE /api/products/{id}` - Delete product (Admin)

#### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove/{id}` - Remove item from cart

#### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/{id}` - Get order details

## 📸 Screenshots

### Home Page
Modern product listing with search and filtering capabilities.

### Product Details
Detailed product view with image gallery and add to cart functionality.

### Shopping Cart
Interactive cart with quantity management and total calculation.

### Checkout
Secure checkout process with Stripe payment integration.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohamed Amine Macherki**
- GitHub: [@MohamedAmineMacherki](https://github.com/MohamedAmineMacherki)
- LinkedIn: [Mohamed Amine Macherki](https://linkedin.com/in/your-profile)

## 📞 Support

For support, email your-email@example.com or create an issue in this repository.