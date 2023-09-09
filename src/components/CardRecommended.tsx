import { FileImage } from "phosphor-react-native";
import { Stack, Text } from "tamagui";

type CardRecommended = {
    title: string;
}

export function CardRecommended({ title }: CardRecommended) {
    return(
        <Stack flex={0.5} bg='#D9D9D9' w={150} h={150} p={10} borderRadius={15} m={10} justifyContent="center" alignItems="center">
            <FileImage size={32} weight="bold" />
            <Text mt={5} color='#FFF'>{title}</Text>
            <Text mt={5} color='#A3A3A3'>170g</Text>
            <Text mt={5} color='#3A3A3A'>R$ XX,XX</Text>
        </Stack>
    )
}