import { parser } from '../../helpers/parser'
import { PageBuilderProps } from '../../types'

export function PageBuilder({ builderSchema, page = 'default' }: PageBuilderProps) {
  const components = parser(builderSchema[page])

  return <>{components}</>
}
