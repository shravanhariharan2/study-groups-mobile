package linecooks.backend.controllers;

import java.util.ArrayList;
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
import linecooks.backend.repositories.GroupJoinedRepository;
import linecooks.backend.repositories.GroupRepository;

@RestController
@RequestMapping(value = "/groups")
public class GroupController {

    @Autowired
    private GroupRepository repository;
    @Autowired
    private GroupJoinedRepository joinedRepository;

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

    @GetMapping(value = "/user/{userId}")
    public List<Group> getGroupsByUser(@PathVariable ObjectId userId){
        List<ObjectId> groupIds = joinedRepository.findByuserId(userId);
        List<Group> groups = new ArrayList<Group>();
        for(ObjectId id : groupIds){
            groups.add(repository.findByid(id));
        }
        return groups;
    }

    @GetMapping(value = "/course/{courseName}")
    public List<Group> getGroupsByName(@PathVariable String courseName){
        return repository.findBycourseName(courseName);
    }

    @GetMapping(value = "/createdBy/{user_id}")
    public List<Group> getGroupsCreatedByUser(@PathVariable ObjectId user) {
        return repository.findByuserId(user);
    }

    @PutMapping(value = "/{group_id}")
    public Group putGroup(@Valid @RequestBody Group group) {
        repository.save(group);
        return group;
    }

}