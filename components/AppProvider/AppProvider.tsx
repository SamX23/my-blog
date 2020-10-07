import * as React from 'react'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import theme from '../../utils/theme'

const AppProvider: React.FC = ({ children }) => (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider value="dark">{children}</ColorModeProvider>
      </ThemeProvider>
    </CacheProvider>
)
  
export default AppProvider