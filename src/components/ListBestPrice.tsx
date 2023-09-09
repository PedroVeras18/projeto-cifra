import { FlatList } from "react-native";
import { YStack, Text, Stack } from "tamagui";

export type ListBestPrice = {
    title: string;
}

export function ListBestPrice({ title }: ListBestPrice) {
    const items = ['1', '2', '3', '4', '5']

    return (
        <YStack h={200} mx={30}>
            <Text fontSize={15} color='#000'>{title}</Text>

            <FlatList
                data={items}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Stack w={100} h={100} bg='#FFFFFF' m={10} borderRadius={15} justifyContent="center" alignItems="center">
                        <Text>{item}</Text>
                        <Text>R$ XX,XX</Text>
                    </Stack>
                )}
            />
        </YStack>
    )
}