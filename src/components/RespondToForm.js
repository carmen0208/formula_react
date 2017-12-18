// @flow

import React, { Component } from 'react';
import Section from "./RespondToForm/Section";

type SectionType = {
  title: string
};
type FormType = {
  sections: Array<SectionType>
};

type Props = {
  form: FormType
};

export default function RespondToForm(props) {
  const sections = props.form.sections.map( s => <Section title={s.title} />);
  return (
    <div>{ sections }</div>
  );

}

