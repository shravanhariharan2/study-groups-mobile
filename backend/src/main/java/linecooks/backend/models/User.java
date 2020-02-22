package linecooks.backend.models;

import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

    @Id
    private ObjectId id;

    private String name;
    private String email;
    private List<Course> courses;

    public User() {}

    public User(ObjectId id, String name, String email, List<Course> courses) {
        this.id = id;
        this.name = name;
        this.email = email;

        this.courses = new ArrayList<Course>();
        for(Course course : courses) {
            this.courses.add(course);
        } 
    }

    public String getId() {
        return id.toHexString();
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Course> getCourses() {
        return this.courses;
    }

    public void addCourse(Course course) {
        this.courses.add(course);
    }
    public String toString() {
        return "User (name: " + name + ", email: " + email + ", courses: " + courses + ")";
    }

}