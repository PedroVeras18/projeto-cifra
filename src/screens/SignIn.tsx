import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Button, Input, Stack, Text, YStack } from "tamagui";

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleSignIn() {
        console.log('logou')
    }

    return (
        <Stack flex={1} justifyContent='center' alignItems='center'>
            <Text color='green' fontWeight='bold' fontSize={30}>Cifra</Text>
            <Text color='black' fontSize={20}>O seu comparador de preços.</Text>

            <YStack w='100%' px={20} mt={60}>
                <YStack>
                    <Text mb={5}>Digite o seu email: </Text>
                    <Input h={50} mb={20} placeholder="Email: " />
                </YStack>
                <YStack>
                    <Text mb={5}>Digite a sua senha: </Text>
                    <Input h={50} secureTextEntry placeholder="Senha: " />
                </YStack>
                <Button mt={20} bg='green' onPress={handleSignIn}>
                    <Text color='white' fontWeight='bold'>ENTRAR</Text>
                </Button>
            </YStack>

            <Text onPress={() => navigation.navigate('signUp')} mt={20} fontWeight='bold' fontSize={15}>
                Ainda não tem uma conta ? Cadastre-se
            </Text>
        </Stack>
    )
}