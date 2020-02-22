package linecooks.backend.models;

import org.bson.types.ObjectId;

import org.springframework.data.annotation.Id;

public class Course {

    @Id
    private ObjectId id;

    private String name;
    private String professor;
    private String session;

    public Course() {
    }

    public Course(String name, String professor, String session) {
        this.name = name;
        this.professor = professor;
        this.session = session;
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

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    public String getSession() {
        return session;
    }

    public void setSession(String session) {
        this.session = session;
    }

    public String toString() {
        return "Course (Course: " + this.name + ", Professor: " + this.professor + ", Session: " + this.session + ")";
    }

}