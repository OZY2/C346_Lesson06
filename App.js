import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Pokemon from './components/pokemon';

function App() {
    const [selectedAnswers, setSelectedAnswers] = useState([0, 0, 0]);

    // Pokemon quiz questions using your existing images
    const questions = [
        {
            image: require('./img/pikachu.png'),
            options: ['Pikachu', 'Raichu', 'Pichu'],
            correctAnswer: 0
        },
        {
            image: require('./img/eevee.png'),
            options: ['Eevee', 'Jolteon', 'Vaporean'],
            correctAnswer: 0
        },
        {
            image: require('./img/charmander.png'),
            options: ['Charmander', 'Charizard', 'Charmeleon'],
            correctAnswer: 0
        },
        {
            image: require('./img/bulbasaur.png'),
            options: ['Bulbasaur', 'Ivysaur', 'Venusaur'],
            correctAnswer: 0
        },
        {
            image: require('./img/squirtle.png'),
            options: ['Squirtle', 'Wartortle', 'Blastoise'],
            correctAnswer: 0
        }
    ];

    const handleAnswerSelect = (questionIndex, answerIndex) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[questionIndex] = answerIndex;
        setSelectedAnswers(newAnswers);
    };

    const submitAnswers = () => {
        let correctCount = 0;

        questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.correctAnswer) {
                correctCount++;
            }
        });

        Alert.alert(
            'Quiz Results',
            `You have ${correctCount} correct answers!`,
            [{ text: 'OK' }]
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Pokemon Quiz</Text>

                {questions.map((question, questionIndex) => (
                    <View key={questionIndex} style={styles.questionContainer}>
                        <Text style={styles.questionText}>What Pokemon is this?</Text>

                        <Pokemon
                            name={question.options[selectedAnswers[questionIndex]]}
                            pkmImg={question.image}
                        />

                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedAnswers[questionIndex]}
                                onValueChange={(itemValue) => handleAnswerSelect(questionIndex, itemValue)}
                            >
                                <Picker.Item label="Select an item..." value={-1} />
                                {question.options.map((option, optionIndex) => (
                                    <Picker.Item
                                        key={optionIndex}
                                        label={option}
                                        value={optionIndex}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                ))}

                <Button
                    title="Submit Answers"
                    onPress={submitAnswers}
                />
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    questionContainer: {
        marginBottom: 30,
    },
    questionText: {
        fontSize: 18,
        marginBottom: 10,
    },
    pickerContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default App;