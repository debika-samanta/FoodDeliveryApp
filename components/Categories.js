import { View, Text, ScrollView,TouchableOpacity,Image } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
// import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //     *[_type == "category"]
  //   `
  //     )
  //     .then((data) => {
  //       setCategories(data);
  //     })
  //     .catch((err) => {
  //       console.log("Err from category:", err);
  //     });
  // }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}

      {/* {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))} */}
     
      <CategoryCard imgUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg" title="Testing1" />
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RD3jty_UvILBoDAaYO05RWJBoaKmqTbyZQ&usqp=CAU" title="Testing2" />
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKtalHfDuks-Q2QkShcU5mgfnsU3Gx3oILQ&usqp=CAU" title="Testing3" />
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5MJ_3b9lJLItmLggke5LHvuEnGri711ikg&usqp=CAU" title="Testing4" />
      <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTDKW7yX5yNrq5xxSRHRWlfs7N8H6V5cppg&usqp=CAU" title="Testing5" />
      <CategoryCard imgUrl="https://images.moneycontrol.com/static-mcnews/2023/06/How-to-keep-your-immunity-strong-avoid-burgers-and-chips-770x433.jpg?impolicy=website&width=770&height=431" title="Testing6" />

    </ScrollView>
  );
};

export default Categories;