// @flow
import { FormType, SectionType } from './types'
import { List } from 'immutable'

// We'll create an initial state for the application
const init = new FormType({
    sections: List([
        new SectionType([{title: "First"}]),
        new SectionType([{title: "Second"}])
    ]),
    count: 0
})
type Action = 'INCREMENT'

export default function reducer(form: FormType = init, action: {type: Action }) {
    switch(action.type) {
        case 'INCREMENT':
            return form.set('count', form.get('count') + 1 )
        default:
            return form
    }
}