import { StudentUser } from "./student-user";

export class TheadQuestionCourse {
    id: string;
    idCourse: string;
    idStudent: string;
    comment: string;
    like: number;
    disLike: number;
    totalComment: number;
    user: StudentUser;
    totalCommentForThead: number;
}