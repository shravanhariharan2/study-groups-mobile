package linecooks.backend.repositories;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import linecooks.backend.models.Group;

public interface GroupRepository extends MongoRepository<Group, String> {
    Group findByid(ObjectId id);
    List<Group> findBycourseName(String courseName);
    Group findByuserId(ObjectId id);
}