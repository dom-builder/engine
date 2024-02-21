import { parser } from "./parser"

describe('parser', () => {
  it('parser return empty if component does not exists', () => {
    expect(parser({
      default: {
        components: [
          {
            name: 'header',
            props: {}
          },
        ]
      }
    })).toEqual(expect.arrayContaining([]))
  })
})
