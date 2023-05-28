import { Document, Page,View,Text,StyleSheet } from "@react-pdf/renderer"
function VerPDF({texto, numeros}) {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: "#5E548E",
      width: "100%",
      height: "30vh",
      borderRadius: 5,
    },
  });

  return (
    <Document>
        <Page size={"A5"}>
            <View style={styles.card}>
                <Text>{texto}</Text>
                <Text>{numeros}</Text>
            </View>

        </Page>
    </Document>
  )
}

export default VerPDF