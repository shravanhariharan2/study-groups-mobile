package linecooks.backend.repositories;

import org.bson.types.ObjectId;

import linecooks.backend.models.Group;
import linecooks.backend.models.User;

public interface GroupJoinedRepository {

    User findByuserId(ObjectId userId);
    Group findBygroupId(ObjectId groupId);

}