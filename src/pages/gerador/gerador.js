import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style';

function getRandomPhrase()
{
  const phrases = [
    "Liberdade é pouco. O que desejo ainda não tem nome. - Clarice Lispector",
    "Existem três tipos de homens: os vivos, os mortos e os que andam no mar. - Platão",
    "Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido. - Fernando Pessoa",
    "Considerar a nossa maior angústia como um incidente sem importância, não só na vida do universo mas da nossa mesma alma, é o princípio da sabedoria. - Fernando Pessoa",
    "Aquilo que se faz por amor está sempre além do bem e do mal. - Friedrich Nietzsche",
    "Nunca deixe que lhe digam que não vale a pena acreditar no sonho que se tem ou que os seus planos nunca vão dar certo ou que você nunca vai ser alguém... - Renato Russo",
    "De repente, a gente vê que perdeu Ou está perdendo alguma coisa Morna e ingênua que vai ficando no caminho... - Cazuza",
    "Fiz de mim o que não soube, E o que podia fazer de mim não o fiz. - Fernando Pessoa",
    "Não importa quanto a vida possa ser ruim, sempre existe algo que você pode fazer, e triunfar. Enquanto há vida, há esperança. - Stephen Hawking",
    "A vida é uma constante oscilação entre a ânsia de ter e o tédio de possuir. - Arthur Schopenhauer"
  ]

  return phrases[Math.floor(Math.random() * 10)]
}

export default function App({navigation}) {
  const [phrase, setPhrase] = useState('')

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Gerador de frases!</Text>
        </View>
        
        <View style={styles.mainContainer}>
            <View style={styles.phraseContainer}>
              <Text style={styles.phrase}>
                {phrase ? phrase : "Teste apertando no botão de gerar!"}
              </Text>
            </View>
            
            <TouchableOpacity 
                onPress={() => setPhrase(getRandomPhrase)}
                style={styles.button}
            >
              <Text style={styles.buttonText}>
                Gerar
              </Text>
            </TouchableOpacity>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}