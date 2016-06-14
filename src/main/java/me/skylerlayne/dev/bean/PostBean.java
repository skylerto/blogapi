package me.skylerlayne.dev.bean;

/**
 * This class represents a single post.
 * <p>
 * Created by Skyler Layne © 2016
 */
public class PostBean {

    private String title;
    private String content;

    public PostBean(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public PostBean() {}

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
