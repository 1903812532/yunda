export interface Task {
  title: string;
  priority: 'high' | 'medium' | 'low';
  dueTime?: string;
  completedTime?: string;
  assignedTo: string;
  status: 'inProgress' | 'pending' | 'done' | 'scheduled';
}

export interface Notification {
  id: number;
  type: 'message' | 'document' | 'alert' | 'appointment';
  title: string;
  description: string;
  time: string;
  unread: boolean;
  priority: 'high' | 'medium' | 'low';
}
