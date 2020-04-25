package linecooks.backend.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class GroupJoined {

    @Id
    private ObjectId id;
    private ObjectId userId;
    private ObjectId groupId;

    public ObjectId getUserId() {
        return userId;
    }

    public void setUserId(ObjectId userId) {
        this.userId = userId;
    }

    public ObjectId getGroupId() {
        return groupId;
    }

    public void setGroupId(ObjectId groupId) {
        this.groupId = groupId;
    }

}