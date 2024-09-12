import { Text, View } from "react-native";
import { Post } from "../../types/Post";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { StyleSheet } from "react-native";

export const PostElement = (props: { data: Post }) => {
  const styles = StyleSheet.create({
    postIcon: {
      padding: 8,
    },
  });
  return (
    <SafeAreaView style={{ overflow: "hidden", marginBottom: 30 }}>
      <View
        style={{
          marginBottom: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: props.data.userProfilePictureUrl,
          }}
          style={{ borderRadius: 100, width: 40, height: 40, marginLeft: 15 }}
          //resizeMode="contain"
        />
        <Text style={{ fontWeight: "bold", marginLeft: 10, color: "white" }}>
          {props.data.userName}
        </Text>
      </View>
      <Image
        source={{
          uri: props.data.imageUrl,
        }}
        style={{ width: "100%", aspectRatio: 1 }}
        resizeMode="cover"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", padding: 10 }}>
          <TouchableOpacity style={styles.postIcon}>
            <FontAwesome5Icon name="heart" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.postIcon, { paddingHorizontal: 15 }]}
          >
            <FontAwesome5Icon name="comment" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postIcon}>
            <FontAwesome5Icon name="paper-plane" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ padding: 20 }}>
            <FontAwesome5Icon name="bookmark" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ color: "#555", paddingLeft: 15 }}>
        {props.data.timeAgo}
      </Text>
    </SafeAreaView>
  );
};
