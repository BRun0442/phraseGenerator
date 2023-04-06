import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style';

function Home({navigation}) {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.headerTitle}>Gerador de frases!</Text>
        </View>
        
        <View style={styles.mainContainer}>
            <View style={styles.phraseContainer}>
              <Text style={styles.phrase}>
                Este app se trata de um gerador de frases,
                ele escolhe automaticamente alguma frase pré definida
                no sistema!
              </Text>
            </View>
            
            <TouchableOpacity 
                onPress={() => navigation.navigate('gerador')}
                style={styles.button}
            >
              <Text >
                Gerar
              </Text>
            </TouchableOpacity>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default Home;