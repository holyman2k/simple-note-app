package com.charliewu.notes.services;

import com.charliewu.notes.services.impl.UserAccount;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Created by charliewu on 7/2/17.
 */
public interface SecurityService {

    UserAccount findLoggedInUserAccount();

    void autoLogin(String username, String password);
}
