package me.skylerlayne.dev.main;


import me.skylerlayne.dev.bean.PostBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This class represents the main controller for the API.
 * <p>

 * <p>
 * <p>
 * Created by Skyler Layne © 2016
 */
@RestController
public class MainController {

    @RequestMapping(method = RequestMethod.GET, value = "/test")
    public
    @ResponseBody
    Test getTest() {
        return new Test("BlogAPI", "This is a blog API written in Spring!");
    }


    @RequestMapping(method = RequestMethod.GET, value = "/test-route")
    public
    @ResponseBody
    PostBean testPost(@RequestParam(value = "title", required = false, defaultValue = "Post Title") String title, @RequestParam(value = "content", required = false, defaultValue = "Post Content") String content) {
        ApplicationContext context = new ClassPathXmlApplicationContext("Spring-Module.xml");
        PostBean obj = (PostBean) context.getBean("postBean");
        System.out.print(obj.getTitle() + ": " + obj.getContent());
        return new PostBean(title, content);
    }




    /* BLOG API */

    ArrayList<PostBean> posts = new ArrayList<>();

    @RequestMapping(method = RequestMethod.GET, value = "/blog/posts")
    public
    @ResponseBody
    ArrayList<PostBean> getPosts() {
        return posts;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/blog/posts/new")
    public
    @ResponseBody
    PostBean newPost(@RequestParam(value = "title", required = false, defaultValue = "Default Title") String title, @RequestParam(value = "content", required = false, defaultValue = "Default Content") String content) {
        PostBean post = new PostBean(title, content);
        posts.add(post);
        return post;
    }
}

class Test {
    private String name;
    private String content;

    public Test(String name, String content) {
        this.name = name;
        this.content = content;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
