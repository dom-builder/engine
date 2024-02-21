export interface PageBuilderProps {
  builderSchema: BuilderSchemaProps;
  page?: string;
}

export interface BuilderSchemaProps {
  [key: string]: PageConfiguration;
}

export interface ComponentProps {
  [key: string]: any;
}

export interface Component {
  name: string;
  props?: ComponentProps;
  components?: Component[];
}

export interface PageConfiguration {
  page: string;
  components: Component[];
}
