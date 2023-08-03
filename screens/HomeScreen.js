
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { StarIcon } from "react-native-heroicons/solid";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "../components/RestaurantCard";
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="bg-white pt-5">
    {/* Header */}
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image
        source={{
          uri: "https://links.papareact.com/wru",
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">
          Current Location
          
          <Image
       
       source={require("../assets/chevdown.webp")}
   
     className="h-5 w-5"
   />
        </Text>
      </View>
      <Image
       
       source={require("../assets/user.png")}
   
     className="h-10 w-10 bg-gray-300 p-4 rounded-full"
   />
      
    </View>

    {/* Search */}
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row space-x-2 flex-1 bg-sky-100 p-1 rounded-full">
      <Image
       
          source={require("../assets/searc.png")}
      
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
        <TextInput
          placeholder="Restaurants and cuisine"
          keyboardType="default"
        />
      </View>
      
      <Image
       
          source={require("../assets/adjustment.png")}
      
        className="h-9 w-9 bg-white-400 p-1 "
      />
    </View>

    {/* Body */}
    <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <View className="flex space-x-2 mx-4 rounded-full">
      <Button
        color="#02D8FE"
        title="Go to Brief"
        onPress={() => navigation.navigate('Brief')}
      />
      </View>
      {/* Categories */}

      {/* {featuredCategories?.map((category) => (
        <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />
      ))}  */}

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

    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg",
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{"kabab"}</Text>
    </TouchableOpacity>

      <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{"kabab"}</Text>
    </TouchableOpacity>

    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RD3jty_UvILBoDAaYO05RWJBoaKmqTbyZQ&usqp=CAU",
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{"kima"}</Text>
    </TouchableOpacity>

    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKtalHfDuks-Q2QkShcU5mgfnsU3Gx3oILQ&usqp=CAU",
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{"cima"}</Text>
    </TouchableOpacity>

    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5MJ_3b9lJLItmLggke5LHvuEnGri711ikg&usqp=CAU",
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{"chinees"}</Text>
    </TouchableOpacity>

    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTDKW7yX5yNrq5xxSRHRWlfs7N8H6V5cppg&usqp=CAU",
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{"indian"}</Text>
    </TouchableOpacity>
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: "https://images.moneycontrol.com/static-mcnews/2023/06/How-to-keep-your-immunity-strong-avoid-burgers-and-chips-770x433.jpg?impolicy=website&width=770&height=431",
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{"Thai"}</Text>
    </TouchableOpacity>
    </ScrollView>
   
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{"City Special"}</Text>
       
        <ArrowRightIcon color="#00CCBB" />
      </View>
      
      <Text className="text-xs text-gray-500 px-4">{"This are the city special dishes"}</Text>
     
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}

        {/* {restaurants?.map((restaurant, i) => ( */}
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Sausage Sallad"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"rating"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRKoYAOqgOO_tqoGGnfUlGbjZxuUGX2RUIA&usqp=CAU",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"New town ameerpeer"}</Text>
        </View>
      </View>
        </TouchableOpacity>
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Saucy prawn"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"rating"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod/images/super-bowl-recipe-ideas-grilled-shrimp-cocktail-1671757303.jpeg?resize=480:*",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>

        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Harabhara kabab"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"rating"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://2.bp.blogspot.com/-NBdjkvEJQ7o/XKp-xMI9OaI/AAAAAAAAHrU/OrcoFptF36w9IxVUCnfRoze1YFEIldVwwCLcBGAs/s1600/IMG_20190403_182738.jpg",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>

        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Paneer Bhurji"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"rating"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzVlYuTuQFPM-gvoSrE1KOnuAZyih6XtHBFBqHl8GHBxdb2lPESIXJ_bln9SFSxzluD0&usqp=CAU",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"Old Hyderabad"}</Text>
        </View>
      </View>
        </TouchableOpacity>


        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Paradise Biriyani"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"rating"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://paradise-biryani.s3.ap-south-1.amazonaws.com/Biryani.jpg",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>

        
          <RestaurantCard
            key= "!"//{`${restaurant._id}-${i}`}
            id= "Nothing" //{restaurant._id}
            imgUrl= "https://images.moneycontrol.com/static-mcnews/2023/06/How-to-keep-your-immunity-strong-avoid-burgers-and-chips-770x433.jpg?impolicy=website&width=770&height=431"//{restaurant.image}
            title= "The title"//{restaurant.name}
            rating="1" //{restaurant.rating}
            genre="name"//{restaurant.type?.name}
            address= "Nothing special"//{restaurant.address}
            shortDescription= "This tastes really nice"//{restaurant.short_description}
            dishes="Indian"//{restaurant.dishes}
            long="12.9"//{restaurant.long}
            lat="15.6"//{restaurant.lat}
          />
          
        {/* ))} */}
      </ScrollView>
     
    </View>

    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{"Tikha Tadka"}</Text>      
        <ArrowRightIcon color="#00CCBB" />
      </View>
      
      <Text className="text-xs text-gray-500 px-4">{"Spark your buds with the current of hot spices. "}</Text>
     
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Prawn sizzler"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"rating"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://media.istockphoto.com/id/506798959/photo/shrimp-satay.jpg?s=612x612&w=0&k=20&c=30txZT1cKzJNBiX0OnQ3CkqoTuCqVfa2hdHM9qbFyws=",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>

        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"King Lobster"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"rating"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://www.redlobster.ca/images/default-source/images/news-and-press/rl_event_2__0000_m_fy_17_e2_crablover_sdreamdish_can_351_v6.jpg?sfvrsn=4",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>

        {/* {restaurants?.map((restaurant, i) => ( */}
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Sorter Brocoli"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"rating"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApHTiEftw6MNzzXHZOykNqv5cHZwYQierbg&usqp=CAU",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>
        
          <RestaurantCard
            key= "!"//{`${restaurant._id}-${i}`}
            id= "Nothing" //{restaurant._id}
            imgUrl= "https://images.moneycontrol.com/static-mcnews/2023/06/How-to-keep-your-immunity-strong-avoid-burgers-and-chips-770x433.jpg?impolicy=website&width=770&height=431"//{restaurant.image}
            title= "The title"//{restaurant.name}
            rating="1" //{restaurant.rating}
            genre="name"//{restaurant.type?.name}
            address= "Nothing special"//{restaurant.address}
            shortDescription= "This tastes really nice"//{restaurant.short_description}
            dishes="Indian"//{restaurant.dishes}
            long="12.9"//{restaurant.long}
            lat="15.6"//{restaurant.lat}
          />
          
        {/* ))} */}
      </ScrollView>
     
    </View>
   
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{"Mood Masti Desert"}</Text>
               
        <ArrowRightIcon color="#00CCBB" />
      </View>
      
      <Text className="text-xs text-gray-500 px-4">{"The perfect deesert after your meals"}</Text>
     
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}

        {/* {restaurants?.map((restaurant, i) => ( */}
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Classy Honey Crab"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"4.6"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://www.saveur.com/uploads/2020/09/16/JPXZTWEKEZHWDPPYUFNG2X4AJQ.jpg?auto=webp",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>
        
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Dryfruit Masti"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="orange" opacity={0.9} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-yellow-500">{"3.5"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://www.sargento.com/assets/Uploads/Recipe/Image/4thjulycharcuterie__FillWzExNzAsNTgzXQ.jpg",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>
        
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Fruity Blast"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="orange" opacity={0.9} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-yellow-500">{"3.5"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2q34GZYLFO57qavuVbOsd4ortImQjhBx-vinnwh4s3pYWchqLGR0nex-oefYXY3mSDY&usqp=CAU",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>
      
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Fruity Blast"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="orange" opacity={0.9} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-yellow-500">{"3.5"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRq5cO0R91NFBHxncTsa9G7kpw80lkRiztw&usqp=CAU",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>

          <RestaurantCard
            key= "!"//{`${restaurant._id}-${i}`}
            id= "Nothing" //{restaurant._id}
            imgUrl= "https://images.moneycontrol.com/static-mcnews/2023/06/How-to-keep-your-immunity-strong-avoid-burgers-and-chips-770x433.jpg?impolicy=website&width=770&height=431"//{restaurant.image}
            title= "The title"//{restaurant.name}
            rating="1" //{restaurant.rating}
            genre="name"//{restaurant.type?.name}
            address= "Nothing special"//{restaurant.address}
            shortDescription= "This tastes really nice"//{restaurant.short_description}
            dishes="Indian"//{restaurant.dishes}
            long="12.9"//{restaurant.long}
            lat="15.6"//{restaurant.lat}
          />
          
        {/* ))} */}
      </ScrollView>
     
    </View>
   
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{"Spark Braverages "}</Text>
               
        <ArrowRightIcon color="#00CCBB" />
      </View>
      
      <Text className="text-xs text-gray-500 px-4">{"Quench your thrust, and burn in desire."}</Text>
     
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}

        {/* {restaurants?.map((restaurant, i) => ( */}
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Mochtail"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"4.6"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYbVhrlTnpVGLI1S59IiPrZODhv25J-gRunjUCrtAICGhiHlgeQaR9MTItHsk70ELXAg&usqp=CAU",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>

        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Champien"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"4.6"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://www.thoughtco.com/thmb/R0j1z7-xlDxlJRSf81mUxdG9T8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/midsection-of-waiter-pouring-wine-in-glass-at-restaurant-523299935-57f3fdda3df78c690f9c8dc4-5c4887f846e0fb00015dbebe.jpg",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>

        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Brandy"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"4.6"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://media.istockphoto.com/id/1210568819/photo/chic-cocktails-on-bar-counter.jpg?s=170667a&w=0&k=20&c=SElAEl3fMKFkVP3gshGhSP49YoBr7PkzeTQfPFu1iqo=",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>

        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Othentic Win"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{"4.6"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://i.pinimg.com/736x/ef/a4/12/efa4125390e4f22dfc950bea69bace26.jpg",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>
        
        <TouchableOpacity className="relative mr-2">
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{"Cotton candy mohito"}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="orange" opacity={0.9} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-yellow-500">{"3.5"}</Text> · {"genre"}
          </Text>
        </View>
        <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0AoGnLPFBIIrTuqil0779UIjz1Q_gR7x6g&usqp=CAU",
        }}
        className="h-40 w-40 rounded"
      />
        <View className="flex-row items-center space-x-1">
           {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} />  */}
          <Text className="text-xs text-gray-500">Nearby · {"address"}</Text>
        </View>
      </View>
        </TouchableOpacity>
        
          <RestaurantCard
            key= "!"//{`${restaurant._id}-${i}`}
            id= "Nothing" //{restaurant._id}
            imgUrl= "https://images.moneycontrol.com/static-mcnews/2023/06/How-to-keep-your-immunity-strong-avoid-burgers-and-chips-770x433.jpg?impolicy=website&width=770&height=431"//{restaurant.image}
            title= "The title"//{restaurant.name}
            rating="1" //{restaurant.rating}
            genre="name"//{restaurant.type?.name}
            address= "Nothing special"//{restaurant.address}
            shortDescription= "This tastes really nice"//{restaurant.short_description}
            dishes="Indian"//{restaurant.dishes}
            long="12.9"//{restaurant.long}
            lat="15.6"//{restaurant.lat}
          />
          
        {/* ))} */}
      </ScrollView>
     
    </View>
   
    </ScrollView>

   
  </SafeAreaView>
  );
}

export default HomeScreen;