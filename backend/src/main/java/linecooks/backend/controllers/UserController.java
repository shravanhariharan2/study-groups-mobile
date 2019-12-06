package linecooks.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import linecooks.backend.models.User;

@RestController
public class UserController {

    User[] users = { new User("John Doe", "john@doe.com", "johnisdoe") };

    @GetMapping(value = "/user")
    public User getUser() {
        return users[0];
    }

}