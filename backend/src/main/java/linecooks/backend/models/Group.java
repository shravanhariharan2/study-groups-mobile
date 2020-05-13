package linecooks.backend.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "groups")
public class Group {

    @Id
    private ObjectId id;
    private String name;
    private ObjectId userId;
    private String courseName;
    private int capacity;
    private String description;
    private String location;
    private String startDateTime;
	private String stopDateTime;
	
	public Group(String name, ObjectId userId, String courseName, int capacity, String description, String location,
			String startDateTime, String stopDateTime) {
		this.name = name;
		this.userId = userId;
		this.courseName = courseName;
		this.capacity = capacity;
		this.description = description;
		this.location = location;
		this.startDateTime = startDateTime;
		this.stopDateTime = stopDateTime;
	}

    public ObjectId getId() {
		return id;
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
	public ObjectId getUserId() {
		return userId;
	}
	public void setUserId(ObjectId userId) {
		this.userId = userId;
	}
    
}