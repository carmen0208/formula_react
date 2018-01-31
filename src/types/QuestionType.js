import { Record } from "immutable";

export default class QuestionType
extends Record ({
    key: "",
    lable: "",
    type: "",
    order: 0,
    section_id: 0
}) {
    key: string;
    lable: string;
    type: string;
    order: number;
    section_id: number;
} 