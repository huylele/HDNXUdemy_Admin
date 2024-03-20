import { Course } from "./course";

export class PurchaseDetailsModel {
    idCourse : string;
    idStudent?: string;
    priceOfCourse: number;
    priceOfDiscount: number;
    idPurchaseOrder?: string;
    courses?: Course;
}