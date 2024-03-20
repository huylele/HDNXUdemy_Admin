import { StudentUser } from "./student-user";

export class CourseEvaluation {
    id? : string;
    idStudent: string;
    idCourse: string;
    voteStartNumber: number;
    commentEvaluation: string;
    like?: number;
    disLike?: number;
    users?: StudentUser;
}