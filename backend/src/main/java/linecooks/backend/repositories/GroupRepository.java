package linecooks.backend.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import linecooks.backend.models.Group;

public interface GroupRepository extends MongoRepository<Group, String> {
    Group findByid(ObjectId id);
    Group findBycourseName(String courseName);
    Group findByuserId(ObjectId id);
}