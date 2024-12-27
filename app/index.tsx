import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as SQLite from "expo-sqlite";
import React, { useState, useEffect } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import Waves1 from "@/components/Waves1";
import Waves2 from "@/components/Waves2";
import Waves3 from "@/components/Waves3";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { usersTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";

const expo = SQLite.openDatabaseSync("db.db");
const db = drizzle(expo);

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async (
    username: string,
    password: string,
  ): Promise<boolean> => {
    console.log("hello");
    try {
      let isAuthenticated = false;

      const result = await db
        .select({
          id: usersTable.id,
          username: usersTable.username,
          password: usersTable.password,
        })
        .from(usersTable)
        .where(
          and(
            eq(usersTable.username, username),
            eq(usersTable.password, password),
          ),
        );

      console.log(result);
      // Assuming `result` has a `rows` property that is an array or contains row data
      if (result.length > 0) {
        console.log("login successfully");
        isAuthenticated = true;
      }

      console.log("login state ", isAuthenticated);

      return isAuthenticated;
    } catch (error) {
      console.log(error);
      return false; // Fallback to false in case of errors
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          className={`flex-1 bg-hot-pink justify-center items-center px-[15%]`}
        >
          <View className="flex-col h-[45%] justify-between items-center w-full">
            <View className="flex-col justify-center items-center w-full">
              <Text className="text-light-gray text-4xl font-extrabold tracking-wide">
                LOGIN
              </Text>
              <Text className="text-light-gray text-md font-extrabold tracking-[10px]">
                TO CONTINUE
              </Text>
            </View>
            <View className="w-full gap-4">
              <TextInput
                placeholder="username"
                inputMode="text"
                onChangeText={setUsername}
                value={username}
                className="w-full border-b border-b-dark-gray text-light-gray text-[14px] outline-none py-2"
                autoCapitalize="none" // Disable auto-capitalization for username field
                autoCorrect={false} // Turn off auto-correction
              />
              <TextInput
                placeholder="your password"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
                className="w-full border-b border-b-dark-gray text-light-gray text-[14px] outline-none py-2"
                autoCapitalize="none" // Disable auto-capitalization for username field
                autoCorrect={false} // Turn off auto-correction
              />
            </View>
            <View className="p-4 gap-5">
              <TouchableOpacity
                className="bg-light-gray py-2 px-14 font-extrabold text-hot-pink tracking-widest shadow-md rounded-md"
                onPress={() => login(username, password)}
              >
                <Text>LOG IN</Text>
              </TouchableOpacity>
              <View className="flex-row justify-center items-center gap-5">
                <Octicons name="dot-fill" size={20} color="white" />
                <Octicons name="dot" size={20} color="white" />
                <Octicons name="dot-fill" size={20} color="white" />
              </View>
            </View>
          </View>

          <Waves1 />
          <Waves2 />
          <Waves3 />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default App;
