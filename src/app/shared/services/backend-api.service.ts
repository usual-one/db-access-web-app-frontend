import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Faculty, Group, Student, Teacher } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private hostUrl: string = environment.backendUrl;

  constructor(private http: HttpClient) { }

  public async createStudent(student: Student): Promise<void> {
    await this.http.post<Student>(`${this.hostUrl}/students`, student).toPromise();
  }

  public async createTeacher(teacher: Teacher): Promise<void> {
    await this.http.post<Teacher>(`${this.hostUrl}/teachers`, teacher).toPromise();
  }

  public async createFaculty(faculty: Faculty): Promise<void> {
    await this.http.post<Faculty>(`${this.hostUrl}/structure/faculties`, faculty).toPromise();
  }

  public async createGroup(group: Group): Promise<void> {
    await this.http.post<Group>(`${this.hostUrl}/structure/groups`, group).toPromise();
  }

  public async getFaculties(count: number, offset: number): Promise<Faculty[]> {
    return await this.http.get<Faculty[]>(`${this.hostUrl}/structure/faculties`, {
      params: {
        count: count.toString(),
        offset: offset.toString()
      }
    }).toPromise();
  }

  public async getGroups(facultyId: number, count: number, offset: number): Promise<Group[]> {
    return await this.http.get<Group[]>(`${this.hostUrl}/structure/groups`, {
      params: {
        facultyId: facultyId.toString(),
        count: count.toString(),
        offset: offset.toString() 
      }
    }).toPromise();
  }

  public async getStudents(groupId: number, count: number, offset: number): Promise<Student[]> {
    return await this.http.get<Student[]>(`${this.hostUrl}/students`, {
      params: {
        groupId: groupId.toString(),
        count: count.toString(),
        offset: offset.toString()
      }
    }).toPromise();
  }

  public async getTeachers(facultyId: number, count: number, offset: number): Promise<Teacher[]> {
    return await this.http.get<Teacher[]>(`${this.hostUrl}/teachers`, {
      params: {
        facultyId: facultyId.toString(),
        count: count.toString(),
        offset: offset.toString()
      }
    }).toPromise();
  }

  public async removeStudent(id: number): Promise<void> {
    await this.http.delete(`${this.hostUrl}/students`, {
      params: {
        id: id.toString()
      }
    }).toPromise();
  }

  public async removeTeacher(id: number): Promise<void> {
    await this.http.delete(`${this.hostUrl}/teachers`, {
      params: {
        id: id.toString()
      }
    }).toPromise();
  }

  public async removeGroup(id: number): Promise<void> {
    await this.http.delete(`${this.hostUrl}/structure/groups`, {
      params: {
        id: id.toString()
      }
    }).toPromise();
  }

  public async removeFaculty(id: number): Promise<void> {
    await this.http.delete(`${this.hostUrl}/structure/faculties`, {
      params: {
        id: id.toString()
      }
    }).toPromise();
  }

  public async updateStudent(id: number, update: Student): Promise<void> {
    await this.http.put<Student>(`${this.hostUrl}/students`, update, {
      params: {
        id: id.toString()
      }
    }).toPromise();
  }

  public async updateTeacher(id: number, update: Teacher): Promise<void> {
    await this.http.put<Teacher>(`${this.hostUrl}/teachers`, update, {
      params: {
        id: id.toString()
      }
    }).toPromise();
  }

  public async updateGroup(id: number, update: Group): Promise<void> {
    await this.http.put<Group>(`${this.hostUrl}/structure/groups`, update, {
      params: {
        id: id.toString()
      }
    }).toPromise();
  }

  public async updateFaculty(id: number, update: Faculty): Promise<void> {
    await this.http.put<Faculty>(`${this.hostUrl}/structure/faculties`, update, {
      params: {
        id: id.toString()
      }
    }).toPromise();
  }

}
