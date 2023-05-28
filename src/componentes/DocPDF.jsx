
import {Document, Page, View, Text,} from '@react-pdf/renderer'


function DocPDF() {
  return (

      <Document>
          <Page size={'A5'}>
            <View>
                <Text>Nombre de usuario</Text>
                <Text>Numero de usuario</Text>
            </View>
          </Page>
      </Document>
  )
}

export default DocPDF