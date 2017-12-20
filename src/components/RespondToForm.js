// @flow

import React, { Component } from 'react';
import Section from "./RespondToForm/Section";
import {  FormType }  from "../types"

type Props = {
  form: FormType,
  increment: Function
};

export default function RespondToForm(props: Props) {
  const { form, increment } = props
  const sections = props.form.sections.map( (section, i) => <Section key={i} title={section} />);
  return (
    <div>{ sections }
    <button onClick={increment}> + </button>
    {form.get('count')}
    </div>
  );

}

