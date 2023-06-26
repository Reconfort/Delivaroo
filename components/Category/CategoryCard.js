import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategoryCard({ imgUrl, title }) {
  return (
    <TouchableOpacity>
      <Image
        source={imgUrl}
        className="w-16 h-16 rounded-full border-4 border-white"
      />
      <Text className=" text-gray-600 font-bold mt-2 text-xs">{title}</Text>
    </TouchableOpacity>
  );
}
