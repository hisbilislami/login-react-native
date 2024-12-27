import { Slot, Stack } from "expo-router";

import "@/assets/css/global.css";

import { useDrizzleStudio } from "expo-drizzle-studio-plugin";

import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useEffect, useState } from "react";
import migrations from "../drizzle/migrations";
import { usersTable } from "@/db/schema";
import { Text, useColorScheme, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

const expo = SQLite.openDatabaseSync("todo.db");

const db = drizzle(expo);

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  const [items, setItems] = useState<(typeof usersTable.$inferSelect)[] | null>(
    null,
  );

  useEffect(() => {
    if (!success) return;

    (async () => {
      await db.delete(usersTable);

      await db.insert(usersTable).values([
        {
          username: "hisbil",
          password: "alislami",
          email: "hisbil.prog@gmail.com",
        },
      ]);

      if (error) {
        return (
          <View>
            <Text>Migration error: {error.message}</Text>
          </View>
        );
      }

      if (!success) {
        return (
          <View>
            <Text>Migration is in progress...</Text>
          </View>
        );
      }

      if (items === null || items.length === 0) {
        return (
          <View>
            <Text>Empty</Text>
          </View>
        );
      }

      const users = await db.select().from(usersTable);
      setItems(users);
    })();
  }, [success]);

  useDrizzleStudio(expo);
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <Slot />
    </ThemeProvider>
  );
}
