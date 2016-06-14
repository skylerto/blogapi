package me.skylerlayne.dev.main;


import me.skylerlayne.dev.bean.PostBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * This class represents ...
 * <p>
 * Created by Skyler Layne © 2016
 */
public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext(
                "Spring-Module.xml");

        PostBean obj = (PostBean) context.getBean("postBean");
        System.out.print(obj.getTitle() + ": " + obj.getContent());
    }

}
