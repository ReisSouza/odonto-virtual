import { media } from '@odonto-virtual/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'
import { mainTheme } from './themes'

export type {
  CSS,
  VariantProps,
  ComponentProps,
  ScaleValue,
  CSSProperties,
  CreateStitches,
  DefaultThemeMap,
  PropertyValue,
} from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  config,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    custom: '(prefers-color-scheme: custom)',
    ...media,
  },
  theme: mainTheme,
})

export type Theme = keyof typeof mainTheme
