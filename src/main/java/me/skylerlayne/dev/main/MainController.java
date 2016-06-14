package me.skylerlayne.dev.main;


import me.skylerlayne.dev.bean.PostBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * This class represents the main controller for the API.
 * <p>
 * Created by Skyler Layne © 2016
 */
@RestController
public class MainController {



    @RequestMapping(method= RequestMethod.GET, value="/test-route")
    public @ResponseBody
    PostBean newPost(@RequestParam(value="title", required=false, defaultValue="Post Title") String title, @RequestParam(value="content", required=false, defaultValue="Post Content") String content) {

        ApplicationContext context = new ClassPathXmlApplicationContext(
                "Spring-Module.xml");



        PostBean obj = (PostBean) context.getBean("postBean");
        System.out.print(obj.getTitle() + ": " + obj.getContent());

        return new PostBean(title, content);
    }
}
