// @flow
import { FormType, SectionType, QuestionType } from './types'
import { List } from 'immutable'

// We'll create an initial state for the application
const init = new FormType({
    sections: List([
        new SectionType({name: "First"}),
        new SectionType({name: "Second"})
    ]),
    count: 0
})

const secondSection : SectionType = new SectionType({
    name: "Second Local Section",
    content: "This is the content",
    order: 2
});

const firstSection: SectionType = new SectionType({
    name: "First",
    order: 1,
    content: "This is the content",
    questions: List([
        new QuestionType({
            key: "First",
            label: "First",
            type: "string",
            order: 0
        }),new QuestionType({
            key: "Second",
            label: "Second",
            type: "text",
            order: 1
        })
    ])
});
const exampleForm = new FormType({
    sections: List([secondSection, firstSection])
});
type Action = 
  | 'INCREMENT'
  | 'LOAD_EXAMPLE_FORM'

export default function reducer(form: FormType = init, action: {type: Action }) {
    switch(action.type) {
        case 'INCREMENT':
            return form.set('count', form.get('count') + 1 )
        case 'LOAD_EXAMPLE_FORM': 
            return exampleForm;
        default:
            return form
    }
}