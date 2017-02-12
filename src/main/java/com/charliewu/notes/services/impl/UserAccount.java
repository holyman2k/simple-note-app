package com.charliewu.notes.services.impl;

import com.charliewu.notes.domain.Account;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.HashSet;

/**
 * Created by Charlie Wu on 2017-02-08.
 */
public class UserAccount extends User {

    private String name;

    private String username;

    private long accountId;

    public UserAccount(Account account) {
        super(account.getUsername(), account.getPassword(), new HashSet<GrantedAuthority>() {{
            new SimpleGrantedAuthority("User");
        }});
        this.name = account.getName();
        this.username = account.getUsername();
        this.accountId = account.getId();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }
}
