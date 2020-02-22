package linecooks.backend.controllers;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import linecooks.backend.models.User;
import linecooks.backend.models.Course;
import linecooks.backend.repositories.UserRepository;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    // get all users
    @GetMapping(value = "/")
    public List<User> getUsers() {
        return repository.findAll();
    }

    // get single user
    @GetMapping(value = "/{id}")
    public User getUserById(@PathVariable("id") ObjectId id) {
        return repository.findByid(id);
    }

    // get all courses from user
    @GetMapping(value = "/courses/{id}")
    public List<Course> getUserClasses(@PathVariable("id") ObjectId id) {
        return repository.findByid(id).getCourses();
    }

    // post new user
    @PostMapping(value = "/")
    public User createUser(@Valid @RequestBody User user) {
        user.setId(ObjectId.get());
        repository.save(user);
        return user;
    }

    // delete user
    @DeleteMapping(value = "/{id}")
    public void deleteUser(@PathVariable ObjectId id) {
        repository.delete(repository.findByid(id));
    }

}