import { Stack, YStack, Text } from "tamagui";

type CardCategoriesProps = {
    title: string;
}

export function CardCategories({ title }: CardCategoriesProps) {
    return(
        <YStack mr={20} alignItems='center'>
            <Stack w={70} h={70} bg='#D9D9D9' borderRadius={15}></Stack>
            <Text mt={10} color='#000'>{title}</Text>
        </YStack>
    )
}