// @flow

import React from 'react';
import Section from "./RespondToForm/Section";
import {  FormType }  from "../types"

type Props = {
  form: FormType,
  increment: Function,
  loadExampleForm: Function,
  getForm: Function
};

export default function RespondToForm(props: Props) {
  const { form, increment, loadExampleForm, getForm } = props
  const sections = props.form.sections.map( (section, i) => <Section key={i} title={section.name} />);
  return (
    <div>{ sections }
    <button onClick={increment}> + </button>
    {form.get('count')}
    <button onClick={loadExampleForm}> Load Example Forms</button>
    <button onClick={ getForm }> Get API Forms</button>    
    </div>
  );

}

