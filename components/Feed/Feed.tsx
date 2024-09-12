import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { PostElement } from "../Post/Post";
import { posts } from "../../mock/posts";
import { Story } from "../Story/Story";

export const Feed = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#111",
    },
    topMenu: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 120,
      backgroundColor: "#111",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 45,
      paddingHorizontal: 10,
      zIndex: 1, // Ensures the menu stays above other components
    },
    menuButton: {
      paddingHorizontal: 16,
    },
    menuText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    content: {
      paddingTop: 125, // Add padding to push the content below the fixed top menu
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    contentText: {
      fontSize: 18,
      marginVertical: 20,
    },
  });

  return (
    <SafeAreaView style={[styles.container, { marginBottom: 20 }]}>
      <View style={styles.topMenu}>
        <Image
          source={{
            uri: "https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png",
          }}
          style={{ width: "30%", height: 40 }}
          resizeMode="contain"
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.menuButton}>
            <FontAwesome name="heart" size={25} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <FontAwesome name="facebook-messenger" size={25} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Story data={posts[0]} />
          <Story data={posts[1]} />
          <Story data={posts[2]} />
          <Story data={posts[3]} />
          <Story data={posts[4]} />
          <Story data={posts[5]} />
        </ScrollView>
        <PostElement data={posts[0]} />
        <PostElement data={posts[1]} />
        <PostElement data={posts[2]} />
        <PostElement data={posts[3]} />
        <PostElement data={posts[4]} />
        <PostElement data={posts[5]} />
      </ScrollView>
    </SafeAreaView>
  );
};
