import { FlatList } from 'react-native';
import { MagnifyingGlass, SignOut } from "phosphor-react-native"
import { Input, Stack, Text, YStack, XStack } from "tamagui"
import { CardCategories } from '@components/CardCategories';
import { CardRecommended } from '@components/CardRecommended';
import { useAuthService } from '@store/useAuth';

export function Home() {
    const { logout, userAuth } = useAuthService()

    const categories = ['Frios', 'Bebidas', 'Açougue', 'Hortifruti', 'Higiene e Limpeza', 'Sanduíches', 'Pizzaria', 'Sushi']
    const productRecommended = ['Banana da Terra', 'Produto 1', 'Produto 2', 'Produto 3']

    return (
        <Stack bg='#F4F5F6' flex={1}>
            <YStack width='100%' px={30} mt={70}>
                <XStack justifyContent='space-between' alignItems='center'>
                    <YStack>
                        <Text fontSize={15} color='gray' mb={6}>{userAuth?.username}</Text>
                        <Text fontSize={20} color='#000'>{userAuth?.email}</Text>
                    </YStack>

                    <Stack onPress={logout}>
                        <SignOut size={32} weight="bold" />
                    </Stack>
                </XStack>

                <XStack backgroundColor='#FFF' justifyContent="space-between" alignItems="center" elevation={5} borderRadius={10} h={60} mt={15} pr={19}>
                    <Input
                        placeholder="Procurar produto..."
                        borderColor='#FFF' h={60}
                    />
                    <MagnifyingGlass size={32} weight="bold" color='#9F9F9F' />
                </XStack>
            </YStack>

            <Stack px={30} mt={20}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <CardCategories
                            title={item}
                        />
                    )}
                />
            </Stack>

            <YStack px={30}>
                <Text fontSize={20} color='#000' mt={20}>Recomendados</Text>
                <Stack mt={20}>
                    <FlatList
                        data={productRecommended}
                        numColumns={2}
                        horizontal={false}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <CardRecommended
                                title={item}
                            />
                        )}
                    />
                </Stack>
            </YStack>
        </Stack>
    )
}