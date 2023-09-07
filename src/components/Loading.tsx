import { Stack } from "tamagui";
import { Spinner } from "phosphor-react-native";

export function Loading() {
    return (
        <Stack flex={1} bg='bg' justifyContent='center' alignItems='center'>
            <Spinner size={30} color="green" />
        </Stack>
    )
}