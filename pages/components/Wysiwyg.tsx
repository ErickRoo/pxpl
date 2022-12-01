import React, { FC } from 'react'
import WysiwygInterface from 'components/blocks/wysiwyg/wysiwyg.interface'
import WysiwygBlock from 'components/blocks/wysiwyg/wysiwyg'

const placeHolderIntroText1440 = {
  type: 'introText',
  backgroundToggle: false,
  modules: {
    introText: {
      eyebrow: 'Eyebrow',
      headline: {
        headline: 'H2 headline of article blog story to give context for reader.',
        headlineLevel: 2,
      },
      body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla vitae volutpat nulla, a tristique ipsum. 
        Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
        Suspendisse ac purus in purus pellentesque faucibus. 
        Aenean nec vulputate nulla. Maecenas non dolor quis dolor mollis condimentum. 
        Curabitur sit amet risus eu metus interdum rhoncus. 
        Mauris sit amet augue lacinia, iaculis elit fringilla, accumsan tellus. 
        Donec a elementum odio. Ut sit amet erat id turpis faucibus maximus. 
        In in lectus enim. Integer imperdiet at dui at lacinia.</p>`,
    },
  },
} as WysiwygInterface

const placeHolderIntroText1024768 = {
  type: 'introText',
  backgroundToggle: false,
  modules: {
    introText: {
      eyebrow: 'Eyebrow',
      headline: {
        headline: 'H3 headline of article blog story to give context for reader.',
        headlineLevel: 3,
      },
      body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. 
      Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla. Maecenas non dolor quis dolor mollis condimentum. 
      Curabitur sit amet risus eu metus interdum rhoncus. 
      Mauris sit amet augue lacinia, iaculis elit fringilla, accumsan tellus. 
      Donec a elementum odio. Ut sit amet erat id turpis faucibus maximus. 
      In in lectus enim. Integer imperdiet at dui at lacinia.</p>`,
    },
  },
} as WysiwygInterface

const placeHolderIntroText375 = {
  type: 'introText',
  backgroundToggle: false,
  modules: {
    introText: {
      eyebrow: 'Eyebrow',
      headline: {
        headline: 'H4 headline of article blog story to give context for reader.',
        headlineLevel: 4,
      },
      body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. 
      Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla. Maecenas non dolor quis dolor mollis condimentum. 
      Curabitur sit amet risus eu metus interdum rhoncus. 
      Mauris sit amet augue lacinia, iaculis elit fringilla, accumsan tellus. 
      Donec a elementum odio. Ut sit amet erat id turpis faucibus maximus. 
      In in lectus enim. Integer imperdiet at dui at lacinia.</p>`,
    },
  },
} as WysiwygInterface

const placeHolderKeyResults = {
  type: 'keyResults',
  backgroundToggle: false,
  modules: {
    keyResults: {
      eyebrow: 'Key Results',
      items: [
        {
          icon: '/images/kr-1.svg',
          content: `With a single system-of-execution, 
          sellers are equipped for successful inbound and outbound prospecting.`,
        },
        {
          icon: '/images/kr-2.svg',
          content: `Sellers are engaging more prospects with tested content, 
          all without increasing their effort.`,
        },
        {
          icon: '/images/kr-3.svg',
          content: 'Zoom is seeing accelerated conversion rates across the funnel.',
        },
      ],
    },
  },
} as WysiwygInterface

const placeHolderInlineText = {
  type: 'inlineText',
  backgroundToggle: false,
  modules: {
    inlineText: [
      {
        type: 'eyebrow',
        content: {
          eyebrow: 'Eyebrow',
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 4,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              <u>Lorem ipsum dolor</u> sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              <b>Suspendisse ac purus</b> in purus pellentesque faucibus. 
              Aenean nec vulputate nulla.
            </p>
            <p>
              Maecenas non dolor quis dolor mollis condimentum. 
              Curabitur sit amet risus eu metus interdum rhoncus. 
              Mauris sit amet augue lacinia, iaculis elit fringilla, accumsan tellus. 
              Donec a elementum odio. Ut sit amet erat id turpis faucibus maximus. 
              In in lectus enim. <del>Integer imperdiet</del> at dui at lacinia.
            </p>
          `,
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'bullets',
        content: {
          bullets: [
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'numbers',
        content: {
          numbers: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'line',
        content: {
          line: true,
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'checkMarks',
        content: {
          checkMarks: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'multiColumnBullets',
        content: {
          columns: [
            [
              `Lorem ipsum dolor sit amet, consectetur elit. 
              Lorem ipsum dolor sit amet, consectetur elit.`,
              'Lorem ipsum dolor sit amet, consectetur elit.',
              'Lorem ipsum dolor sit amet, consectetur elit.',
            ],
            [
              `Lorem ipsum dolor sit amet, consectetur elit. 
              Lorem ipsum dolor sit amet, consectetur elit.`,
              'Lorem ipsum dolor sit amet, consectetur elit.',
              'Lorem ipsum dolor sit amet, consectetur elit.',
            ],
          ],
        },
      },
    ],
  },
} as WysiwygInterface

const placeHolderInlineTextTB1440 = {
  type: 'inlineText',
  backgroundToggle: true,
  modules: {
    inlineText: [
      {
        type: 'eyebrow',
        content: {
          eyebrow: 'Eyebrow',
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 4,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
            Curabitur sit amet risus eu metus interdum rhoncus. 
            Mauris sit amet augue lacinia, iaculis elit fringilla, accumsan tellus. 
            Donec a elementum odio. Ut sit amet erat id turpis faucibus maximus. In in lectus enim. 
            Integer imperdiet at dui at lacinia.
            </p>
          `,
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'numbers',
        content: {
          numbers: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'checkMarks',
        content: {
          checkMarks: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'line',
        content: {
          line: true,
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'bullets',
        content: {
          bullets: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
    ],
  },
} as WysiwygInterface

const placeHolderInlineTextTB1024768 = {
  type: 'inlineText',
  backgroundToggle: true,
  modules: {
    inlineText: [
      {
        type: 'eyebrow',
        content: {
          eyebrow: 'Eyebrow',
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 4,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              <u>Lorem ipsum dolor</u> sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              <b>Suspendisse ac purus</b> in purus pellentesque faucibus. 
              Aenean nec vulputate nulla.
            </p>
            <p>
              Maecenas non dolor quis dolor mollis condimentum. 
              Curabitur sit amet risus eu metus interdum rhoncus. 
              Mauris sit amet augue lacinia, iaculis elit fringilla, accumsan tellus. 
              Donec a elementum odio. Ut sit amet erat id turpis faucibus maximus. 
              In in lectus enim. <del>Integer imperdiet</del> at dui at lacinia.
            </p>
          `,
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'bullets',
        content: {
          bullets: [
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'numbers',
        content: {
          numbers: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'line',
        content: {
          line: true,
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'checkMarks',
        content: {
          checkMarks: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'multiColumnBullets',
        content: {
          columns: [
            [
              `Lorem ipsum dolor sit amet, consectetur elit. 
              Lorem ipsum dolor sit amet, consectetur elit.`,
              'Lorem ipsum dolor sit amet, consectetur elit.',
              'Lorem ipsum dolor sit amet, consectetur elit.',
            ],
            [
              `Lorem ipsum dolor sit amet, consectetur elit. 
              Lorem ipsum dolor sit amet, consectetur elit.`,
              'Lorem ipsum dolor sit amet, consectetur elit.',
              'Lorem ipsum dolor sit amet, consectetur elit.',
            ],
          ],
        },
      },
    ],
  },
} as WysiwygInterface

const placeHolderInlineTextTB375 = {
  type: 'inlineText',
  backgroundToggle: true,
  modules: {
    inlineText: [
      {
        type: 'eyebrow',
        content: {
          eyebrow: 'Eyebrow',
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 4,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              <u>Lorem ipsum dolor</u> sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              <b>Suspendisse ac purus</b> in purus pellentesque faucibus. 
              Aenean nec vulputate nulla.
            </p>
            <p>
              Maecenas non dolor quis dolor mollis condimentum. 
              Curabitur sit amet risus eu metus interdum rhoncus. 
              Mauris sit amet augue lacinia, iaculis elit fringilla, accumsan tellus. 
              Donec a elementum odio. Ut sit amet erat id turpis faucibus maximus. 
              In in lectus enim. <del>Integer imperdiet</del> at dui at lacinia.
            </p>
          `,
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'bullets',
        content: {
          bullets: [
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'numbers',
        content: {
          numbers: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'line',
        content: {
          line: true,
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'checkMarks',
        content: {
          checkMarks: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
      {
        type: 'ctaButtons',
        content: {
          primaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
          secondaryCta: {
            ctaText: 'Learn more',
            ctaLink: '#',
          },
        },
      },
      {
        type: 'headline',
        content: {
          headline: {
            headline: 'Inline headline curabitur sit amet risus eu metus.',
            headlineLevel: 5,
          },
        },
      },
      {
        type: 'body',
        content: {
          body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla vitae volutpat nulla, a tristique ipsum. 
              Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
              Suspendisse ac purus in purus pellentesque faucibus. Aenean nec vulputate nulla. 
            </p>
          `,
        },
      },
      {
        type: 'bullets',
        content: {
          bullets: [
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          ],
        },
      },
    ],
  },
} as WysiwygInterface

const placeHolderSpotlight14401024 = {
  type: 'spotlight',
  backgroundToggle: false,
  modules: {
    spotlight: {
      headline: {
        headline: 'Jane Smith, CEO',
        headlineLevel: 5,
      },
      body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. 
      Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla.</p>`,
      image: '/images/jane.png',
    },
  },
} as WysiwygInterface

const placeHolderSpotlight14401024TB = {
  type: 'spotlight',
  backgroundToggle: true,
  modules: {
    spotlight: {
      headline: {
        headline: 'Jane Smith, CEO',
        headlineLevel: 5,
      },
      body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. 
      Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla.</p>`,
      image: '/images/jane.png',
    },
  },
} as WysiwygInterface

const placeHolderSpotlight768 = {
  type: 'spotlight',
  backgroundToggle: false,
  modules: {
    spotlight: {
      headline: {
        headline: 'Jane Smith, CEO',
        headlineLevel: 6,
      },
      body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. 
      Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla.</p>`,
      image: '/images/jane.png',
    },
  },
} as WysiwygInterface

const placeHolderSpotlight768TB = {
  type: 'spotlight',
  backgroundToggle: true,
  modules: {
    spotlight: {
      headline: {
        headline: 'Jane Smith, CEO',
        headlineLevel: 6,
      },
      body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. 
      Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum. Nulla nisi neque, ultrices id dui sit amet, tempus maximus nibh. 
      Suspendisse ac purus in purus pellentesque faucibus. 
      Aenean nec vulputate nulla.</p>`,
      image: '/images/jane.png',
    },
  },
} as WysiwygInterface

const placeHolderQuote = {
  type: 'quote',
  backgroundToggle: false,
  modules: {
    quote: {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a ipsum.`,
      author: 'First Lastname',
      about: 'Associate Content Editor',
    },
  },
} as WysiwygInterface

const placeHolderQuoteBT = {
  type: 'quote',
  backgroundToggle: true,
  modules: {
    quote: {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a tristique ipsum.`,
      author: 'First Lastname',
      about: 'Associate Content Editor',
    },
  },
} as WysiwygInterface

const placeHolderQuoteBT2 = {
  type: 'quote',
  backgroundToggle: true,
  modules: {
    quote: {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae volutpat nulla, a ipsum.`,
      author: 'First Lastname',
      about: 'Associate Content Editor',
    },
  },
} as WysiwygInterface

const placeHolderInlineMediaImage = {
  type: 'inlineMedia',
  backgroundToggle: false,
  modules: {
    inlineMedia: [
      {
        image: '/images/inline-media.png',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
    ],
  },
} as WysiwygInterface

const placeHolderInlineMediaImageBT = {
  type: 'inlineMedia',
  backgroundToggle: true,
  modules: {
    inlineMedia: [
      {
        image: '/images/inline-media.png',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
    ],
  },
} as WysiwygInterface

const placeHolderInlineMediaImageSlider = {
  type: 'inlineMedia',
  backgroundToggle: false,
  modules: {
    inlineMedia: [
      {
        image: '/images/inline-media.png',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
      {
        image: '/images/inline-media.png',
        caption: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
      {
        image: '/images/inline-media.png',
        caption: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
      {
        image: '/images/inline-media.png',
        caption: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
      {
        image: '/images/inline-media.png',
        caption: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
    ],
  },
} as WysiwygInterface

const placeHolderInlineMediaImageSliderBT = {
  type: 'inlineMedia',
  backgroundToggle: true,
  modules: {
    inlineMedia: [
      {
        image: '/images/inline-media.png',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
      {
        image: '/images/inline-media.png',
        caption: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
      {
        image: '/images/inline-media.png',
        caption: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
      {
        image: '/images/inline-media.png',
        caption: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
      {
        image: '/images/inline-media.png',
        caption: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat nulla.',
      },
    ],
  },
} as WysiwygInterface

const Wysiwyg: FC = () => (
  <div className="bg-butterCream">
    {/* 1440 xl */}
    <div className="hidden xl:block">
      <WysiwygBlock block={placeHolderIntroText1440} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderKeyResults} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineText} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineTextTB1440} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderSpotlight14401024} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderSpotlight14401024TB} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderQuote} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderQuoteBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImage} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageSlider} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageSliderBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
    </div>
    {/* 1024 LG */}
    <div className="hidden xl:hidden lg:block">
      <WysiwygBlock block={placeHolderIntroText1024768} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderKeyResults} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineText} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineTextTB1024768} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderSpotlight14401024} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderSpotlight14401024TB} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderQuote} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderQuoteBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImage} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageSlider} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageSliderBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
    </div>
    {/* 768 MD */}
    <div className="hidden xl:hidden lg:hidden md:block">
      <WysiwygBlock block={placeHolderIntroText1024768} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderKeyResults} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineText} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineTextTB1024768} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderSpotlight768} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderSpotlight768TB} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderQuote} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderQuoteBT2} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImage} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageSlider} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageSliderBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
    </div>
    {/* 375 SM */}
    <div className="xl:hidden lg:hidden md:hidden sm:block">
      <WysiwygBlock block={placeHolderIntroText375} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderKeyResults} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineText} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineTextTB375} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderSpotlight768} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderSpotlight768TB} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderQuote} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderQuoteBT2} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImage} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageSlider} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
      <WysiwygBlock block={placeHolderInlineMediaImageSliderBT} />
      <div style={{ padding: '2rem', backgroundColor: '#ffffff' }} />
    </div>
  </div>
)

export default Wysiwyg
