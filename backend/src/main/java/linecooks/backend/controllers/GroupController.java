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
import org.springframework.web.bind.annotation.RestController;

import linecooks.backend.models.Group;
import linecooks.backend.repositories.GroupRepository;

@RestController
@RequestMapping(value = "/groups")
public class GroupController {

    @Autowired
    private GroupRepository repository;

    @GetMapping(value = "/")
    public List<Group> getGroups() {
        return repository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Group getGroup(@PathVariable ObjectId id) {
        return repository.findByid(id);
    }

    @PostMapping(value = "/")
    public Group postGroup(@Valid @RequestBody Group group) {
        group.setId(ObjectId.get());
        repository.save(group);
        return group;
    }

}