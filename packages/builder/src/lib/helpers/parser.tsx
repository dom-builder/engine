import { resolver } from './containers'
import { Suspense, useId } from 'react'

function builtinKey() {
  return Math.random().toString(36).substring(7)
}

export function parser(builderSchema: any, options: any = {
  children: false
}) {
  if (!Array.isArray(builderSchema?.components)) return null

  const components = builderSchema['components'].map((node: any) => {
    return componentParser(node['name'], node['props'], {
      components: node?.components ?? {},
    })
  })

  return components
}

function componentParser(componentName: string, props: any, options: any) {
  const Component = resolver(componentName)
  let children = null

  if (!Component) {
    console.warn(`${componentName} not found`)
    return null
  }

  if (options?.components) {
    children = parser({ components: options.components })
    props = { children, ...props }
  }
  
  return (
    <Suspense>
      <Component {...props} key={builtinKey()} />
    </Suspense>
  )
}
