import { FlatList } from 'react-native';
import { MagnifyingGlass, SignOut } from "phosphor-react-native"
import { Input, Stack, Text, YStack, XStack } from "tamagui"
import { CardCategories } from '@components/CardCategories';
import { CardRecommended } from '@components/CardRecommended';
import { useAuthService } from '@store/useAuth';
import { CATEGORYS_LIST } from '../constants/category';
import { HIGHLIGHTS_DAY } from '@constants/highlightsDay';

export function Home() {
    const { logout, userAuth } = useAuthService()

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
                    data={CATEGORYS_LIST}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <CardCategories
                            title={item.name}
                            image={item.image}
                        />
                    )}
                />
            </Stack>

            <YStack px={30}>
                <Text fontSize={20} color='#000' mt={20}>Recomendados</Text>
                <Stack mt={20}>
                    <FlatList
                        data={HIGHLIGHTS_DAY}
                        numColumns={2}
                        horizontal={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <CardRecommended
                                item={item}
                            />
                        )}
                    />
                </Stack>
            </YStack>
        </Stack>
    )
}