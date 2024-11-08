import {
  Image,
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Home() {
  const handleInstagramLink = () => {
    Linking.openURL("https://www.instagaram.com/oncasdovalerugby");
  };

  const handleEmailLink = () => {
    Linking.openURL("emailto:oncasdovalerugby@gmail.com");
  };

  const handleWhatsappLink = () => {
    Linking.openURL("https://chat.whatsapp.com/ITWEudexYsj4XLzmJTs5Ty");
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
        <Text style={styles.text}>Onças do Vale Rugby</Text>
        <Text style={styles.paragraph}>
          As Onças do Vale Rugby são um time mineiro de rugby fundado em 2024,
          cujo propósito é criar uma comunidade comprometida com a promoção da
          inclusão e diversidade no esporte, sendo moldada pelos valores
          intrínsecos do rugby.
          {"\n"}
          {"\n"}Visamos proporcionar um ambiente acolhedor e inclusivo, onde
          cada membro do time é valorizado independentemente de suas origens,
          raças, orientação, identidade de gênero ou habilidades. O rugby, com
          sua essência única e seus valores imperativos, serve como a base
          sólida sobre a qual construímos nossa filosofia.
          {"\n"}
          {"\n"}As relações que construímos vai além das fronteiras do esporte,
          impactando positivamente a comunidade e contribuindo para a construção
          de um futuro mais igualitário.
        </Text>
        <Text style={styles.social}>Conheça nossas redes sociais!</Text>
        <View style={styles.socialBox}>
          <TouchableOpacity onPress={handleInstagramLink}>
            <Image
              style={{ width: 36, height: 35 }}
              source={require("../../assets/images/instagram.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailLink}>
            <Image
              style={{ width: 36, height: 35 }}
              source={require("../../assets/images/gmail.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleWhatsappLink}>
            <Image
              style={{ width: 36, height: 35 }}
              source={require("../../assets/images/whatsapp.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    marginTop: 36,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 110,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  paragraph: {
    fontSize: 14,
    marginTop: 32,
    color: "white",
    lineHeight: 20,
    textAlign: "justify",
  },
  social: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  socialBox: {
    flex: 3,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    color: "white",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
