import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from '../pages/Cursos';
import BancodeDados from '../pages/BancodeDados';
import Ciberseguranca from '../pages/Ciberseguranca';
import DesenvolvedorFrontEnd from '../pages/DesenvolvedorFrontEnd'

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    headerShown:false,}}
            />
            <Stack.Screen
                name='BancodeDados'
                component={BancodeDados}
            />
            <Stack.Screen
                name='Ciberseguranca'
                component={Ciberseguranca}
            />
            <Stack.Screen
                name='DesenvolvedorFrontEnd'
                component={DesenvolvedorFrontEnd}
            />
        </Stack.Navigator>
    )
}