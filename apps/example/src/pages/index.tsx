import { PageBuilder } from '@dom-builder/builder';
import schema from '../../tests/mocks/builder_schema.json';

export function Index() {
  return (
      <PageBuilder builderSchema={schema} />
  );
}

export default Index;
