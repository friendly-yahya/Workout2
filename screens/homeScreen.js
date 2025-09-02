import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';
import { useWorkoutStore } from "../store/workoutStore";

const HomeScreen = () => {
    const { greeting, setGreeting, sessions } = useWorkoutStore();
    
}