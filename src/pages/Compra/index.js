import React, {useState} from 'react';
import { Text, Alert, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { MainContainer, Title, InputText, PersonalButton, HeaderCheckout } from './styles';
import { WebView } from 'react-native-webview';
import imgTransporte from "../../assets/valeTransporte.png";

export default function Compra() {
    
    const [ idPagamento, setIdPagamento ] = useState("1");
    const [ emailPagamento, setEmailPagamento ] = useState("meuemail@gmail.com");
    const [ descricaoPagamento, setDescricaoPagamento ] = useState("Venda de Créditos para Bilhetes");
    const [ valorPagamento, setValorPagamento ] = useState("5.00");
    const [ showCheckout, setShowCheckout ] = useState(false);

    const stateChange = (state) => {
        switch(state.title) {
            case 'sucess':
                setShowCheckout(false);
                Alert.alert("Pagamento Aprovado!", `Recebemos seu Pagamento de ${valorPagamento}`);
                break;
            case 'pending':
                setShowCheckout(false);
                Alert.alert("Pagamento Pendente!", `Seu Pagamento de ${valorPagamento} está Pendente de Processamento.
                                                    Assim que for Processado seguiremos com a Solicitação!`);
                break;
            case 'failure':
                setShowCheckout(false);
                Alert.alert("Pagamento Não Aprovado!", 'Verifique os Dados Informados e Tente Novamente');
                break;
        }
    }

    if (!showCheckout) {
        return (
            <MainContainer>
                <Title><img src={ imgTransporte } /></Title>
                <InputText value={idPagamento} onChangeText={(text) => setIdPagamento(text)} placeholder={'Informe o Id do Produto'} keyboardType={'numeric'}></InputText>
                <InputText value={emailPagamento} onChangeText={(text) => setEmailPagamento(text)} placeholder={'Informe o E-mail de Validação'} keyboardType={'email-address'}></InputText>
                <InputText value={descricaoPagamento} onChangeText={(text) => setDescricaoPagamento(text)} placeholder={'Qual Descrição ira Aparecer na Nota'}></InputText>
                <InputText value={valorPagamento} onChangeText={(text) => setValorPagamento(text)} placeholder={'Qual seria o Valor da Recarga'} keyboardType={'numeric'}></InputText>

                <PersonalButton onPress={() => setShowCheckout(true)}><Text>Recarregar: R$ {valorPagamento}</Text></PersonalButton>
            </MainContainer>
        );
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <HeaderCheckout>
                    <TouchableOpacity onPress={() => setShowCheckout(false)}><Text style={{ fontSize: 20, color: 'white' }}>{"<<"}</Text></TouchableOpacity>
                    <Title>Pagamento Referente a Recarga</Title>
                </HeaderCheckout>
                <WebView source={{ uri: `https://localhost:3000/payments/checkout/${idPagamento}/${emailPagamento}/${descricaoPagamento}/${valorPagamento}`}}
                         onNavigationStateChange={state => stateChange(state)}
                         startInLoadingState={true}
                         renderLoading={() => <ActivityIndicator></ActivityIndicator> } />
            </View>
        );
    }
}