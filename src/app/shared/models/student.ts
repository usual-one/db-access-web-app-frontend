import { Group } from '.';

export interface Student {
  id: number;
  name: string;
  group: Group;
  state: 'studying' | 'academic leave' | 'dismissed' | 'graduated';
}
