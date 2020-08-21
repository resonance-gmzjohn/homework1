import React, { useState, useEffect } from 'react'
import { Text, View, Button, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';

import { SearchBar } from 'react-native-elements';

import axios from 'axios'

function ContactHome({ navigation }) {
    let [page, setPage] = useState(1)

    let [contacts, setContacts] = useState([])
    let [filteredContacts, setFilteredContacts] = useState([])
    let [search, setSearch] = useState('')

    useEffect(() => {
        addContacts
    }, [])

    const searchUser = (search) => {
        setSearch(search)

        if(search !== '') {
            setFilteredContacts(contacts.filter(contact => (contact.name.last.includes(search))))
        } else {
            setFilteredContacts(contacts)
        }

    }

    const addContacts = () => {
        axios.get(`https://randomuser.me/api/?results=30`)
            .then(res => {
                setContacts(res.data.results)
                setFilteredContacts(res.data.results)
            })
    }

    const onPress = (contact) => {
        navigation.navigate("Details", { contact: contact });
    }

    const renderContent = (contact, index) => {
        return (
            <TouchableNativeFeedback key={index} onPress={() => { onPress(contact) }}>
                <View style={styles.contact}>
                    <Image style={styles.image} source={{ uri: contact.picture.thumbnail }} />
                    <View>
                        <Text style={styles.contactName}>{contact.name.first} {contact.name.last}</Text>
                        <Text>C: {contact.cell}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search by First Name"
                onChangeText={searchUser}
                value={search}
            />
            <ScrollView style={styles.wrapper}>
                {filteredContacts && filteredContacts.map((contact, index) => {
                    return renderContent(contact, index)
                })}
            </ScrollView>
            <Button onPress={() => {
                addContacts()
            }} title="Refresh Contacts" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    wrapper: {
        flex: 1,
        marginBottom: 10
    },
    contact: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'grey',
        marginBottom: 10
    },
    contactName: {
        fontWeight: '600'
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        marginRight: 10
    }
})

export default ContactHome;
