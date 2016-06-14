package me.skylerlayne.dev.main;


import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * This class represents ...
 * <p>
 * Created by Skyler Layne © 2016
 */
@SpringBootApplication
public class Main {
    static Logger log = Logger.getLogger(Main.class.getName());

    public static void main(String[] args) {
        log.info("App Starting...");
        SpringApplication.run(Main.class, args);
    }

}
