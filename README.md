# Social Media Dashboard

A comprehensive social media analytics dashboard built with React frontend and Spring Boot microservices architecture. Features real-time data visualization, multi-platform integration, and advanced analytics capabilities.

## 🚀 Features

- **Real-time Analytics**: Live data updates with WebSocket integration
- **Multi-platform Support**: Instagram, Twitter, Facebook, LinkedIn integration
- **Advanced Visualizations**: Interactive charts and graphs with Chart.js
- **Microservices Architecture**: Scalable backend with Spring Boot
- **Performance Monitoring**: Real-time metrics and KPI tracking
- **Custom Reports**: Generate and export detailed analytics reports
- **User Management**: Role-based access control and team collaboration
- **Responsive Design**: Mobile-first responsive design

## 🛠️ Tech Stack

**Frontend:**
- React 18 with TypeScript
- Chart.js for data visualization
- Material-UI for components
- Redux Toolkit for state management
- Axios for API calls
- Socket.IO for real-time updates

**Backend:**
- Spring Boot 3.0 (Microservices)
- Spring Cloud Gateway
- Spring Security with JWT
- Redis for caching
- PostgreSQL for data storage
- Docker containerization

## 📁 Project Structure

```
social-media-dashboard/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── charts/
│   │   │   ├── dashboard/
│   │   │   └── common/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── utils/
│   └── public/
├── backend/
│   ├── api-gateway/
│   ├── analytics-service/
│   ├── user-service/
│   ├── notification-service/
│   └── data-collector-service/
├── docker-compose.yml
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Java 17+
- PostgreSQL 12+
- Redis 6+
- Docker & Docker Compose
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedAmineMacherki/social-media-dashboard.git
   cd social-media-dashboard
   ```

2. **Setup with Docker (Recommended)**
   ```bash
   # Start all services
   docker-compose up --build
   ```

3. **Manual Setup - Backend Services**
   ```bash
   # Start each microservice
   cd backend/api-gateway
   ./mvnw spring-boot:run

   cd ../analytics-service
   ./mvnw spring-boot:run

   cd ../user-service
   ./mvnw spring-boot:run
   ```

4. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

5. **Configure Environment Variables**
   ```bash
   # backend/api-gateway/src/main/resources/application.yml
   server:
     port: 8080
   
   spring:
     datasource:
       url: jdbc:postgresql://localhost:5432/social_dashboard
       username: postgres
       password: password
   
   # frontend/.env
   REACT_APP_API_URL=http://localhost:8080/api
   REACT_APP_WS_URL=http://localhost:8080/ws
   ```

## 🏗️ Architecture

### Microservices Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │    │   API Gateway   │    │  Analytics      │
│                 │───▶│   (Port 8080)   │───▶│  Service        │
│   (Port 3000)   │    │                 │    │  (Port 8081)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ├─────────────────┐
                                ▼                 ▼
                       ┌─────────────────┐ ┌─────────────────┐
                       │  User Service   │ │ Data Collector  │
                       │  (Port 8082)    │ │ Service         │
                       │                 │ │ (Port 8083)     │
                       └─────────────────┘ └─────────────────┘
                                │                 │
                                ▼                 ▼
                       ┌─────────────────┐ ┌─────────────────┐
                       │   PostgreSQL    │ │     Redis       │
                       │   Database      │ │     Cache       │
                       └─────────────────┘ └─────────────────┘
```

### API Endpoints

#### Analytics Service
- `GET /api/analytics/overview` - Dashboard overview
- `GET /api/analytics/engagement` - Engagement metrics
- `GET /api/analytics/reach` - Reach statistics
- `GET /api/analytics/demographics` - Audience demographics
- `POST /api/analytics/reports` - Generate custom reports

#### User Service
- `POST /api/auth/login` - User authentication
- `GET /api/users/profile` - User profile
- `POST /api/users/social-accounts` - Link social accounts
- `GET /api/users/permissions` - User permissions

#### Data Collector Service
- `POST /api/collector/instagram` - Collect Instagram data
- `POST /api/collector/twitter` - Collect Twitter data
- `POST /api/collector/facebook` - Collect Facebook data
- `GET /api/collector/status` - Collection status

## 📊 Dashboard Features

### Real-time Metrics
- Live follower count updates
- Engagement rate monitoring
- Post performance tracking
- Audience growth analytics

### Interactive Charts
- Line charts for growth trends
- Bar charts for engagement comparison
- Pie charts for demographic breakdown
- Heatmaps for posting time optimization

### Custom Reports
- Automated report generation
- PDF/Excel export functionality
- Scheduled report delivery
- Custom date range analysis

## 📸 Screenshots

### Main Dashboard
Comprehensive overview with key metrics, charts, and real-time updates.

### Analytics Page
Detailed analytics with interactive charts and filtering options.

### Reports Section
Custom report generation with various export formats.

### Social Accounts Management
Easy integration and management of multiple social media accounts.

## 🔧 Development

### Running Tests
```bash
# Frontend tests
cd frontend
npm test

# Backend tests (each service)
cd backend/analytics-service
./mvnw test
```

### Building for Production
```bash
# Build frontend
cd frontend
npm run build

# Build backend services
cd backend
./build-all.sh
```

### Adding New Social Platform
1. Create new collector in `data-collector-service`
2. Add API integration
3. Update analytics processing
4. Add frontend components

## 🐳 Docker Deployment

```bash
# Production deployment
docker-compose -f docker-compose.prod.yml up -d

# Development with hot reload
docker-compose -f docker-compose.dev.yml up
```

## 🔒 Security Features

- JWT-based authentication
- OAuth 2.0 for social media APIs
- Rate limiting and API throttling
- Data encryption at rest
- CORS configuration
- Input validation and sanitization

## 📈 Performance Optimization

- Redis caching for frequently accessed data
- Database query optimization
- Lazy loading for dashboard components
- API response compression
- CDN integration for static assets

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

## 🔮 Future Enhancements

- [ ] AI-powered content recommendations
- [ ] Advanced sentiment analysis
- [ ] Competitor analysis features
- [ ] Mobile app with React Native
- [ ] Integration with more social platforms
- [ ] Advanced machine learning insights
