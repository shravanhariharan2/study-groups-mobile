package linecooks.backend.controllers;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import linecooks.backend.models.User;
import linecooks.backend.repositories.UserRepository;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    // Read
    @GetMapping(value = "/")
    public List<User> getUsers() {
        return repository.findAll();
    }

    // Read by id
    @GetMapping(value = "/{id}")
    public User getUserById(@PathVariable("id") ObjectId id) {
        return repository.findByid(id);
    }

    // Write
    @PostMapping(value = "/")
    public User createUser(@Valid @RequestBody User user) {
        user.setId(ObjectId.get());
        repository.save(user);
        return user;
    }

    // Delete
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable ObjectId id) {
        repository.delete(repository.findByid(id));
    }

}