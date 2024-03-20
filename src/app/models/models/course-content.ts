export class CourseContent {
    id?: string;
    name: string;
    idCourse: string;
}

export class CourseContentDetails {
    id?: string;
    idContent: string;
    nameSubContent: string;
    timeOfContent: string;
    isLearningFree : boolean;
    idVideoUpload: string;
    fileNameVideo: string;
    isFinishConvert :boolean;
    fileUploadUrlStream?: string;
}