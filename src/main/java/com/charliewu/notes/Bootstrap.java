package com.charliewu.notes;

import com.charliewu.notes.domain.Account;
import com.charliewu.notes.domain.Label;
import com.charliewu.notes.domain.Note;
import com.charliewu.notes.repositories.AccountRepository;
import com.charliewu.notes.repositories.LabelRepository;
import com.charliewu.notes.repositories.NoteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

/**
 * Created by charliewu on 4/2/17.
 */
@Component
public class Bootstrap implements ApplicationListener<ApplicationReadyEvent> {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private LabelRepository labelRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Bean
    public BCryptPasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    private static final Logger logger = LoggerFactory.getLogger(Bootstrap.class);

    @Override
    @Transactional
    public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
        logger.debug("App started, create bootstrap data");

        Account account = createAccount();

        Note note = createNote("Hello World", account);

        createLabel("first_label", note);
        createLabel("greeting", note);
    }

    private Account createAccount() {
        BCryptPasswordEncoder passwordEncoder = getPasswordEncoder();
        Account account = new Account("charliewu", passwordEncoder.encode("password"), "Charlie Wu");
        accountRepository.save(account);
        return account;
    }

    private Note createNote(String content, Account account) {
        Note note = new Note(content, account);
        noteRepository.save(note);
        return note;
    }

    private Label createLabel(String name, Note note) {

        Label label = new Label(name, note);
        labelRepository.save(label);

        return label;
    }

}
