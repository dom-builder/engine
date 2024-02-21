import { PageBuilder } from '@dom-builder/builder';
import schema from '../../tests/mocks/builder_schema.json';

export function About() {
  return (
      <PageBuilder builderSchema={schema} page='about' />
  );
}

export default About;
