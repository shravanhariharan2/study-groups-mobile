package linecooks.backend.User;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import linecooks.backend.models.Course;
import linecooks.backend.models.User;
import linecooks.backend.repositories.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTests {

    @Autowired
    private UserRepository repository;

    @Test
    public void createRows() {
        // todo: Finish test
        repository.deleteAll();
        List<Course> courses1 = new ArrayList<Course>();
        courses1.add(new Course("CSE11", "Niema", "FA20"));
        courses1.add(new Course("CSE12", "Gary", "WI20"));
        repository.save(new User(
            ObjectId.get(), "Shravan", "smhariha@ucsd.edu", courses1
        ));
        repository.findAll().forEach(System.out::println);
    }
}