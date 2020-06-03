package linecooks.backend.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.bson.types.ObjectId;

import linecooks.backend.models.GroupJoined;

public interface GroupJoinedRepository extends MongoRepository<GroupJoined, String>{

    List<ObjectId> findByuserId(ObjectId userId);
    List<ObjectId> findBygroupId(ObjectId groupId);

}