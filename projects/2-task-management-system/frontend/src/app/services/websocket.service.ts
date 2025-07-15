import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export interface TaskUpdate {
  id: string;
  action: 'created' | 'updated' | 'deleted' | 'assigned';
  task: any;
  projectId: string;
  userId: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: Socket | null = null;
  private connected = new BehaviorSubject<boolean>(false);
  public connected$ = this.connected.asObservable();

  private taskUpdates = new BehaviorSubject<TaskUpdate | null>(null);
  public taskUpdates$ = this.taskUpdates.asObservable();

  private notifications = new BehaviorSubject<Notification | null>(null);
  public notifications$ = this.notifications.asObservable();

  constructor(private authService: AuthService) {}

  connect(): void {
    const token = this.authService.getToken();
    if (!token) return;

    this.socket = io(environment.wsUrl, {
      auth: {
        token: token
      },
      transports: ['websocket']
    });

    this.socket.on('connect', () => {
      console.log('WebSocket connected');
      this.connected.next(true);
    });

    this.socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
      this.connected.next(false);
    });

    this.socket.on('task-update', (data: TaskUpdate) => {
      this.taskUpdates.next(data);
    });

    this.socket.on('notification', (data: Notification) => {
      this.notifications.next(data);
    });

    this.socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.connected.next(false);
    }
  }

  joinProject(projectId: string): void {
    if (this.socket) {
      this.socket.emit('join-project', projectId);
    }
  }

  leaveProject(projectId: string): void {
    if (this.socket) {
      this.socket.emit('leave-project', projectId);
    }
  }

  sendTaskUpdate(projectId: string, taskUpdate: TaskUpdate): void {
    if (this.socket) {
      this.socket.emit('task-update', { projectId, ...taskUpdate });
    }
  }

  sendNotification(userId: string, notification: Omit<Notification, 'id' | 'timestamp' | 'read'>): void {
    if (this.socket) {
      this.socket.emit('notification', { userId, ...notification });
    }
  }
}