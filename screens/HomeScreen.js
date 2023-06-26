import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import asset from "../assets/asset";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "TESTING",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx4 space-x-2 px-4">
        <Image
          source={asset.profile}
          className="w-7 h-7 rounded-full bg-gray-300 p-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivaroo</Text>
          <Text className="font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search   */}
      <View className="flex-row items-center space-x-2 my-2 px-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restauranr and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={32} color="#00CCBB" />
      </View>

      {/* Scrallabel container   */}
      <ScrollView className="bg-gray-100 flex-1 p-4">
        {/* Categories */}
        <Categories />

        {/* Featured rows */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid palcement from our partners"
        />
        <FeaturedRow
          id="1234"
          title="Taste Discount"
          description="Everyone been enjoying from our partners"
        />
        <FeaturedRow
          id="12345"
          title="Near you"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
