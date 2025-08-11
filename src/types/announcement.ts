export interface Announcement {
  id: string;
  title: string;
  content: string;
  publishDate: string;
  type: 'notice' | 'update' | 'maintenance' | 'event';
  priority: 'high' | 'medium' | 'low';
  status: 'published' | 'draft' | 'archived';
  author: string;
  tags?: string[];
  excerpt?: string;
}

export interface AnnouncementListResponse {
  announcements: Announcement[];
  total: number;
  page: number;
  pageSize: number;
}
