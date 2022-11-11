import tailwindConfig from '../../tailwind.config'

const getCurrentBreakpoint = (width: number) => {
  const { screens } = tailwindConfig.theme

  if (width <= 375) {
    return {
      position: 'normal',
      width,
    }
  }

  const findBreakpoint = Object
    .entries(screens)
    .map(([key, value]) => { return { position: key, width: Number(value.replace('px', '')) } })
    .sort((a, b) => b.width - a.width)
    .find((oneBreakpoint) => oneBreakpoint.width <= width)

  return findBreakpoint
}

export default getCurrentBreakpoint
