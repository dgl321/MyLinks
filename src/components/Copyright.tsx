import { Flex, useColorMode } from '@chakra-ui/react'

const Copyright = () => {
  const { colorMode } = useColorMode()
  const isDarkTheme = colorMode === 'dark'

  return (
    <Flex
      fontWeight="400"
      fontSize="1.4rem"
      lineHeight="2.4rem"
      color={isDarkTheme ? 'white' : 'dark'}
      gap={2}
    ></Flex>
  )
}

export default Copyright
