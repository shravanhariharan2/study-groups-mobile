package linecooks.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import linecooks.backend.models.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByid(Object id);

    User findByemail(String email);
}