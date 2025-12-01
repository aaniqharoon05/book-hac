import React from 'react';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme-original/ColorModeToggle';

export default function ColorModeToggleWrapper(props) {
  const {colorMode} = useThemeConfig();
  const {setColorMode} = useColorMode();

  // Prevent flickering by setting the color mode immediately on mount
  React.useEffect(() => {
    if (colorMode && colorMode !== useColorMode().colorMode) {
      setColorMode(colorMode);
    }
  }, [colorMode, setColorMode]);

  return <ColorModeToggle {...props} />;
}
