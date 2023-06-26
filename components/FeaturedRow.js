import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowUpRightIcon } from "react-native-heroicons/outline";
import asset from "../assets/asset";
import RestaurantCard from "./Cards/RestaurantCard";

export default function FeaturedRow({ id, title, description }) {
  return (
    <View>
      <View className=" mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowUpRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=" px-0 pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl={asset.profile}
          title="Nando"
          rating={4.5}
          genre="Japanese"
          address="kg 655 st"
          shortdescription="test"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
