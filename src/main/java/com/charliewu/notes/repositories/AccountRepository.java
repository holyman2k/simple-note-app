package com.charliewu.notes.repositories;

import com.charliewu.notes.domain.Account;
import com.charliewu.notes.domain.Label;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by charliewu on 7/2/17.
 */
public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByUsername(String username);
}
