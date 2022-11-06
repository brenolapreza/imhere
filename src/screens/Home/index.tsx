
import { View, Text, TextInput, Touchable, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles"
import { Participant } from "../../component/Participant"
import { useState } from "react";
import { FormatDate } from "../../utils/date";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [nameParticipant, setNameParticipant] = useState("")

    const date = FormatDate()


    function handleParticipantAdd(name: string) {
        if (participants.includes(name)) {
            return Alert.alert("Participante existente", "Já existe um participante")
        }

        setParticipants(prevState => [...prevState, name])
        setNameParticipant("")

    }

    function handleRemove(name: string){
        const filter = participants.filter(participant => participant !== name)
        setParticipants(filter)
   

    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [

            {
                text: "Não",
                style: 'cancel'
            },
            {
                text: "Sim",
                onPress: () => handleRemove(name)
            },
        ])


    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.eventName}>
                    Lista de participantes
                </Text>

                <Text style={styles.eventDate}>
                   {date}
                </Text>


                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="Digite um texto"
                        placeholderTextColor="#6B6B6B"
                        onChangeText={(text) => setNameParticipant(text)}
                        value={nameParticipant}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(nameParticipant)}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={participants}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Participant name={item} onRemove={() => handleParticipantRemove(item)} />

                    )}

                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmptyText}>Ninguém está no evento. Adicione um participante</Text>
                    )}
                />



            </View>

        </>
    )
}