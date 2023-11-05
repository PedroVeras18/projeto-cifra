import { Stack, Text, Image } from "tamagui";

interface ICardRecommended {
    item: {
        image: any
        name: string
        weight: string
        price: string
    }
}

export function CardRecommended({ item }: ICardRecommended) {
    return (
        <Stack flex={0.5} bg='#FFF' w={150} h={170} p={10} borderRadius={15} m={10} justifyContent="center">
            <Stack bg='#FFFFFF' justifyContent="center" alignItems="center">
                <Image source={item.image} />
            </Stack>
            <Stack alignItems={"flex-start"} mt={2}>
                <Text mt={5} color='#000'>{item.name}</Text>
                <Text mt={5} color='#A3A3A3'>{item.weight}</Text>
                <Text mt={5} color='#3A3A3A'>{item.price}</Text>
            </Stack>
        </Stack>
    )
}