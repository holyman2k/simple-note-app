package com.charliewu.notes.services.impl;

import com.charliewu.notes.domain.Account;
import com.charliewu.notes.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by charliewu on 7/2/17.
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.findByUsername(username);

        if (account != null) {
            Set<GrantedAuthority> grantedAuthorities = new HashSet<>();

            grantedAuthorities.add(new SimpleGrantedAuthority("User"));

            return new User(account.getUsername(), account.getPassword(), grantedAuthorities);
        }

        throw new UsernameNotFoundException("user name not found");
    }
}
