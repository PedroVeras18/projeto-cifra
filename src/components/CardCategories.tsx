import { Stack, YStack, Text, Image } from "tamagui";

type CardCategoriesProps = {
    title: string;
    image: any;
}

export function CardCategories({ title, image }: CardCategoriesProps) {
    return(
        <YStack mr={20} alignItems='center'>
            <Stack w={70} h={70} bg='#FFFFFF' borderRadius={15} justifyContent="center" alignItems="center">
                <Image source={image} />
            </Stack>
            <Text mt={10} color='#000'>{title}</Text>
        </YStack>
    )
}