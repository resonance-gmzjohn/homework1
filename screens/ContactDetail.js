import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function ContactDetail({ navigation }) {
    let [contact, setContact] = useState(undefined)

    useEffect(() => {
        setContact(navigation.state.params.contact)

        console.log(navigation.state.params.contact)
    }, [])

    return (
        <View style={styles.container}>
            {contact != undefined ?
                <View>
                    <View>
                        <View style={styles.skyBlue}></View>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.image} source={{ uri: contact.picture.large }} />
                            <Text style={styles.name}>{contact.name.first} {contact.name.last}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.metdataWrapper}>
                            <Text style={styles.metadata}>Cell Phone</Text>
                            <Text style={styles.detailData}>{contact.cell}</Text>
                        </View>
                        <View style={styles.metdataWrapper}>
                            <Text style={styles.metadata}>Email</Text>
                            <Text style={styles.detailData}>{contact.email}</Text>
                        </View>
                        
                    </View>
                </View>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    skyBlue: {
        backgroundColor: 'skyblue',
        height: 100
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100
    },
    name: {
        fontSize: 40,
        color: 'grey'
    },
    metdataWrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        width: 120,
        textAlign: 'right',
        marginRight: 5
    },
    detailData: {
        fontSize: 15
    }
});

export default ContactDetail;
