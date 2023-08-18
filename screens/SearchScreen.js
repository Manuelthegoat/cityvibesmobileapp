import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import SearchScreenComponent from "../components/SearchScreenComponent";
import { dummyData } from "../dummydata";

const SearchScreen = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSearchResults([]); // If query is empty, reset the results
      return;
    }

    const filteredData = dummyData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.artist.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredData);
  };
  useEffect(() => {
    navigation.setOptions({
      title: "Search",
      headerTransparent: true,
      headerTitleStyle: {
        fontFamily: "bold",
        color: "white",
      },

      headerRight: () => (
        <TouchableOpacity onPress={() => {}} style={{ paddingRight: 5 }}>
          <Image
            source={require("../assets/setting.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <LinearGradient
      colors={["#FF512F", "#000000"]}
      style={{ flex: 1 }}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.4, y: 0.3 }}
    >
      <ScrollView style={styles.view}>
        <SearchScreenComponent onSearch={handleSearch} />
        <View style={styles.resultsContainer}>
          {searchResults.map((item, index) => (
            <View key={index} style={styles.resultItem}>
              <Image source={item.image} style={styles.resultImage} />
              <Text>
                {item.title} by {item.artist}
              </Text>
              <Text>Genre: {item.genre}</Text>
              <Text>Duration: {item.duration}</Text>
            </View>
          ))}
        </View>
        {searchResults.length === 0 && (
          <View style={styles.overbody}>
            <View style={styles.hot}>
              <View style={styles.hotHead}>
                <Text style={styles.hottitle}>Hot This Week</Text>
                <Text style={styles.clear}>Clear</Text>
              </View>
              <View style={styles.hotBody}>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>EDM </Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>Afro Beats </Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>Wizkid </Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>Indie </Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>Hard Rock </Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>Drake </Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>Ransom </Text>
                </View>
              </View>
            </View>
            <View style={styles.recently}>
              <View style={styles.hotHead}>
                <Text style={styles.hottitle}>Recently</Text>
                <Text style={styles.clear}>Clear</Text>
              </View>
              <View style={styles.recentBody}>
                <Image source={require("../assets/hitsound.png")} />
                <View style={styles.textWrapper}>
                  <View style={styles.toptext}>
                    <Text style={styles.texttitle}>Hitsound</Text>
                    <Text style={styles.textSubtitle}>@Josh</Text>
                  </View>
                  <View style={styles.bottomtext}>
                    <Text style={styles.bottomtexttitle}>
                      Producer / Artist / Music Director
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="cancel" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.recentBody}>
                <Image source={require("../assets/donjazzy.png")} />
                <View style={styles.textWrapper}>
                  <View style={styles.toptext}>
                    <Text style={styles.texttitle}>Don Jazzy</Text>
                    <Text style={styles.textSubtitle}>@Mavins_boss</Text>
                  </View>
                  <View style={styles.bottomtext}>
                    <Text style={styles.bottomtexttitle}>
                      Producer / Artist / Music Director
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="cancel" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.recentBody}>
                <Image source={require("../assets/davido.png")} />
                <View style={styles.textWrapper}>
                  <View style={styles.toptext}>
                    <Text style={styles.texttitle}>Davido</Text>
                    <Text style={styles.textSubtitle}>@30BG</Text>
                  </View>
                  <View style={styles.bottomtext}>
                    <Text style={styles.bottomtexttitle}>
                      Artist / Business Man
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="cancel" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.recentBody}>
                <Image source={require("../assets/drake.png")} />
                <View style={styles.textWrapper}>
                  <View style={styles.toptext}>
                    <Text style={styles.texttitle}>Drake</Text>
                    <Text style={styles.textSubtitle}>@ZNZ</Text>
                  </View>
                  <View style={styles.bottomtext}>
                    <Text style={styles.bottomtexttitle}>Artist</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="cancel" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 13,
    paddingRight: 10,
  },
  hot: {
    paddingTop: 25,
  },
  text: {
    color: "white",
    fontFamily: "regular",
  },
  hottitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "mb",
  },
  clear: {
    color: "#979797",
    fontSize: 12,
    fontFamily: "other",
  },
  hotHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  hotBody: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pill: {
    backgroundColor: "rgba(255, 81, 47, 0.50)",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginVertical: 5,
    alignSelf: "center",
  },
  pillText: {
    color: "white",
    textAlign: "center",
    fontFamily: "mb",
  },
  recently: {
    paddingTop: 25,
  },
  recentBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
  },
  recentBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  toptext: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  texttitle: {
    color: "#fff",
    fontFamily: "mb",
    fontSize: 16,
  },
  textSubtitle: {
    color: "#979797",
    fontSize: 16,
    fontFamily: "other",
  },
  bottomtexttitle: {
    color: "#979797",
    fontSize: 12,
  },
  resultsContainer: {
    marginTop: 20,
  },

  resultItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  resultImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
