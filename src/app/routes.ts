import { Routes } from "@angular/router";
import { AddCourseComponent } from "./course/add-course/add-course.component";
import { CourseComponent } from "./course/course.component";
import { EditCourseComponent } from "./course/edit-course/edit-course.component";
import { AddExamComponent } from "./exams/add-exam/add-exam.component";
import { ExamsComponent } from "./exams/exams.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'course', component: CourseComponent
    },
    {
        path: 'addcourse', component: AddCourseComponent
    },
    {
        path: 'exams/:id', component: ExamsComponent
    },
    {
        path: 'editCourse/:id', component: EditCourseComponent
    },
    {
        path: 'addExam/:id', component: AddExamComponent
    }
    
];
