import { observer } from "mobx-react-lite"
import { useStores } from "../models"
import React, { FC, } from "react"
import { View, StyleSheet, ViewStyle } from "react-native"
import { Button, Card, Screen, Text } from "../components"
// import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import { colors, spacing } from "../theme"
import { ScrollView } from "react-native-gesture-handler"
import { LinearGradient } from 'expo-linear-gradient';
/* import { DrawerIconButton } from "../screens/DemoShowroomScreen/DrawerIconButton" */

interface UnauthEngageDashboardScreenProps extends AppStackScreenProps <"UnauthEngageDashboard"> {}

export const UnauthEngageDashboardScreen: FC<UnauthEngageDashboardScreenProps> = observer(function UnauthEngageDashboardScreen(_props) {
  /* const swiperRef = useRef(null); */
  const { navigation } = _props;
  const { brandAccount, brandAccountList } = useStores();

  /* console.log(brandAccount); */
  console.log("brandAccount in dashboard");
  console.log(brandAccount);
  /* console.log(brandAccount.id); */
  console.log("brandAccountList in dashboard")
  console.log(brandAccountList);
  /* console.log(brandAccountListModel.brandAccountItems()); */
  

  return (
    <Screen
      /* safeAreaEdges={["top"]} */
      contentContainerStyle={$container}
    >
      <View
        style={$dashboardHeader}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={['#04E7F7', '#2962FF']}
          style={styles.background}
        />
        <View
          style={$dashboardContentHeader}
        >
          <Text
            style={styles.textHeroHeader}
            weight="bold"
            preset="heading"
          >
            My Community
          </Text>
        </View>
        <View
          style={$dashboardContentBody}
        >
          <Text
            style={styles.textHeroValuation}
          >
            - - - -
          </Text>
          <Text
            style={styles.textHeroBody}
          >
            Members
          </Text>
        </View>
      </View>
      <ScrollView
        style={$scrollContainer}
        /* style={styles.wrapper} */
      >
        {/* <Text>{socialTwitter}</Text> */}
        <Card
          style={$cardStyle}
          HeadingComponent={
            <View
              style={$summaryBodyHeader}
            >
              <Text
                weight="bold"
              >
                All Accounts
              </Text>
              
              {/* <Icon icon="gear" color={colors.palette.blue100} size={30}/> */}
            </View>
          }
          ContentComponent={
            <View>
              <View
                style={$summaryBodyContent}
              >
                <Text>
                  Followers
                </Text>
                <Text>
                  - - - - -
                </Text>
              </View>
            </View>
          }
        />
        <Card
          style={$cardStyleEmpty}
          ContentComponent={
            <View
              style={$cardStyleEmpty}
            >
              <Text
                style={styles.textCardEmptyHeader}
                weight="bold"
              >
                No Accounts
              </Text>
              <Text
                style={styles.textCardEmptyBody}
              >
                You have no personal brand or business accounts added to value and monitor.
              </Text>
              <Button
                preset="default"
                style={$tapButton}
                onPress={() =>  navigation.navigate("UnauthAddAccountLanding")}
              >
                Add Account
              </Button>
            </View>
          }
        />
      </ScrollView>
    </Screen>
  )
})

const styles = StyleSheet.create({
  background: {
    height: 250,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  textCardEmptyBody: {
    textAlign: "center",
  },
  textCardEmptyHeader: {
    textAlign: "center",
  },
  textHeroBody: {
    color: colors.palette.neutral100,
  },
  textHeroHeader: {
    color: colors.palette.neutral100,
    fontSize: 20,
  },
  textHeroValuation: {
    color: colors.palette.neutral100,
    fontSize: 28,
    lineHeight: 40,
  },
  wrapper: {
    
  }
  
});

const $container: ViewStyle = {
  /* paddingTop: 20, */
  flex: 1,
  /* paddingBottom: spacing.huge, */
  /* paddingHorizontal: spacing.large, */
}

const $dashboardHeader: ViewStyle = {
  height: 240,
  paddingTop: 40,
  paddingHorizontal: 10,
}
const $dashboardContentHeader: ViewStyle = {
  alignItems: 'center',
  height: 40,
  marginTop: 10,

}
const $dashboardContentBody: ViewStyle = {
  alignItems: 'center',
  height: 100,
  justifyContent: 'center'
  /* marginTop: 50, */
}
const $dashboardContentFooter: ViewStyle = {
  height: 40,
  marginBottom: 10,
  flexDirection: 'row',
  justifyContent: 'space-between'
}

const $dashboardContentFooterView: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
}

const $cardStyle: ViewStyle = {
  /* marginBottom: 20, */
  marginTop: 20,
  marginHorizontal: 10,
}

const $cardStyleEmpty: ViewStyle = {
  alignItems: "center",
  minHeight: 180,
  justifyContent: "space-between",
  marginBottom: 10,
  marginTop: 20,
  marginHorizontal: 10,
}

const $summaryBodyHeader: ViewStyle = {
  /* marginBottom: 20, */
  height: 30,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.grey300,
}

const $summaryBodyContent: ViewStyle = {
  /* marginBottom: 20, */
  flexDirection: "row",
  height: 30,
  justifyContent: "space-between"
}

const $tapButton: ViewStyle = {
  alignItems: 'center',
  marginBottom: spacing.extraSmall,
  marginTop: spacing.extraSmall,
  flexDirection: 'column',
  width: 240,
}

const $scrollContainer: ViewStyle = {
  backgroundColor: colors.palette.grey300,
  flex: 1,
  /* minHeight: 00, */
  /* marginBottom: 200, */
}

