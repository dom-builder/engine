import { Fragment } from 'react'
import { parser } from '../../helpers/parser'
import { PageBuilderProps } from '../../types'

export function PageBuilder({ builderSchema, page = 'default' }: PageBuilderProps) {
  const components = (parser(builderSchema[page]) ?? []).map((component, index) => {
    return <Fragment key={index}>{component}</Fragment>
  })

  return <Fragment>{components}</Fragment>
}
