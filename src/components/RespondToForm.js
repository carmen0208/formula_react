// @flow

import React, { Component } from 'react';
import Section from "./RespondToForm/Section";
import {  FormType }  from "../types"

type Props = {
  form: FormType,
  increment: Function,
  loadExampleForm: Function
};

export default function RespondToForm(props: Props) {
  const { form, increment, loadExampleForm } = props
  const sections = props.form.sections.map( (section, i) => <Section key={i} title={section.name} />);
  return (
    <div>{ sections }
    <button onClick={increment}> + </button>
    {form.get('count')}
    <button onClick={loadExampleForm}> Load Example Forms</button>
    </div>
  );

}

