import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    FlatList,
} from "react-native";
import { ListItem } from "react-native-elements";
import CourseButton from "../../components/CourseButton"
import axios from "axios";

class SelectCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.navigation.state.params.username,
            email: this.props.navigation.state.params.email,
            courseName: "",
            professor: "",
            courses: [],
            isRemove: false,
        }
    }
    onChangeText(key, value) {
        this.setState({
            [key]: value
        });
    }
    addCourse() {
        // bad input
        if(this.state.courseName.length == 0 || this.state.professor.length == 0) {
            alert("Error: Please enter valid input");
        } else {
            this.state.courses.push({
                name: this.state.courseName,
                professor: this.state.professor,
                session: "SP20"
            });
            this.setState({
                courseName: "",
                professor: ""
            });
            alert("Course Added");
        }
    }
    removeCourse(item) {
        this.setState({
            courses: this.state.courses.filter(course => course.name !== item.name),
        })
    }
    continue() {
        // add user to our database
        axios.post("https://study-groups-backend.herokuapp.com/users/", {
            name: this.state.username,
            email: this.state.email,
            courses: this.state.courses
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
        this.props.navigation.navigate("Home");
    }
    renderItem = ({ item }) => (
        <ListItem
          title={item.name}
          titleStyle={{fontSize: 16}}
          containerStyle={styles.courseItem}
          contentContainerStyle={styles.courseText}
          rightTitle={item.professor}
          rightTitleStyle={{
              color:'#000000',
              width: 120
            }}
          onPress={() => this.state.isRemove ? this.removeCourse(item) : console.log(item)}
        />
    )

    FlatListItemSeparator = () => {
        return (
          <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
        );
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container} behavior="padding" enabled>
                    <View style={styles.formWrapper}>
                        <Text style={styles.title}> Select your Courses </Text>
                        <TextInput
                            style={styles.input}
                            value={this.state.courseName}
                            onChangeText={value => this.onChangeText("courseName", value)}
                            placeholder="Course Name (Ex: CSE 100, MATH 18)"
                            placeholderTextColor="#5c5c5c"
                        />
                        <TextInput
                            style={styles.input}
                            value={this.state.professor}
                            onChangeText={value => this.onChangeText("professor", value)}
                            placeholder="Professor (FirstName LastName)"
                            placeholderTextColor="#5c5c5c"
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <CourseButton style={styles.buttonAdd} onPress={() => this.addCourse()} text="Add" />
                        <CourseButton style={styles.buttonRemove} onPress={() => this.setState({ isRemove: !this.state.isRemove })} text="Remove" />
                        <CourseButton style={styles.buttonNext} onPress={() => this.continue()} text="Next" />
                    </View>

                    <FlatList
                        data={this.state.courses}
                        width='80%'
                        ListHeaderComponent={
                            this.state.isRemove ? 
                                <Text>Tap Course to Remove</Text> : 
                                <Text>Courses</Text>
                        }
                        ListHeaderComponentStyle={styles.courseListHeader}
                        ListEmptyComponent={
                            <Text style={styles.courseListHeader}>No courses added</Text>
                        }
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default SelectCourses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        backgroundColor: "#d9e7fc",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        marginTop: 70,
        alignItems: "center"
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 40
    },
    input: {
        borderColor: "#000",
        borderBottomWidth: 2,
        padding: 10,
        width: 300,
        marginBottom: 30
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    buttonNext: {
        backgroundColor: "#63ace5",
        marginRight: 20
    },
    buttonAdd: {
        backgroundColor: "#32CD32",
        marginRight: 20,
    },
    buttonRemove: {
        backgroundColor: "#ff4d4d",
        marginRight: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    courses: {
        marginBottom: 50
    },
    courseTitleText: {
        fontSize: 24,
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
    courseWrapper: {
        marginBottom: 10,
        flexDirection: "row",
    },
    courseItem: {
        backgroundColor: "#d9e7fc",
        marginBottom: 0
    },
    courseListHeader: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10
    },
});