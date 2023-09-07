import { createTokens } from "tamagui";
import { size, space, zIndex, radius } from '@tamagui/themes'

export const tokens = createTokens({
    size,
    space,
    zIndex,
    color: {
        black: '#101010',
        white: '#FFF',
        bg: '#F4F5F6',
        green: '#1EB211',
        gray: '#E4E4E4'
    },
    radius,
})