import { Record,List } from "immutable";
import QuestionType from "./QuestionType";

// export default class SectionType extends Record ({
//     title: ''
// }){
//     title: string
// }

export default class SectionType extends Record ({
    // title: '',
    name: "default section",
    order: 0,
    content: "this is a default section",
    questions: List()
}){
    // title: string;
    name: string;
    order: number;
    content: string;
    questions: List<QuestionType>
}