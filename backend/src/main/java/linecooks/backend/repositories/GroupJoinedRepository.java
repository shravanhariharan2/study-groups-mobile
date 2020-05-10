package linecooks.backend.repositories;

import java.util.List;

import org.bson.types.ObjectId;

public interface GroupJoinedRepository {

    List<ObjectId> findByuserId(ObjectId userId);
    List<ObjectId> findBygroupId(ObjectId groupId);

}