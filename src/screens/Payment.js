import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import CustomHeading from "../components/CustomHeading";
import CustomDescription from "../components/CustonDescription";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function SetPassword({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.heading}>
        {/* <CustomHeading title="Set PIN" /> */}
      </View>
      <Text style={styles.payment}>Your Payment Secured</Text>

      <View style={styles.input}>
        <View style={styles.cardContainer}>
          {/* <TouchableOpacity style={styles.cardContainer}></TouchableOpacity> */}
          <View
            style={{
              flex: 1,
              flexDirection: "row-reverse",
              justifyContent: "flex-start",
            }}
          >
            <Image
              style={{
                width: 70,
                height: 70,
              }}
              source={require("../../assets/logo.png")}
            />
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              Olamide Ademola
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 30,
              }}
            >
              1234 5678 1234 XXXX
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginRight: 25,
              color: "#204a75",
              textAlign: "left",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Balances
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{ fontWeight: "bold", color: "red" }}>+ Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          //justifyContent: "flex-start",
          marginTop: 20,
          marginLeft: 30,
          //alignContent: "flex-start",
          //alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            //marginRight: 25,
            color: "red",
          }}
        >
          N 213,456,789
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.buttonContainer2nd}>
          <Text style={{ fontWeight: "bold", color: "red" }}>+ Income</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer2nd}>
          <Text style={{ fontWeight: "bold", color: "red" }}>+ Expense</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 10 }}>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel="₦"
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 10,
            marginRight: 20,
            marginTop: 20,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  heading: {
    marginTop: 100,
  },
  input: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  redText: {
    color: "red",
    padding: 20,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    marginLeft: 30,
    fontSize: 18,
    paddingTop: 20,
  },
  payment: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 30,
  },
  cardContainer: {
    elevation: 8,
    backgroundColor: "#000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 350,
    height: 200,
    justifyContent: "center",
    //alignItems: "center",
    marginTop: 20,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#91aebd",
    borderRadius: 10,
    //paddingVertical: 10,
    //paddingHorizontal: 12,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  buttonContainer2nd: {
    elevation: 8,
    backgroundColor: "#000",
    borderRadius: 20,
    //paddingVertical: 10,
    //paddingHorizontal: 12,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
});
