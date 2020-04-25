package linecooks.backend.models;

import org.springframework.data.annotation.Id;

public class GroupJoined {

    @Id
    private Object id;
    private Object userId;
    private Object groupId;

    public Object getUserId() {
        return userId;
    }

    public void setUserId(Object userId) {
        this.userId = userId;
    }

    public Object getGroupId() {
        return groupId;
    }

    public void setGroupId(Object groupId) {
        this.groupId = groupId;
    }

}