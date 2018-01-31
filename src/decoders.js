// @flow

// We'll import our types so we can talk about them
import { FormType, SectionType, QuestionType } from "./types";
import { List } from "immutable";

// We'll also define some types that describe what the data we're getting from
// the server looks like. This module's job is to translate the server's data
// into our internal representation.

// Here's what the server sends us for a section.
type ApiSection = {
  id: number,
  form_id: number,
  name: string,
  order: number,
  content: string,
  created_at: string,
  updated_at: string
};

// Here's a question
type ApiQuestion = {
  id: number,
  key: string,
  label: string,
  content: string,
  order: number,
  hidden: boolean,
  question_type: string,
  validate_as: string | null,
  created_at: string,
  updated_at: string,
  section_id: number
};

// And here's a form:
type ApiForm = {
  id: number,
  sections: Array<ApiSection>,
  questions: Array<ApiQuestion>
};

// Here's how we decode an ApiQuestion into a QuestionType
function decodeQuestion(question: ApiQuestion): QuestionType {
  return new QuestionType({
    key: question.key,
    label: question.label,
    type: question.question_type,
    order: question.order,
    section_id: question.section_id
  });
}

// Here's how we decode a section
function decodeSection(
  section: ApiSection,
  questions: List<QuestionType>
): SectionType {
  return new SectionType({
    name: section.name,
    content: section.content,
    order: section.order,
    questions: List(
      questions.filter(question => {
        return question.get("section_id") === section.id;
      })
    )
  });
}

// And here's the whole form
function decodeFormType(data: ApiForm): FormType {
  // Decode the questions on their own
  const questions = List(data.questions.map(decodeQuestion));
  return new FormType({
    sections: List(
      data.sections.map(section => {
        return decodeSection(section, questions);
      })
    )
  });
}

export { decodeFormType };