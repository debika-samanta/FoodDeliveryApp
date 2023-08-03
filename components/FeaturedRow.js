import { View, Text, ScrollView,Image } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  //const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //     *[_type == "featured" && _id == $id] {
  //       ...,
  //       restaurants[]->{
  //         ...,
  //         dishes[]->,
  //         type-> {
  //           name
  //         }
  //       },
  //     }[0]
  //   `,
  //       { id }
  //     )
  //     .then((data) => {
  //       console.log("restaurants:", data?.restaurants);
  //       setRestaurants(data?.restaurants);
  //     })
  //     .catch((err) => {
  //       console.log("Err at Featured Row:", err);
  //     });
  // }, [id]);

  return (
    <View>
      <View className="mt-4 flex-coloumn items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Image source={require("../assets/favicon.png")}/>
      </View>
      
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
     
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}

        {/* {restaurants?.map((restaurant, i) => (
          <RestaurantCard
            key={`${restaurant._id}-${i}`}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            shortDescription={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))} */}
      </ScrollView>
     
    </View>
  );
};

export default FeaturedRow;