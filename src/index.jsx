import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Biscoito from './assets/biscoito.png';
import BiscoitoAberto from './assets/biscoitoAberto.png';

export function Home() {
  const [img, setImage] = useState(Biscoito);
  const [textoFrase, setTextoFrase] = useState('');

  const frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
  ];

  function quebaBiscoito() {
    const numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase(` " ${frases[numeroAleatorio]} " `);
    setImage(BiscoitoAberto);
  }

  function reiniciarBiscoito() {
    setTextoFrase('');
    setImage(Biscoito);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.textFrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebaBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: '#121212' }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textFrase: {
    fontSize: 20,
    color: '#DD7b22',
    margin: 30,
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#DD7b22',
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#DD7b22',
  },
});
