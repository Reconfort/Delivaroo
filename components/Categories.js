import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./Cards/CategoryCard";
import asset from "../assets/asset";

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Category cards */}
      <CategoryCard imgUrl={asset.profile} title="Testing1" />
      <CategoryCard imgUrl={asset.profile} title="Testing2" />
      <CategoryCard imgUrl={asset.profile} title="Testing3" />
      <CategoryCard imgUrl={asset.profile} title="Testing1" />
      <CategoryCard imgUrl={asset.profile} title="Testing2" />
      <CategoryCard imgUrl={asset.profile} title="Testing3" />
      <CategoryCard imgUrl={asset.profile} title="Testing1" />
      <CategoryCard imgUrl={asset.profile} title="Testing2" />
      <CategoryCard imgUrl={asset.profile} title="Testing3" />
      {/* <Text>Hello world</Text> */}
    </ScrollView>
  );
}
