package me.skylerlayne.dev.main;


import me.skylerlayne.dev.bean.PostBean;
import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This class represents the main controller for the API.
 * <p>
 * <p>
 * <p>
 * <p>
 * Created by Skyler Layne © 2016
 */
@RestController
public class MainController {
    static Logger log = Logger.getLogger(Main.class.getName());

    @RequestMapping(method = RequestMethod.GET, value = "/test")
    public
    @ResponseBody
    Test getTest() {
        log.info("GET request on route /test");
        return new Test("BlogAPI", "This is a blog API written in Spring!");
    }


    @RequestMapping(method = RequestMethod.GET, value = "/test-route")
    public
    @ResponseBody
    PostBean testPost(@RequestParam(value = "title", required = false, defaultValue = "Post Title") String title, @RequestParam(value = "content", required = false, defaultValue = "Post Content") String content) {
        log.info("GET request on route /test-route");
        ApplicationContext context = new ClassPathXmlApplicationContext("Spring-Module.xml");
        PostBean obj = (PostBean) context.getBean("postBean");
        System.out.print(obj.getTitle() + ": " + obj.getContent());
        return new PostBean(title, content);
    }
    
    /* BLOG API */

    ArrayList<PostBean> posts = new ArrayList<>();

    /**
     * GET /blog/posts
     *
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/blog/posts", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    ArrayList<PostBean> getPosts() {
        log.info("GET request on route /blog/posts: " + posts.toString());
        return posts;
    }

    /**
     * POST /blog/posts/new
     *
     * @param title
     * @param content
     * @return
     */
    @RequestMapping(method = RequestMethod.POST, value = "/blog/posts", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    PostBean newPost(@RequestParam(value = "title", required = false, defaultValue = "Default Title") String title, @RequestParam(value = "content", required = false, defaultValue = "Default Content") String content) {
        PostBean post = new PostBean(title, content);
        log.info("POST request on route /blog/posts with data: " + post.toString());
        posts.add(post);
        return post;
    }

    /**
     * GET /blog/posts/{id}
     *
     * @param id
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/blog/posts/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    ArrayList<PostBean> getPostById(@PathVariable(value = "id") String id) {
        ArrayList<PostBean> ps = new ArrayList<>();
        log.info("GET request on route /blog/posts/:id with id: " + id);
        try {
            int index = Integer.parseInt(id);
            ps.add(posts.get(index));
        } catch (NumberFormatException | IndexOutOfBoundsException e) {
            // log exception
            log.error(e);
            System.out.println(e.getMessage());
        }
        return ps;
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
