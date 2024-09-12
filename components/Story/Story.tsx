import { Image } from "react-native";
import { View } from "react-native";
import { Post } from "../../types/Post";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";

export const Story = (props: { data: Post }) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          padding: 6,
          borderRadius: 100,
          borderColor: "#1cd14f",
          borderWidth: 3,
        }}
      >
        <Image
          source={{
            uri: props.data.userProfilePictureUrl,
          }}
          style={{
            borderRadius: 100,
            width: 80,
            height: 80,
          }}
          //resizeMode="contain"
        />
      </View>
      <Text style={{ color: "white" }}>{props.data.userName}</Text>
    </View>
  );
};
