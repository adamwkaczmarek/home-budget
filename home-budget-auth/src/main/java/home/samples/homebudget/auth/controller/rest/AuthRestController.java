package home.samples.homebudget.auth.controller.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by Adam on 2016-12-25.
 */
@RestController
@RequestMapping("/")
public class AuthRestController {

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }
}
