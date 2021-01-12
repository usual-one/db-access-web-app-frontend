import { Faculty } from '.';

export interface Group {
  id: number;
  name: string;
  faculty: Faculty;
  year: number;
  type: 'bachelor' | 'master' | 'speciality' | 'post-graduate';
}
