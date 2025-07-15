# Task Management System

A comprehensive project management application built with Angular frontend and Spring Boot backend. Features real-time collaboration, task tracking, team management, and WebSocket integration for live updates.

## 🚀 Features

- **Real-time Collaboration**: WebSocket integration for live updates
- **Task Management**: Create, assign, and track tasks with priorities
- **Team Management**: User roles and team collaboration
- **Project Organization**: Multiple projects with kanban boards
- **File Attachments**: Upload and manage task attachments
- **Time Tracking**: Built-in time tracking for tasks
- **Notifications**: Real-time notifications for task updates
- **Responsive Design**: Mobile-first responsive design

## 🛠️ Tech Stack

**Frontend:**
- Angular 16 with TypeScript
- Angular Material for UI components
- RxJS for reactive programming
- Socket.IO for real-time communication
- Chart.js for analytics
- Angular CLI for development

**Backend:**
- Spring Boot 3.0
- Spring Security with JWT
- Spring Data JPA
- WebSocket with STOMP
- MongoDB for document storage
- Spring Boot DevTools

## 📁 Project Structure

```
task-management-system/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── guards/
│   │   │   └── shared/
│   │   ├── assets/
│   │   └── environments/
│   ├── angular.json
│   └── package.json
├── backend/
│   ├── src/main/java/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── services/
│   │   └── websocket/
│   └── src/main/resources/
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Java 17+
- MongoDB 4.4+
- Angular CLI 16+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedAmineMacherki/task-management-system.git
   cd task-management-system
   ```

2. **Setup Backend**
   ```bash
   cd backend
   ./mvnw clean install
   ```

3. **Setup Database**
   ```bash
   # Start MongoDB (if using Docker)
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   
   # Or install MongoDB locally
   # https://docs.mongodb.com/manual/installation/
   ```

4. **Configure Environment Variables**
   ```bash
   # backend/src/main/resources/application.properties
   spring.data.mongodb.uri=mongodb://localhost:27017/taskmanagement
   jwt.secret=your_jwt_secret_key_here
   jwt.expiration=86400000
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
   # frontend/src/environments/environment.ts
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8080/api',
     wsUrl: 'http://localhost:8080/ws'
   };
   ```

8. **Start Frontend**
   ```bash
   ng serve
   ```

## 🏗️ Architecture

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Angular Client │    │  Spring Boot    │    │    MongoDB      │
│                 │───▶│    Backend      │───▶│    Database     │
│   (Port 4200)   │    │   (Port 8080)   │    │   (Port 27017)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │
         └───────────────────────┘
              WebSocket Connection
```

### API Endpoints

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/refresh` - Refresh JWT token

#### Projects
- `GET /api/projects` - Get user projects
- `POST /api/projects` - Create new project
- `GET /api/projects/{id}` - Get project details
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

#### Tasks
- `GET /api/projects/{projectId}/tasks` - Get project tasks
- `POST /api/projects/{projectId}/tasks` - Create task
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task
- `POST /api/tasks/{id}/assign` - Assign task to user

#### Teams
- `GET /api/teams` - Get user teams
- `POST /api/teams` - Create team
- `POST /api/teams/{id}/members` - Add team member
- `DELETE /api/teams/{id}/members/{userId}` - Remove team member

#### WebSocket Events
- `/topic/projects/{projectId}/tasks` - Task updates
- `/topic/projects/{projectId}/notifications` - Project notifications
- `/user/queue/notifications` - Personal notifications

## 📸 Screenshots

### Dashboard
Modern dashboard with project overview, recent tasks, and team activity.

### Kanban Board
Interactive kanban board with drag-and-drop functionality for task management.

### Task Details
Comprehensive task view with comments, attachments, and time tracking.

### Team Management
Team collaboration features with role-based permissions.

## 🔧 Development

### Running Tests
```bash
# Frontend tests
cd frontend
ng test

# Backend tests
cd backend
./mvnw test
```

### Building for Production
```bash
# Build frontend
cd frontend
ng build --prod

# Build backend
cd backend
./mvnw clean package
```

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up --build
```

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

- [ ] Mobile app with React Native
- [ ] Advanced analytics and reporting
- [ ] Integration with third-party tools (Slack, Jira)
- [ ] AI-powered task recommendations
- [ ] Advanced file management system