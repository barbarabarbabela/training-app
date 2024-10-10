import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Modal,
  FlatList,
} from "react-native";

export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);
  const [nextTrainingDay, setNextTrainingDay] = useState("");

  const calculateNextTraining = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    let nextThursday, nextSaturday;

    nextThursday = new Date(today);
    nextThursday.setDate(today.getDate() + ((4 - dayOfWeek + 7) % 7 || 7));

    nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + ((6 - dayOfWeek + 7) % 7 || 7));

    if (nextThursday < nextSaturday) {
      setNextTrainingDay("Quinta-feira");
    } else {
      setNextTrainingDay("Sábado");
    }
  };

  useEffect(() => {
    calculateNextTraining();
  }, []);

  const handleAddName = () => {
    if (name.trim()) {
      setParticipants([...participants, name]);
      setName("");
      setModalVisible(false);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg-oncas.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/logo-oncas.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Participe dos nossos treinos!</Text>
        <Text style={styles.paragraph}>
          Quintas-feiras: EFFTTO - Universidade Federal de Minas Gerais - 20h às
          22h
          {"\n"}
          {"\n"}
          Sábados: Parque Ecológico da Pampulha - Portaria 2 - 10h às 12h
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Colocar o nome na lista</Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Insira seu nome</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={setName}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleAddName}
                >
                  <Text style={styles.modalButtonText}>OK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Text style={styles.title}>
          Próximo treino será: {nextTrainingDay}!
        </Text>

        <Text style={styles.title}>Lista de Participantes</Text>
        <FlatList
          data={participants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.participant}>{item}</Text>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 2,
    alignItems: "center",
    marginTop: 36,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 110,
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
    lineHeight: 24,
    textAlign: "justify",
  },
  button: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  participant: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
});
