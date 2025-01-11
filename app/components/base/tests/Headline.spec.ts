import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Headline from '../Headline.vue'

describe('test headline component', () => {
  it('component renders Hello world properly in h1 tag', () => {
    const wrapper = mount(Headline, {
      props: {
        tag: 'h1',
        customClass: 'headline',
        text: 'Hello world',
      },
    })
    expect(wrapper.html()).toContain('<h1 class="headline">Hello world</h1>')
  })

  it('component renders Hello world in p when no tag is set', () => {
    const wrapper = mount(Headline, {
      props: {

        customClass: 'headline',
        text: 'Hello world',
      },
    })
    expect(wrapper.html()).toContain('<p class="headline">Hello world</p>')
  })
})
